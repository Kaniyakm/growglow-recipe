import { useMemo } from 'react';
import { FilterKey } from '../types/recipe';
import allRecipes from '../data/recipes';

type CountMap = {
  all: number;
  hair: number;
  skin: number;
  water: number;
};

export function useRecipes(filter: FilterKey, search: string) {
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allRecipes.filter((r: typeof allRecipes[0]) => {
      const matchCat    = filter === 'all' || r.category === filter;
      const matchSearch = !q
        || r.title.toLowerCase().includes(q)
        || r.benefits.some((b: string) => b.toLowerCase().includes(q))
        || r.ingredients.some((i: typeof r.ingredients[0]) => i.name.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  const counts = useMemo<CountMap>(() => ({
    all:   allRecipes.length,
    hair:  allRecipes.filter((r: typeof allRecipes[0]) => r.category === 'hair').length,
    skin:  allRecipes.filter((r: typeof allRecipes[0]) => r.category === 'skin').length,
    water: allRecipes.filter((r: typeof allRecipes[0]) => r.category === 'water').length,
  }), []);

  return { filtered, counts };
}


