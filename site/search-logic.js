const LIFESTYLE_ANSWER_IDS = ["quiet", "workHome", "smoking", "pets", "guests", "cleaning", "languages"];

const QUESTION_PATHS = {
  room: [
    "party", "space", "moveDate", "stayLength", "comfortableRent", "privateCeiling", "upfrontFunds",
    "areas", "mustHaves", "pets", "quiet", "workHome", "smoking", "guests", "cleaning", "languages", "intro", "visibility",
  ],
  home: [
    "party", "space", "householdSize", "moveDate", "stayLength", "comfortableRent", "privateCeiling",
    "upfrontFunds", "areas", "mustHaves", "pets", "quiet", "workHome", "smoking", "guests", "cleaning", "languages", "intro", "visibility",
  ],
  people: [
    "party", "moveDate", "stayLength", ...LIFESTYLE_ANSWER_IDS, "intro", "visibility",
  ],
  household: [
    "party", "space", "moveDate", "stayLength", "comfortableRent", "privateCeiling", "upfrontFunds",
    "areas", "mustHaves", "pets",
  ],
};

const OFFER_BASE_QUESTIONS = ["offerType", "offerRent", "moveDate", "stayLength"];
const OFFER_ROOM_QUESTIONS = ["householdSize", "pets", "quiet", "workHome", "smoking", "guests", "cleaning", "languages"];
const OFFER_END_QUESTIONS = ["intro", "visibility"];
const PARTY_SIZES = { solo: 1, "with-one": 2, "with-two": 3, "with-three": 4 };
const SKIP_VALUES = new Set(["", "any", "unsure", "not-sure", "flexible", "discuss", "smoke-unsure", "pet-discuss", "guests-discuss", "clean-discuss"]);

export function questionIdsFor(answers = {}) {
  const goal = answers?.goal;
  let questionIds;
  if (goal === "offer") {
    const roomOffer = answers.offerType === "room";
    questionIds = [
      "goal",
      ...OFFER_BASE_QUESTIONS,
      ...(roomOffer ? OFFER_ROOM_QUESTIONS : []),
      ...OFFER_END_QUESTIONS,
    ];
  } else {
    const path = QUESTION_PATHS[goal];
    questionIds = path ? ["goal", ...path] : ["goal"];
  }
  const hasIntroduction = typeof answers?.intro === "string" && answers.intro.trim().length > 0;
  return questionIds.filter((id) => id !== "visibility" || hasIntroduction);
}

// The UI can use this list to retain answers for the current path and drop stale branch answers.
export function activeAnswerKeys(answers = {}) {
  const keys = questionIdsFor(answers);
  if (keys.includes("mustHaves")) keys.push("featureRule", "requiredFeatures");
  if (keys.includes("moveDate")) keys.push("moveDateRecordedAt");
  return keys;
}

export function rentBasisFor(answers = {}) {
  if (["home", "household"].includes(answers?.goal)) return "whole-home";
  if (answers?.goal === "room") return "room";
  if (answers?.goal === "offer") {
    if (answers.offerType === "room") return "room";
    if (["whole-home", "home"].includes(answers.offerType)) return "whole-home";
  }
  return null;
}

function normalized(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLocaleLowerCase();
}

function finiteAmount(value) {
  if (value === "" || value == null) return null;
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0 ? amount : null;
}

function isActive(answers, id) {
  return activeAnswerKeys(answers).includes(id);
}

function recordUnknown(result, key) {
  if (!result.unknowns.includes(key)) result.unknowns.push(key);
}

function recordReason(result, key) {
  if (!result.reasons.includes(key)) result.reasons.push(key);
}

function amountAnswer(value) {
  if (value && typeof value === "object") {
    return { amount: finiteAmount(value.amount), currency: normalized(value.currency).toUpperCase(), basis: value.basis ?? "" };
  }
  return { amount: finiteAmount(value), currency: "", basis: "" };
}

function propertyAmount(home) {
  return finiteAmount(home?.monthlyRent);
}

function sameCurrency(left, right) {
  return Boolean(normalized(left) && normalized(right) && normalized(left).toUpperCase() === normalized(right).toUpperCase());
}

