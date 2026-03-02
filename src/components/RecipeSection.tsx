// src/components/RecipeSection.tsx
import { Recipe, RecipeCategory } from '../types/recipe';
import { RecipeCard }             from './RecipeCard';

const SECTION_TITLE: Record<RecipeCategory, string> = {
  'hair-mask':   'Hair Masks',
  'smoothie':    'Smoothies',
  'detox-water': 'Detox Waters',
};

interface RecipeSectionProps {
  category: RecipeCategory;
  recipes:  Recipe[];
  onSelect: (recipe: Recipe) => void;
}

export function RecipeSection({ category, recipes, onSelect }: RecipeSectionProps) {  // ✅ named export
  if (recipes.length === 0) return null;

  return (
    <section className="recipe-section">
      <h2 className="section-title">{SECTION_TITLE[category]}</h2>
      <div className="cards-grid">
        {recipes.map((recipe, i) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            index={i}
            onClick={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
