import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { recipes } from '../data/recipes';
import { FilterState, Recipe } from '../types/recipe';
import { RecipeCard } from './RecipeCard';
import { RecipeFilter } from './FilterPills';

export function RecipesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [filters, setFilters] = useState<FilterState>({
    category: (searchParams.get('category') as FilterState['category']) || 'all',
    benefits: [],
    difficulty: 'all',
    searchQuery: '',
  });

  // Sync URL params with filters
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && (category === 'hair-mask' || category === 'smoothie' || category === 'detox-water')) {
      setFilters(prev => ({ ...prev, category: category as 'hair-mask' | 'smoothie' | 'detox-water' }));
    }
  }, [searchParams]);

  // Filter logic using TypeScript
  const filteredRecipes = useMemo<Recipe[]>(() => {
    return recipes.filter((recipe) => {
      // Category filter
      if (filters.category !== 'all' && recipe.category !== filters.category) {
        return false;
      }

      // Benefits filter (recipe must have ALL selected benefits)
      if (filters.benefits.length > 0) {
        const hasAllBenefits = filters.benefits.every(benefit =>
          recipe.benefits.includes(benefit)
        );
        if (!hasAllBenefits) {
          return false;
        }
      }

      // Difficulty filter
      if (filters.difficulty !== 'all' && recipe.difficulty !== filters.difficulty) {
        return false;
      }

      // Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = recipe.title.toLowerCase().includes(query);
        const matchesDescription = recipe.description.toLowerCase().includes(query);
        const matchesIngredients = recipe.ingredients.some(ing =>
          ing.name.toLowerCase().includes(query)
        );
        
        if (!matchesTitle && !matchesDescription && !matchesIngredients) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl mb-3">All Recipes</h1>
        <p className="text-gray-600">
          Explore {recipes.length} natural wellness recipes for hair growth and glowing skin
        </p>
      </div>

      <div className="grid lg:grid-cols-[300px,1fr] gap-8">
        {/* Filters Sidebar */}
        <aside>
          <div className="lg:sticky lg:top-24">
            <RecipeFilter filters={filters} onFiltersChange={setFilters} />
          </div>
        </aside>

        {/* Recipe Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
            </p>
          </div>

          {filteredRecipes.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border">
              <div className="text-gray-400 mb-4">
                <svg className="size-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}