function dateInterval(value) {
  if (value && typeof value === "object") {
    const from = Date.parse(value.from ?? value.start ?? "");
    const to = Date.parse(value.to ?? value.end ?? "");
    if (Number.isFinite(from) && Number.isFinite(to)) return { from: Math.min(from, to), to: Math.max(from, to) };
    if (Number.isFinite(from)) return { from, to: from };
    if (Number.isFinite(to)) return { from: to, to };
    return null;
  }
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(value)) return null;
  const point = Date.parse(value.length === 10 ? `${value}T00:00:00Z` : value);
  return Number.isFinite(point) ? { from: point, to: point } : null;
}

function answerWindow(value, answers) {
  if (value && typeof value === "object") return dateInterval(value);
  const explicitDate = dateInterval(value);
  if (explicitDate) return explicitDate;
  const reference = dateInterval(answers?.moveDateRecordedAt ?? answers?.asOfDate ?? answers?.referenceDate);
  if (reference) {
    const day = 24 * 60 * 60 * 1000;
    if (value === "asap") return { from: reference.from, to: reference.from + 14 * day };
    if (value === "month") return { from: reference.from, to: reference.from + 30 * day };
    if (value === "later") return { from: reference.from + 30 * day, to: reference.from + 90 * day };
  }
  return null;
}

function windowsOverlap(left, right) {
  return Boolean(left && right && left.from <= right.to && right.from <= left.to);
}

function compareMoveDate(answer, candidate, result) {
  if (!isActive(answer, "moveDate") || !answer.moveDate) return;
  let candidateWindow = dateInterval(candidate?.moveDate);
  if (candidate?.availableFrom != null || candidate?.availableTo != null) {
    const earliest = dateInterval(candidate.availableFrom);
    const latest = dateInterval(candidate.availableTo);
    candidateWindow = earliest
      ? { from: earliest.from, to: latest?.to ?? Number.POSITIVE_INFINITY }
      : null;
  }
  if (answer.moveDate === "flexible") {
    const moveIn = ["asap", "month", "later", "flexible"].includes(normalized(candidate?.moveIn))
      ? candidate.moveIn
      : null;
    if (candidateWindow || candidate?.availableFrom || candidate?.availableTo || candidate?.moveWindow || candidate?.availabilityWindow || candidate?.moveDateWindow || moveIn) {
      result.score += 1;
      recordReason(result, "move-window-flexible");
    } else {
      recordUnknown(result, "moveDate");
    }
    return;
  }
  const requestedWindow = answerWindow(answer.moveDate, answer);
  if (requestedWindow && candidateWindow) {
    if (windowsOverlap(requestedWindow, candidateWindow)) {
      result.score += 3;
      recordReason(result, "move-window-overlaps");
    } else {
      result.score -= 2;
      recordReason(result, "move-window-differs");
    }
    return;
  }

  const requestedLabel = normalized(answer.moveDate);
  const moveIn = ["asap", "month", "later", "flexible"].includes(normalized(candidate?.moveIn))
    ? candidate.moveIn
    : null;
  const explicitCandidateLabel = candidate?.moveWindow ?? candidate?.availabilityWindow ?? candidate?.moveDateWindow ?? moveIn;
  if (explicitCandidateLabel != null && !dateInterval(explicitCandidateLabel)) {
    if (normalized(explicitCandidateLabel) === requestedLabel) {
      result.score += 2;
      recordReason(result, "move-window-matches");
    } else {
      result.score -= 1;
      recordReason(result, "move-window-differs");
    }
    return;
  }
  recordUnknown(result, "moveDate");
}

function stayInterval(value) {
  if (value && typeof value === "object") {
    const min = finiteAmount(value.minMonths ?? value.min);
    const max = finiteAmount(value.maxMonths ?? value.max);
    if (min == null && max == null) return null;
    return { min: min ?? 0, max: max ?? Number.POSITIVE_INFINITY };
  }
  if (value === "under-six") return { min: 0, max: 5 };
  if (value === "year") return { min: 6, max: 18 };
  if (value === "long") return { min: 19, max: Number.POSITIVE_INFINITY };
  return null;
}

function candidateStayInterval(candidate) {
  const min = finiteAmount(candidate?.minStayMonths ?? candidate?.minimumStayMonths);
  const max = finiteAmount(candidate?.maxStayMonths ?? candidate?.maximumStayMonths);
  if (min == null && max == null) return null;
  return { min: min ?? 0, max: max ?? Number.POSITIVE_INFINITY };
}

