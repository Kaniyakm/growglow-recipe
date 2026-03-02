import { useMemo }                    from 'react';             // ✅ useState removed — not used
import { recipes }                    from '../data/recipes';   // ✅ used as allRecipes was meant to be
import { Recipe, FilterKey, RecipeCategory } from '../types/recipe'; // ✅ only what's actually used

type CountMap = {
  all:          number;
  'hair-mask':  number;
  'smoothie':   number;
  'detox-water': number;
};

export function useRecipes(filter: FilterKey, search: string) {

  const filtered = useMemo<Recipe[]>(() => {
    const q = search.toLowerCase().trim();

    return recipes.filter((r: Recipe) => {                     // ✅ `recipes` not `allRecipes`; typed as Recipe
      const matchCat    = filter === 'all' || r.category === filter;
      const matchSearch = !q
        || r.title.toLowerCase().includes(q)
        || r.benefits.some((b: string) => b.toLowerCase().includes(q))
        || r.ingredients.some((i: Recipe['ingredients'][0]) => // ✅ proper type — not `typeof allRecipes[0]`
            i.name.toLowerCase().includes(q)
           );
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  const counts = useMemo<CountMap>(() => ({
    all:           recipes.length,
    'hair-mask':   recipes.filter((r: Recipe) => r.category === 'hair-mask').length,   // ✅ real schema value
    'smoothie':    recipes.filter((r: Recipe) => r.category === 'smoothie').length,    // ✅ real schema value
    'detox-water': recipes.filter((r: Recipe) => r.category === 'detox-water').length, // ✅ real schema value
  }), []);

  return { filtered, counts };
}
// ✅ export default removed — named export is the hook convention and avoids double export
