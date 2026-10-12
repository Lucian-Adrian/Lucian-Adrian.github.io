const CITY_ALIASES = new Map([
  ["bucuresti", "bucharest"],
  ["bucharest", "bucharest"],
  ["kishineu", "chisinau"],
  ["kishinev", "chisinau"],
  ["chisinau", "chisinau"],
  ["nyc", "new york"],
  ["new york city", "new york"],
  ["new york", "new york"],
]);

const COUNTRY_ALIASES = new Map([
  ["md", "moldova"],
  ["republic of moldova", "moldova"],
  ["ro", "romania"],
  ["us", "united states"],
  ["usa", "united states"],
  ["united states of america", "united states"],
  ["gb", "united kingdom"],
  ["uk", "united kingdom"],
  ["ua", "ukraine"],
]);

const CURATED_CITIES = [
  { city: "Chișinău", country: "Moldova", aliases: ["Kishineu", "Kishinev", "Chisinau"] },
  { city: "Bucharest", country: "Romania", aliases: ["București", "Bucuresti"] },
  { city: "Berlin", country: "Germany" },
  { city: "London", country: "United Kingdom" },
  { city: "New York", country: "United States", aliases: ["NYC", "New York City"] },
  { city: "Toronto", country: "Canada" },
  { city: "Iași", country: "Romania", aliases: ["Iasi"] },
  { city: "Paris", country: "France" },
  { city: "Amsterdam", country: "Netherlands" },
  { city: "Chicago", country: "United States" },
  { city: "Tokyo", country: "Japan" },
  { city: "Cluj-Napoca", country: "Romania", aliases: ["Cluj"] },
  { city: "Madrid", country: "Spain" },
  { city: "Dublin", country: "Ireland" },
  { city: "San Francisco", country: "United States" },
  { city: "Sydney", country: "Australia" },
  { city: "Prague", country: "Czechia" },
  { city: "Lisbon", country: "Portugal" },
  { city: "Vienna", country: "Austria" },
  { city: "Kyiv", country: "Ukraine", aliases: ["Kiev"] },
  { city: "Boston", country: "United States" },
  { city: "Montreal", country: "Canada" },
  { city: "Brussels", country: "Belgium" },
  { city: "Rome", country: "Italy" },
  { city: "Seoul", country: "South Korea" },
  { city: "Copenhagen", country: "Denmark" },
  { city: "Warsaw", country: "Poland" },
  { city: "Los Angeles", country: "United States" },
  { city: "Tbilisi", country: "Georgia" },
  { city: "Singapore", country: "Singapore" },
  { city: "Barcelona", country: "Spain" },
  { city: "Melbourne", country: "Australia" },
  { city: "Stockholm", country: "Sweden" },
  { city: "Miami", country: "United States" },
  { city: "Istanbul", country: "Türkiye", aliases: ["Turkey"] },
  { city: "Edinburgh", country: "United Kingdom" },
  { city: "Zurich", country: "Switzerland", aliases: ["Zürich"] },
  { city: "Sofia", country: "Bulgaria" },
  { city: "Austin", country: "United States" },
  { city: "Athens", country: "Greece" },
  { city: "Helsinki", country: "Finland" },
];

function cleanText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function canonicalCityKey(value) {
  const key = cleanText(value);
  return CITY_ALIASES.get(key) ?? key;
}

function canonicalCountryKey(value) {
  const key = cleanText(value);
  return COUNTRY_ALIASES.get(key) ?? key;
}

function parsePlace(value) {
  if (value && typeof value === "object") {
    const city = String(value.city ?? value.name ?? "").trim();
    const country = String(value.country ?? value.countryName ?? value.countryCode ?? "").trim();
    const region = String(value.region ?? "").trim();
    return city ? { city, country, region, aliases: [] } : null;
  }

  const parts = String(value ?? "").split(",").map((part) => part.trim()).filter(Boolean);
  if (!parts.length) return null;
  return {
    city: parts[0],
    country: parts[1] ?? "",
    region: parts.slice(2).join(", "),
    aliases: [],
  };
}

