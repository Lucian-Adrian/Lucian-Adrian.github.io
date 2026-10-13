import { italianWords, italianPhrases, italianReplies, italianFeatures, italianStages, italianStudio } from "./locale-it.js";
import { portugueseWords, portuguesePhrases, portugueseReplies, portugueseFeatures, portugueseStages, portugueseStudio } from "./locale-pt.js";

// Add a language pack here, then include its file in the offline shell and build.
export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "ro", name: "Română" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
];

export const languagePacks = {
  it: { words: italianWords, phrases: italianPhrases, replies: italianReplies, features: italianFeatures, stages: italianStages, studio: italianStudio },
  pt: { words: portugueseWords, phrases: portuguesePhrases, replies: portugueseReplies, features: portugueseFeatures, stages: portugueseStages, studio: portugueseStudio },
};

export function defaultLanguageForCountry(countryCode) {
  return ["RO", "MD"].includes(String(countryCode ?? "").trim().toUpperCase()) ? "ro" : "en";
}