function compareStayLength(answer, candidate, result) {
  if (!isActive(answer, "stayLength") || !answer.stayLength || SKIP_VALUES.has(normalized(answer.stayLength))) return;
  const wanted = stayInterval(answer.stayLength);
  const offered = candidateStayInterval(candidate);
  if (wanted && offered) {
    if (wanted.min <= offered.max && offered.min <= wanted.max) {
      result.score += 2;
      recordReason(result, "stay-length-overlaps");
    } else {
      result.score -= 1;
      recordReason(result, "stay-length-differs");
    }
    return;
  }
  if (candidate?.stayLength != null) {
    if (normalized(candidate.stayLength) === normalized(answer.stayLength)) {
      result.score += 2;
      recordReason(result, "stay-length-matches");
    } else {
      result.score -= 1;
      recordReason(result, "stay-length-differs");
    }
    return;
  }
  recordUnknown(result, "stayLength");
}

function placeCity(answers) {
  const place = answers?.place ?? answers?.destination ?? answers?.city ?? "";
  return normalized(String(place).split(",")[0]);
}

function sameParentCity(candidate, answers) {
  const requestedCity = placeCity(answers);
  return requestedCity && normalized(candidate?.city) === requestedCity;
}

function areaParts(value) {
  return String(value ?? "").split(/[,;|]/).map(normalized).filter(Boolean);
}

function compareAreas(answer, candidate, result) {
  if (!isActive(answer, "areas")) return;
  const requested = Array.isArray(answer.areas)
    ? answer.areas.flatMap(areaParts)
    : areaParts(answer.areas);
  if (!requested.length) return;
  if (!placeCity(answer) || !sameParentCity(candidate, answer)) {
    recordUnknown(result, "areas");
    return;
  }
  const knownAreas = areaParts(candidate?.area ?? candidate?.district);
  if (!knownAreas.length) {
    recordUnknown(result, "areas");
    return;
  }
  if (requested.some((area) => knownAreas.includes(area))) {
    result.score += 5;
    recordReason(result, "area-exact-match");
  } else {
    result.score -= 1;
    recordReason(result, "area-known-different");
  }
}

const FEATURE_ALIASES = {
  "step-free": ["step-free", "stepfree", "step free", "step-free access", "stepFreeAccess", "stepFree", "accessible"],
  elevator: ["elevator", "lift", "hasElevator"],
  workspace: ["workspace", "workSpace", "desk", "workArea"],
  outdoor: ["outdoor", "outdoorSpace", "balcony", "garden"],
  transit: ["transit", "nearTransit", "transitNearby", "nearPublicTransit", "near public transport"],
  storage: ["storage", "builtInStorage", "storageSpace"],
};

function featureEvidence(home, feature) {
  const aliases = new Set((FEATURE_ALIASES[feature] ?? [feature]).map(normalized));
  for (const key of FEATURE_ALIASES[feature] ?? [feature]) {
    if (typeof home?.[key] === "boolean") return home[key] ? "yes" : "no";
  }
  if (home?.features && !Array.isArray(home.features) && typeof home.features === "object") {
    for (const [key, value] of Object.entries(home.features)) {
      if (aliases.has(normalized(key)) && typeof value === "boolean") return value ? "yes" : "no";
    }
  }
  if (Array.isArray(home?.features)) {
    for (const item of home.features) {
      const value = normalized(item);
      const explicitlyNegative = value.startsWith("no ") || value.startsWith("not ") || value.endsWith(": false");
      const featureText = value.replace(/^(no |not )/, "").replace(/: false$/, "");
      if (aliases.has(featureText)) return explicitlyNegative ? "no" : "yes";
    }
  }
  return "unknown";
}

function explicitRoomSpace(home) {
  for (const value of [home?.roomSpace, home?.roomType, home?.bedroomType, home?.spaceType, home?.space]) {
    const normalizedValue = normalized(value).replace(/[_ ]/g, "-");
    if (["private", "private-room", "own-room"].includes(normalizedValue)) return "private";
    if (["shared", "shared-room", "shared-bedroom"].includes(normalizedValue)) return "shared";
  }
  if (home?.privateRoom === true || home?.isPrivateRoom === true) return "private";
  if (home?.sharedRoom === true || home?.isSharedRoom === true) return "shared";
  const features = Array.isArray(home?.features) ? home.features.map(normalized) : [];
  if (features.some((value) => ["private-room", "private room", "own-room", "own room"].includes(value))) return "private";
  if (features.some((value) => ["shared-room", "shared room", "shared-bedroom", "shared bedroom"].includes(value))) return "shared";
  return null;
}

