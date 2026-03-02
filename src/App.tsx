import { useState, useEffect } from 'react';
import { Recipe, FilterKey, RecipeCategory } from './types/recipe';
import { recipes } from './data/recipes';
import { useRecipes } from './hooks/useRecipes';
import { RecipeSection } from './components/RecipeSection';
import { FilterPills } from './components/FilterPills';
import { RecipeModal } from './components/RecipeModal';
import { SearchBar } from './components/SearchBar';
import './index.css';

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
      <div className="app" style={{ opacity: mounted ? 1 : 0 }}>
        <header className="header">
          <h1 className="logo">Gro<span>Glow</span></h1>
          <p className="tagline">Wellness Recipes for Hair &amp; Skin</p>
          <div className="stats-row">
            <div className="stat">
              <div className="stat-num">{counts['hair-mask']}</div>    {/* ✅ dynamic from counts */}
              <div className="stat-label">Hair Masks</div>
            </div>
            <div className="stat">
              <div className="stat-num">{counts['smoothie']}</div>     {/* ✅ dynamic from counts */}
              <div className="stat-label">Smoothies</div>
            </div>
            <div className="stat">
              <div className="stat-num">{counts['detox-water']}</div>  {/* ✅ dynamic from counts */}
              <div className="stat-label">Detox Waters</div>
            </div>
          </div>
        </header>

        <SearchBar value={search} onChange={setSearch} />
        <FilterPills filter={filter} onFilter={setFilter} counts={counts} />

        {CATEGORIES.map((cat) => (                                      // ✅ CATEGORIES now defined
          <RecipeSection
            key={cat}
            category={cat}
            recipes={filtered.filter((r: Recipe) => r.category === cat)}
            onSelect={setSelected}
          />
        ))}

        {filtered.length === 0 && (
          <div className="empty">
            No recipes found. Try "glow", "rosemary", or "hydration".
          </div>
        )}

        <footer className="footer">
          <strong>{recipes.length} Wellness Recipes</strong> · GroGlow — Built with TypeScript + React
        </footer>
      </div>

      <RecipeModal recipe={selected} onClose={() => setSelected(null)} />
    </>
  );
}