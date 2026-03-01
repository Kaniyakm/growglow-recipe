import { useState, useEffect } from 'react';
import { Recipe, FilterKey } from './types/recipe';
import { CATEGORIES } from './data/filters';
import { useRecipes } from './hooks/useRecipes';
import { SearchBar } from './components/SearchBar';
import { FilterPills } from './components/FilterPills';
import { RecipeSection } from './components/RecipeSection';
import { RecipeModal } from './components/RecipeModal';
import './index.css';

export default function App() {
  const [filter,   setFilter]   = useState<FilterKey>('all');
  const [search,   setSearch]   = useState('');
  const [selected, setSelected] = useState<Recipe | null>(null);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const { filtered, counts } = useRecipes(filter, search);

  return (
    <>
      <div className="app" style={{ opacity: mounted ? 1 : 0 }}>
        <header className="header">
          <h1 className="logo">Gro<span>Glow</span></h1>
          <p className="tagline">Wellness Recipes for Hair &amp; Skin</p>
          <div className="stats-row">
            <div className="stat"><div className="stat-num">4</div><div className="stat-label">Hair Masks</div></div>
            <div className="stat"><div className="stat-num">4</div><div className="stat-label">Smoothies</div></div>
            <div className="stat"><div className="stat-num">11</div><div className="stat-label">Spa Waters</div></div>
          </div>
        </header>

        <SearchBar value={search} onChange={setSearch} />
        <FilterPills filter={filter} onFilter={setFilter} counts={counts} />

        {CATEGORIES.map((cat) => (
          <RecipeSection
            key={cat}
            category={cat}
            recipes={filtered.filter((r) => r.category === cat)}
            onSelect={setSelected}
          />
        ))}

        {filtered.length === 0 && (
          <div className="empty">
            No recipes found. Try "glow", "rosemary", or "hydration".
          </div>
        )}

        <footer className="footer">
          <strong>19 Wellness Recipes</strong> · GroGlow — Built with TypeScript + React
        </footer>
      </div>

      <RecipeModal recipe={selected} onClose={() => setSelected(null)} />
    </>
  );
}
