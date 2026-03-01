// Union Types
export type RecipeCategory = 'hair-mask' | 'smoothie' | 'detox-water';

export type DifficultyLevel = 'easy' | 'medium' | 'advanced';

export type BenefitTag =
  | 'hair-growth'
  | 'moisturizing'
  | 'anti-frizz'
  | 'scalp-health'
  | 'shine'
  | 'glowing-skin'
  | 'anti-aging'
  | 'hydration'
  | 'detox'
  | 'energy';

export interface Ingredient {
  name: string;
  amount: string;
  benefit: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: RecipeCategory;
  description: string;
  imageUrl: string;
  prepTime: number;
  ingredients: Ingredient[];
  instructions: string[];
  benefits: BenefitTag[];
  difficulty: DifficultyLevel;
  tips?: string;
  summary?: string;
}

export interface FilterState {
  category: RecipeCategory | 'all';
  benefits: BenefitTag[];
  difficulty: DifficultyLevel | 'all';
  searchQuery: string;
}
