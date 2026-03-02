import { useMemo } from 'react'; // ✅ useState removed — not used
import { recipes } from '../data/recipes'; // ✅ used as allRecipes was meant to be
export function useRecipes(filter, search) {
    const filtered = useMemo(() => {
        const q = search.toLowerCase().trim();
        return recipes.filter((r) => {
            const matchCat = filter === 'all' || r.category === filter;
            const matchSearch = !q
                || r.title.toLowerCase().includes(q)
                || r.benefits.some((b) => b.toLowerCase().includes(q))
                || r.ingredients.some((i) => // ✅ proper type — not `typeof allRecipes[0]`
                 i.name.toLowerCase().includes(q));
            return matchCat && matchSearch;
        });
    }, [filter, search]);
    const counts = useMemo(() => ({
        all: recipes.length,
        'hair-mask': recipes.filter((r) => r.category === 'hair-mask').length, // ✅ real schema value
        'smoothie': recipes.filter((r) => r.category === 'smoothie').length, // ✅ real schema value
        'detox-water': recipes.filter((r) => r.category === 'detox-water').length, // ✅ real schema value
    }), []);
    return { filtered, counts };
}
// ✅ export default removed — named export is the hook convention and avoids double export
