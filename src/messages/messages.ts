import en from "./en.json";
import ar from "./ar.json";

export const messages = {
  en,
  ar,
} as const;

export type Locale = keyof typeof messages;
