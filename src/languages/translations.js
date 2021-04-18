import { english } from "./english";
import { french } from "./french";

export function translateTo(toLanguage) {
  switch (toLanguage) {
    case "french":
      return french;
    case "english":
      return english;
    default:
      break;
  }
}
