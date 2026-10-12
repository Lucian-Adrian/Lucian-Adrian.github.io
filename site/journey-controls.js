const STEP_COPY = {
  en: {
    budget: (goal) => goal === "offer"
      ? "Let’s set a rent for the home you offer. It stays on this device."
      : "Let’s find a comfortable rent. This stays on this device.",
    daily: "Now, the little things that make a home feel like yours.",
    intro: (goal) => goal === "offer"
      ? "Ready to describe the home? Keep it in your own words."
      : "Want to add a short hello? Keep it in your own words.",
  },
  ro: {
    budget: (goal) => goal === "offer"
      ? "Hai să alegem chiria locuinței oferite. Ciorna rămâne pe acest dispozitiv."
      : "Hai să alegem o chirie potrivită. Rămâne pe acest dispozitiv.",
    daily: "Acum, lucrurile mici care fac o locuință să fie a ta.",
    intro: (goal) => goal === "offer"
      ? "Descriem locuința? Folosește cuvintele tale."
      : "Adaugi o scurtă prezentare? Scrie în cuvintele tale.",
  },
  es: {
    budget: (goal) => goal === "offer"
      ? "Elijamos el alquiler de la vivienda que ofreces. Queda en este dispositivo."
      : "Busquemos un alquiler que te encaje. Queda en este dispositivo.",
    daily: "Ahora, los pequeños detalles que hacen que un hogar sea tuyo.",
    intro: (goal) => goal === "offer"
      ? "¿Describimos la vivienda? Cuéntalo con tus palabras."
      : "¿Añadimos una breve presentación? Cuéntalo con tus palabras.",
  },
  fr: {
    budget: (goal) => goal === "offer"
      ? "Choisissons le loyer du logement proposé. Il reste sur cet appareil."
      : "Cherchons un loyer qui te convient. Il reste sur cet appareil.",
    daily: "Passons aux petits détails qui font qu’on se sent chez soi.",
    intro: (goal) => goal === "offer"
      ? "On décrit le logement ? Avec tes mots, bien sûr."
      : "Tu veux ajouter une courte présentation ? Avec tes mots.",
  },
  de: {
    budget: (goal) => goal === "offer"
      ? "Legen wir die Miete für dein Angebot fest. Der Entwurf bleibt hier."
      : "Finden wir eine passende Miete. Sie bleibt auf diesem Gerät.",
    daily: "Jetzt geht’s um die kleinen Dinge, die ein Zuhause ausmachen.",
    intro: (goal) => goal === "offer"
      ? "Beschreiben wir das Zuhause? Am besten mit deinen eigenen Worten."
      : "Möchtest du dich kurz vorstellen? Mit deinen eigenen Worten.",
  },
};

const ADJUST_LABELS = {
  en: { decrease: "Decrease", increase: "Increase" },
  ro: { decrease: "Scade", increase: "Crește" },
  es: { decrease: "Reducir", increase: "Aumentar" },
  fr: { decrease: "Diminuer", increase: "Augmenter" },
  de: { decrease: "Verringern", increase: "Erhöhen" },
};

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function numberBounds(min, max = 20) {
  const lower = Number.isFinite(Number(min)) ? Math.ceil(Number(min)) : 0;
  const requestedUpper = Number.isFinite(Number(max)) ? Math.floor(Number(max)) : 20;
  return { min: lower, max: Math.max(lower, requestedUpper) };
}

export function clampNumber(value, min = 0, max = 20) {
  if (value == null || String(value).trim() === "") return null;
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return null;

  const bounds = numberBounds(min, max);
  return Math.min(bounds.max, Math.max(bounds.min, Math.round(numericValue)));
}

export function renderNumberControl({
  id,
  value,
  min,
  max = 20,
  unit,
  label,
  locale = "en",
  decreaseLabel,
  increaseLabel,
}) {
  const key = escapeHTML(id);
  const bounds = numberBounds(min, max);
  const number = clampNumber(value, bounds.min, bounds.max);
  const labels = ADJUST_LABELS[locale] ?? ADJUST_LABELS.en;
  const downLabel = decreaseLabel || labels.decrease;
  const upLabel = increaseLabel || labels.increase;
  const downDisabled = number == null || number <= bounds.min;
  const upDisabled = number != null && number >= bounds.max;
  const valueAttribute = number == null ? "" : ` value="${number}"`;

  return `<div class="number-control" data-number-control="${key}">
    <button class="number-control__button" type="button" data-action="number-adjust" data-step="${key}" data-delta="-1" aria-label="${escapeHTML(downLabel)} ${escapeHTML(label)}"${downDisabled ? " disabled" : ""}>−</button>
    <input class="number-control__input" type="number" id="number-${key}" name="number-${key}" data-size-input data-step="${key}" aria-label="${escapeHTML(label)}" min="${bounds.min}" max="${bounds.max}" step="1" inputmode="numeric"${valueAttribute}>
    <span class="number-control__unit">${escapeHTML(unit)}</span>
    <button class="number-control__button" type="button" data-action="number-adjust" data-step="${key}" data-delta="1" aria-label="${escapeHTML(upLabel)} ${escapeHTML(label)}"${upDisabled ? " disabled" : ""}>+</button>
  </div>`;
}

export const numberControl = renderNumberControl;

export function stageCopy(chapter, locale = "en", goal = "") {
  const language = STEP_COPY[locale] ?? STEP_COPY.en;
  const key = ({
    1: "budget",
    2: "daily",
    3: "intro",
    money: "budget",
    life: "daily",
    meet: "intro",
  })[chapter] ?? chapter;
  const copy = language[key];
  return typeof copy === "function" ? copy(goal) : (copy ?? "");
}
