import { useState, useEffect } from 'react';
import { Recipe, FilterKey, RecipeCategory } from './types/recipe';
import { recipes } from './data/recipes';
import { useRecipes } from './hooks/useRecipes';
import { RecipeSection } from './components/RecipeSection';
import { FilterPills } from './components/FilterPills';
import { RecipeModal } from './components/RecipeModal';
import { SearchBar } from './components/SearchBar';
import './styles/index.css';


const CATEGORIES: RecipeCategory[] = ['hair-mask', 'smoothie', 'detox-water'];

export default function App() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Recipe | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const { filtered, counts } = useRecipes(filter, search);

  return (
    <>
      <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.3s' }}>

        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-emerald-600">GroGlow</h1>
              <p className="text-xs text-gray-500">Wellness Recipes for Hair &amp; Skin</p>
            </div>
            <div className="flex gap-4 text-sm text-gray-600">
              <span><strong>{counts['hair-mask']}</strong> Hair Masks</span>
              <span><strong>{counts['smoothie']}</strong> Smoothies</span>
              <span><strong>{counts['detox-water']}</strong> Detox Waters</span>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <SearchBar value={search} onChange={setSearch} />
          <FilterPills filter={filter} onFilter={setFilter} counts={counts} />

          {CATEGORIES.map((cat) => (
            <RecipeSection
              key={cat}
              category={cat}
              recipes={filtered.filter((r: Recipe) => r.category === cat)}
              onSelect={setSelected}
            />
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No recipes found. Try "glow", "rosemary", or "hydration".
            </div>
          )}
        </main>

        <footer className="border-t mt-16 py-8 text-center text-sm text-gray-500">
          <strong>{recipes.length} Wellness Recipes</strong> · GroGlow
        </footer>
      </div>

      <RecipeModal recipe={selected} onClose={() => setSelected(null)} />
    </>
  );
}