function compareSpace(answer, home, result) {
  if (!isActive(answer, "space") || answer.space == null || answer.space === "" || answer.space === "any") return;
  if (answer.goal === "room") {
    if (!["private", "shared"].includes(answer.space)) return;
    const actualSpace = explicitRoomSpace(home);
    if (!actualSpace) {
      recordUnknown(result, "space");
    } else if (actualSpace === answer.space) {
      result.score += 4;
      recordReason(result, "room-space-matches");
    } else {
      result.excluded = true;
      recordReason(result, "room-space-conflicts");
    }
    return;
  }

  if (!["home", "household"].includes(answer.goal)) return;
  const bedroomsNeeded = finiteAmount(answer.space);
  if (bedroomsNeeded == null) return;
  const bedrooms = finiteAmount(home?.bedrooms);
  if (bedrooms == null) {
    recordUnknown(result, "space");
    return;
  }
  if (bedrooms >= bedroomsNeeded) {
    result.score += 3;
    recordReason(result, "bedroom-minimum-met");
  } else if (answer.goal === "household") {
    result.excluded = true;
    recordReason(result, "household-bedroom-minimum-missed");
  } else {
    result.score -= 3;
    recordReason(result, "bedroom-minimum-missed");
  }
}

function compareHouseholdSize(answer, candidate, result) {
  if (!isActive(answer, "householdSize") || answer.householdSize == null || answer.householdSize === "any") return;
  const requested = finiteAmount(answer.householdSize);
  if (requested == null) return;
  const capacity = finiteAmount(candidate?.capacity ?? candidate?.householdCapacity ?? candidate?.maxOccupants);
  if (capacity == null) {
    recordUnknown(result, "householdSize");
  } else if (capacity >= requested) {
    result.score += 2;
    recordReason(result, "household-capacity-fits");
  } else {
    result.score -= 2;
    recordReason(result, "household-capacity-below-preference");
  }
}

function comparePartyCapacity(answer, candidate, result) {
  if (!isActive(answer, "party") || !Object.hasOwn(PARTY_SIZES, answer.party)) return;
  const capacity = finiteAmount(candidate?.capacity ?? candidate?.householdCapacity ?? candidate?.maxOccupants);
  if (capacity == null) {
    recordUnknown(result, "party");
  } else if (capacity >= PARTY_SIZES[answer.party]) {
    result.score += 2;
    recordReason(result, "moving-group-fits-capacity");
  } else {
    result.score -= 2;
    recordReason(result, "moving-group-exceeds-reported-capacity");
  }
}

function compareComfortableRent(answer, home, result) {
  if (!isActive(answer, "comfortableRent")) return;
  const wanted = amountAnswer(answer.comfortableRent);
  if (wanted.amount == null) return;
  const targetBasis = rentBasisFor(answer);
  if (!targetBasis) return;
  if (!home?.rentBasis) {
    recordUnknown(result, "comfortableRent");
    return;
  }
  if (home.rentBasis !== targetBasis) return;
  const rent = propertyAmount(home);
  if (rent == null || !sameCurrency(home?.currency, wanted.currency)) {
    recordUnknown(result, "comfortableRent");
    return;
  }
  const ratio = wanted.amount === 0 ? (rent === 0 ? 0 : Number.POSITIVE_INFINITY) : rent / wanted.amount;
  if (ratio <= 1) {
    result.score += 4 - ratio;
    recordReason(result, "rent-within-comfortable-range");
  } else {
    result.score -= Math.min(3, ratio - 1);
    recordReason(result, "rent-above-comfortable-range");
  }
}

function comparePrivateCeiling(answer, home, result) {
  if (!isActive(answer, "privateCeiling")) return;
  const ceiling = amountAnswer(answer.privateCeiling);
  if (ceiling.amount == null) return;
  const targetBasis = rentBasisFor(answer);
  if (!targetBasis) return;
  if (!home?.rentBasis) {
    recordUnknown(result, "privateCeiling");
    return;
  }
  if (home.rentBasis !== targetBasis) return;
  if (ceiling.basis && normalized(ceiling.basis) !== normalized(home.rentBasis)) {
    recordUnknown(result, "privateCeiling");
    return;
  }
  const rent = propertyAmount(home);
  if (rent == null || !sameCurrency(home?.currency, ceiling.currency)) {
    recordUnknown(result, "privateCeiling");
    return;
  }
  if (rent > ceiling.amount) {
    result.excluded = true;
    recordReason(result, "rent-exceeds-private-ceiling");
  } else {
    recordReason(result, "rent-within-private-ceiling");
  }
}

