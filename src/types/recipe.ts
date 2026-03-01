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
  | 'volume'
  | 'energy';

export interface Ingredient { 
name: string; 
benefit: string; 
emoji: string

id: number; 
title: string; 
category: RecipeCategory; 
tag: string; 
difficulty: 'Easy' | 'Medium' | 'Hard'; 
time: string; 
color: string; // accent hex for fallback 
image: string; // base64 data URI 
benefits: string[]; 
description: string; 
ingredients: Ingredient[]; 
steps: string[]; 
} 
export type FilterKey = 'all' | RecipeCategory; 
export interface FilterOption { 
key: FilterKey; 
label: string; 
icon: string; 
}

export interface FilterState {
  category: FilterKey;
  benefits: BenefitTag[];
  difficulty: 'all' | DifficultyLevel;
  searchQuery: string;
}

