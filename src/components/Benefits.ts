import { BenefitTag } from "../types/recipe";

export type { BenefitTag };

// Human‑readable labels
export const BENEFIT_LABEL: Record<BenefitTag, string> = {
  'hair-growth': 'Hair Growth',
  'moisturizing': 'Moisturizing',
  'anti-frizz': 'Anti‑Frizz',
  'scalp-health': 'Scalp Health',
  'shine': 'Shine',
  'glowing-skin': 'Glowing Skin',
  'anti-aging': 'Anti‑Aging',
  'hydration': 'Hydration',
  'detox': 'Detox',
  'energy': 'Energy',
  'volume': 'Volume'
};

// Matching emoji icons
export const BENEFIT_ICON: Record<BenefitTag, string> = {
  'hair-growth': '🌱',
  'moisturizing': '💧',
  'anti-frizz': '✨',
  'scalp-health': '🧖‍♀️',
  'shine': '🌟',
  'glowing-skin': '🌞',
  'anti-aging': '⏳',
  'hydration': '🥤',
  'detox': '🍋',
  'energy': '⚡',
  'volume': '💨'
};