function addCandidate(candidates, place, sourceOrder) {
  if (!place?.city) return;
  const city = String(place.city).trim();
  const country = String(place.country ?? "").trim();
  const region = String(place.region ?? "").trim();
  const aliases = Array.isArray(place.aliases) ? place.aliases.map((alias) => String(alias).trim()).filter(Boolean) : [];
  const cityKey = canonicalCityKey(city);
  const countryKey = canonicalCountryKey(country);
  const identity = `${cityKey}|${countryKey}`;
  const existing = candidates.get(identity);

  if (existing) {
    existing.aliases = [...new Set([...existing.aliases, city, ...aliases])];
    if (!existing.region && region) existing.region = region;
    return;
  }

  candidates.set(identity, {
    city,
    country,
    region,
    cityKey,
    countryKey,
    aliases: [...new Set([city, ...aliases])],
    sourceOrder,
  });
}

function buildCandidates(suppliedCities, nearby) {
  const candidates = new Map();
  let sourceOrder = 0;

  for (const place of CURATED_CITIES) addCandidate(candidates, place, sourceOrder++);

  for (const place of Array.isArray(suppliedCities) ? suppliedCities : []) {
    const parsed = parsePlace(place);
    if (parsed) addCandidate(candidates, parsed, sourceOrder++);
  }

  const nearbyPlace = parsePlace(nearby);
  if (nearbyPlace) {
    const identity = `${canonicalCityKey(nearbyPlace.city)}|${canonicalCountryKey(nearbyPlace.country)}`;
    if (!candidates.has(identity)) {
      addCandidate(candidates, nearbyPlace, -1);
    }
  }

  return [...candidates.values()];
}

function editDistance(left, right) {
  const rows = Array.from({ length: left.length + 1 }, () => []);
  for (let row = 0; row <= left.length; row += 1) rows[row][0] = row;
  for (let column = 0; column <= right.length; column += 1) rows[0][column] = column;

  for (let row = 1; row <= left.length; row += 1) {
    for (let column = 1; column <= right.length; column += 1) {
      const substitution = rows[row - 1][column - 1] + (left[row - 1] === right[column - 1] ? 0 : 1);
      rows[row][column] = Math.min(
        rows[row - 1][column] + 1,
        rows[row][column - 1] + 1,
        substitution,
      );

      if (
        row > 1 && column > 1 &&
        left[row - 1] === right[column - 2] &&
        left[row - 2] === right[column - 1]
      ) {
        rows[row][column] = Math.min(rows[row][column], rows[row - 2][column - 2] + 1);
      }
    }
  }

  return rows[left.length][right.length];
}

function aliasMatchScore(query, aliases) {
  let best = Infinity;
  for (const alias of aliases) {
    const key = canonicalCityKey(alias);
    if (!key) continue;
    if (key === query) return 0;
    if (key.startsWith(query)) best = Math.min(best, 10 + key.length - query.length);
    else if (key.includes(query)) best = Math.min(best, 20 + key.indexOf(query));

    if (query.length >= 5 && key.length >= 5) {
      const distance = editDistance(query, key);
      const limit = query.length >= 9 ? 2 : 1;
      if (distance <= limit) best = Math.min(best, 40 + distance);
    }
  }
  return best;
}

function countryMatches(query, candidate) {
  const key = canonicalCountryKey(query);
  if (!key) return true;
  const values = [candidate.countryKey, cleanText(candidate.region)].filter(Boolean);
  return values.some((value) => value === key || value.startsWith(key) || key.startsWith(value));
}

