export type RecipeCategory = 'hair-mask' | 'smoothie' | 'detox-water';
export type FilterKey = RecipeCategory | 'all';
export type DifficultyLevel = 'easy' | 'medium' | 'advanced';

export type BenefitTag = 
  | 'hair-growth' | 'moisturizing' | 'anti-frizz' | 'scalp-health'
  | 'shine'| 'glowing-skin'| 'anti-aging'| 'hydration'| 'detox'
  | 'volume'| 'energy';

export interface Ingredient { 
name: string; 
benefit: string; 
emoji: string;
}

export interface Recipe {
id: number;
title: string; 
description: string; 
image: string; // base64 data URI 
category: RecipeCategory;
tag: string; // single word for filtering
difficulty: DifficultyLevel; 
time: string; 
color: string; // accent hex for fallback 
benefits: BenefitTag[]; 
ingredients: Ingredient[]; 
steps: string[]; 
} 

 
export interface FilterOption { 
key: FilterKey; 
label: string; 
icon: string; 
}

export interface FilterState {
  category: FilterKey;
  benefits: BenefitTag[];
  difficulty: DifficultyLevel | 'all' ;
  searchQuery: string;
}