function upfrontFacts(home) {
  const total = finiteAmount(home?.upfrontTotal ?? home?.totalUpfront);
  if (total != null) {
    return { amount: total, basis: home?.upfrontBasis, currency: home?.upfrontCurrency };
  }
  const deposit = finiteAmount(home?.deposit);
  const fees = finiteAmount(home?.fees);
  if (deposit == null || fees == null) return null;
  if (!home?.depositBasis || !home?.feesBasis || normalized(home.depositBasis) !== normalized(home.feesBasis)) return null;
  if (!sameCurrency(home?.depositCurrency, home?.feesCurrency)) return null;
  return { amount: deposit + fees, basis: home.depositBasis, currency: home.depositCurrency };
}

function compareUpfrontFunds(answer, home, result) {
  if (!isActive(answer, "upfrontFunds")) return;
  const funds = answer.upfrontFunds;
  const amount = finiteAmount(funds?.amount);
  if (amount == null) return;
  const facts = upfrontFacts(home);
  if (!facts?.basis || !facts?.currency) {
    recordUnknown(result, "upfrontFunds");
    return;
  }
  if (normalized(facts.basis) !== normalized(funds.basis) || !sameCurrency(facts.currency, funds.currency)) {
    recordUnknown(result, "upfrontFunds");
    return;
  }
  if (funds.hardLimit === true && facts.amount > amount) {
    result.excluded = true;
    recordReason(result, "upfront-limit-exceeded");
  } else if (facts.amount <= amount) {
    result.score += 2;
    recordReason(result, "upfront-funds-cover-known-total");
  } else {
    result.score -= 2;
    recordReason(result, "upfront-funds-below-known-total");
  }
}

function compareMustHaves(answer, home, result) {
  if (!isActive(answer, "mustHaves") || !Array.isArray(answer.mustHaves)) return;
  for (const feature of answer.mustHaves) {
    if (!Object.hasOwn(FEATURE_ALIASES, feature)) continue;
    const evidence = featureEvidence(home, feature);
    if (evidence === "no") {
      if (answer.featureRule === "required" && Array.isArray(answer.requiredFeatures) && answer.requiredFeatures.includes(feature)) {
        result.excluded = true;
        recordReason(result, `required-feature-${feature}-explicitly-unavailable`);
      } else {
        result.score -= 2;
        recordReason(result, `must-have-${feature}-unavailable`);
      }
    } else if (evidence === "yes") {
      result.score += 2;
      recordReason(result, `must-have-${feature}-confirmed`);
    } else {
      recordUnknown(result, `mustHaves.${feature}`);
    }
  }
}

function comparePets(answer, home, result) {
  if (!isActive(answer, "pets") || !answer.pets || SKIP_VALUES.has(normalized(answer.pets))) return;
  const permitsPets = typeof home?.petsAllowed === "boolean"
    ? home.petsAllowed
    : typeof home?.petFriendly === "boolean"
      ? home.petFriendly
      : typeof home?.allowsPets === "boolean"
        ? home.allowsPets
        : null;
  if (permitsPets == null) {
    recordUnknown(result, "pets");
    return;
  }
  const movingWithPet = answer.pets === "pet-with-me";
  if (movingWithPet && !permitsPets) {
    result.score -= 3;
    recordReason(result, "pets-not-confirmed-for-moving-pet");
  } else if (permitsPets && ["pet-with-me", "pet-welcome"].includes(answer.pets)) {
    result.score += 2;
    recordReason(result, "pets-welcome-confirmed");
  } else if (!permitsPets && answer.pets === "pet-welcome") {
    result.score -= 2;
    recordReason(result, "pets-not-welcome");
  }
}

function newFitResult() {
  return { excluded: false, score: 0, reasons: [], unknowns: [] };
}

export function homeFit(home = {}, answers = {}) {
  const result = newFitResult();
  compareSpace(answers, home, result);
  comparePartyCapacity(answers, home, result);
  compareHouseholdSize(answers, home, result);
  compareAreas(answers, home, result);
  compareMoveDate(answers, home, result);
  compareStayLength(answers, home, result);
  compareComfortableRent(answers, home, result);
  comparePrivateCeiling(answers, home, result);
  compareUpfrontFunds(answers, home, result);
  compareMustHaves(answers, home, result);
  comparePets(answers, home, result);
  return result;
}