function rankedCandidates(query, suppliedCities, nearby) {
  const trimmed = String(query ?? "").trim();
  if (!trimmed) return [];

  const parts = trimmed.split(",").map((part) => part.trim()).filter(Boolean);
  const cityQuery = canonicalCityKey(parts[0] ?? "");
  const countryQuery = parts.slice(1).join(" ");
  const fullQuery = cleanText(trimmed);
  const candidates = buildCandidates(suppliedCities, nearby);
  const countryMatched = countryQuery ? candidates.some((candidate) => countryMatches(countryQuery, candidate)) : false;
  const matches = [];

  for (const candidate of candidates) {
    const score = aliasMatchScore(cityQuery, candidate.aliases);
    if (!Number.isFinite(score)) continue;
    const fullPlace = cleanText(`${candidate.city} ${candidate.country}`);
    const countryMatch = countryMatches(countryQuery, candidate);
    if (countryQuery && countryMatched && !countryMatch) continue;
    const fullMatch = countryQuery && countryMatch && fullPlace === fullQuery;
    matches.push({
      candidate,
      score: fullMatch ? -100 : score + (countryQuery && countryMatch ? -20 : 0),
    });
  }

  return matches.sort((left, right) =>
    left.score - right.score ||
    left.candidate.city.localeCompare(right.candidate.city, "en") ||
    left.candidate.country.localeCompare(right.candidate.country, "en") ||
    left.candidate.sourceOrder - right.candidate.sourceOrder
  );
}

function suggestionFor(candidate) {
  return {
    value: candidate.country ? `${candidate.city}, ${candidate.country}` : candidate.city,
    label: candidate.city,
    detail: candidate.country || candidate.region || "",
  };
}

function blankSuggestions(suppliedCities, nearby) {
  const candidates = buildCandidates(suppliedCities, nearby);
  const nearbyPlace = parsePlace(nearby);
  const nearbyIdentity = nearbyPlace
    ? `${canonicalCityKey(nearbyPlace.city)}|${canonicalCountryKey(nearbyPlace.country)}`
    : "";
  const ordered = [];

  if (nearbyIdentity) {
    const match = candidates.find((candidate) => `${candidate.cityKey}|${candidate.countryKey}` === nearbyIdentity);
    if (match) ordered.push(match);
  }

  const rest = candidates.filter((candidate) => !ordered.includes(candidate));
  if (nearbyPlace?.country) {
    const nearbyCountry = canonicalCountryKey(nearbyPlace.country);
    rest.sort((left, right) =>
      Number(right.countryKey === nearbyCountry) - Number(left.countryKey === nearbyCountry) ||
      left.sourceOrder - right.sourceOrder
    );
  } else {
    rest.sort((left, right) => left.sourceOrder - right.sourceOrder);
  }

  const seenCountries = new Set(ordered.map((candidate) => candidate.countryKey).filter(Boolean));
  for (const candidate of rest) {
    if (ordered.length >= 6) break;
    if (candidate.countryKey && seenCountries.has(candidate.countryKey)) continue;
    ordered.push(candidate);
    if (candidate.countryKey) seenCountries.add(candidate.countryKey);
  }

  if (ordered.length < 6) {
    for (const candidate of rest) {
      if (ordered.length >= 6) break;
      if (!ordered.includes(candidate)) ordered.push(candidate);
    }
  }

  return ordered.slice(0, 6).map(suggestionFor);
}

export function destinationSuggestions(query, suppliedCities = [], nearby = "") {
  if (!String(query ?? "").trim()) return blankSuggestions(suppliedCities, nearby);
  return rankedCandidates(query, suppliedCities, nearby).slice(0, 6).map(({ candidate }) => suggestionFor(candidate));
}

export function normalizeDestination(query, suppliedCities = [], nearby = "") {
  const trimmed = String(query ?? "").trim();
  if (!trimmed) return "";

  const matches = rankedCandidates(trimmed, suppliedCities, nearby);
  if (!matches.length) return trimmed;
  const bestScore = matches[0].score;
  if (bestScore >= 10 && bestScore < 40) return trimmed;
  const bestMatches = matches.filter((match) => match.score === bestScore);
  const values = new Set(bestMatches.map(({ candidate }) => suggestionFor(candidate).value));
  return values.size === 1 ? [...values][0] : trimmed;
}
