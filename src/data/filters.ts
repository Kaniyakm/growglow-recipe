import type { BenefitTag, RecipeCategory, DifficultyLevel } from "@/types/recipe";

export const CATEGORIES: RecipeCategory[] = ['hair-mask', 'smoothie', 'detox-water'];

export const CATEGORY_LABEL: Record<RecipeCategory, string> = {
  'hair-mask':    'Hair Mask',
  'smoothie':     'Skin Smoothie',
  'detox-water':  'Detox Water',
};

export const SECTION_LABELS: Record<RecipeCategory, string> = {
  'hair-mask':   '💆 Hair Masks',
  'smoothie':    '✨ Skin Smoothies',
  'detox-water': '💧 Detox Waters',
};

export const BENEFIT_LABELS: Record<BenefitTag, string> = {
  'hair-growth':  'Hair Growth',
  'moisturizing': 'Moisturizing',
  'anti-frizz':   'Anti-Frizz',
  'scalp-health': 'Scalp Health',
  'shine':        'Shine',
  'glowing-skin': 'Glowing Skin',
  'anti-aging':   'Anti-Aging',
  'hydration':    'Hydration',
  'detox':        'Detox',
  'energy':       'Energy',
};

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  easy:     'Easy',
  medium:   'Medium',
  advanced: 'Advanced',
};

export const ALL_BENEFITS: BenefitTag[] = Object.keys(BENEFIT_LABELS) as BenefitTag[];