function languageCode(value) {
  const language = normalized(value);
  const aliases = {
    english: "en", engleza: "en", romanian: "ro", romana: "ro", spanish: "es", espanol: "es",
    french: "fr", german: "de", russian: "ru", rusa: "ru", ukrainian: "uk", ucraineana: "uk",
  };
  return aliases[language] ?? language;
}

function compareLifestyle(answer, person, result) {
  for (const key of LIFESTYLE_ANSWER_IDS) {
    if (!isActive(answer, key)) continue;
    const wanted = answer[key];
    if (key === "languages") {
      if (!Array.isArray(wanted) || wanted.length === 0) continue;
      const spoken = person.languages ?? person.language;
      if (!Array.isArray(spoken) && typeof spoken !== "string") {
        recordUnknown(result, key);
        continue;
      }
      const available = new Set((Array.isArray(spoken) ? spoken : [spoken]).map(languageCode));
      const overlap = wanted.filter((value) => available.has(languageCode(value))).length;
      if (overlap > 0) {
        result.score += overlap * 2;
        recordReason(result, "language-overlap");
      } else {
        result.score -= 1;
        recordReason(result, "no-selected-language-listed");
      }
      continue;
    }
    if (wanted == null || SKIP_VALUES.has(normalized(wanted))) continue;
    const candidate = person[key];
    if (candidate == null || candidate === "") {
      recordUnknown(result, key);
    } else if (normalized(candidate) === normalized(wanted)) {
      result.score += 2;
      recordReason(result, `${key}-matches`);
    } else {
      result.score -= 1;
      recordReason(result, `${key}-differs`);
    }
  }
}

function compareParty(answer, person, result) {
  if (!isActive(answer, "party") || !Object.hasOwn(PARTY_SIZES, answer.party)) return;
  const groupSize = finiteAmount(person?.partySize ?? person?.groupSize ?? person?.movingGroupSize);
  if (groupSize == null) {
    recordUnknown(result, "party");
  } else if (groupSize === PARTY_SIZES[answer.party]) {
    result.score += 2;
    recordReason(result, "moving-group-size-matches");
  } else {
    result.score -= 1;
    recordReason(result, "moving-group-size-differs");
  }
}

function compareOfferedHouseholdSize(answer, person, result) {
  if (answer.goal !== "offer" || answer.offerType !== "room" || !isActive(answer, "householdSize")) return;
  const requested = finiteAmount(answer.householdSize);
  if (requested == null) return;
  const candidate = finiteAmount(person?.householdSize ?? person?.targetHouseholdSize);
  if (candidate == null) {
    recordUnknown(result, "householdSize");
  } else if (candidate === requested) {
    result.score += 2;
    recordReason(result, "offered-household-size-matches");
  } else {
    result.score -= 1;
    recordReason(result, "offered-household-size-differs");
  }
}

function personBudget(person) {
  for (const key of ["privateCeiling", "maxRent", "rentBudget", "budget", "comfortableRent"]) {
    const candidate = person?.[key];
    if (candidate && typeof candidate === "object") {
      const amount = finiteAmount(candidate.amount ?? candidate.max ?? candidate.maxAmount);
      if (amount != null) return { amount, currency: candidate.currency, basis: candidate.basis };
    }
  }
  return null;
}

function compareOfferRent(answer, person, result) {
  if (answer.goal !== "offer" || !answer.offerType) return;
  const offeredRent = amountAnswer(answer.offerRent);
  const budget = personBudget(person);
  if (offeredRent.amount == null || !offeredRent.currency) {
    recordUnknown(result, "offerRent");
    return;
  }
  if (!budget || !budget.basis || !budget.currency) {
    recordUnknown(result, "personRentBudget");
    return;
  }
  const basis = rentBasisFor(answer);
  if (!basis || normalized(budget.basis) !== normalized(basis)) return;
  if (!sameCurrency(budget.currency, offeredRent.currency)) {
    recordUnknown(result, "personRentBudget");
    return;
  }
  if (offeredRent.amount <= budget.amount) {
    result.score += 3;
    recordReason(result, "offered-rent-within-person-budget");
  } else {
    result.score -= 2;
    recordReason(result, "offered-rent-above-person-budget");
  }
}

export function personFit(person = {}, answers = {}) {
  const result = newFitResult();
  compareParty(answers, person, result);
  compareOfferedHouseholdSize(answers, person, result);
  compareMoveDate(answers, person, result);
  compareStayLength(answers, person, result);
  compareLifestyle(answers, person, result);
  compareOfferRent(answers, person, result);
  return result;
}
