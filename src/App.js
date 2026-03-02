import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { recipes } from './data/recipes';
import { useRecipes } from './hooks/useRecipes';
import { RecipeSection } from './components/RecipeSection';
import { FilterPills } from './components/FilterPills';
import { RecipeModal } from './components/RecipeModal';
import { SearchBar } from './components/SearchBar';
const CATEGORIES = ['hair-mask', 'smoothie', 'detox-water'];
export default function App() {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { filtered, counts } = useRecipes(filter, search);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { style: { opacity: mounted ? 1 : 0, transition: 'opacity 0.3s' }, children: [_jsx("header", { className: "bg-white border-b sticky top-0 z-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-emerald-600", children: "GroGlow" }), _jsx("p", { className: "text-xs text-gray-500", children: "Wellness Recipes for Hair & Skin" })] }), _jsxs("div", { className: "flex gap-4 text-sm text-gray-600", children: [_jsxs("span", { children: [_jsx("strong", { children: counts['hair-mask'] }), " Hair Masks"] }), _jsxs("span", { children: [_jsx("strong", { children: counts['smoothie'] }), " Smoothies"] }), _jsxs("span", { children: [_jsx("strong", { children: counts['detox-water'] }), " Detox Waters"] })] })] }) }), _jsxs("main", { className: "max-w-6xl mx-auto px-4 py-8", children: [_jsx(SearchBar, { value: search, onChange: setSearch }), _jsx(FilterPills, { filter: filter, onFilter: setFilter, counts: counts }), CATEGORIES.map((cat) => (_jsx(RecipeSection, { category: cat, recipes: filtered.filter((r) => r.category === cat), onSelect: setSelected }, cat))), filtered.length === 0 && (_jsx("div", { className: "text-center py-16 text-gray-500", children: "No recipes found. Try \"glow\", \"rosemary\", or \"hydration\"." }))] }), _jsxs("footer", { className: "border-t mt-16 py-8 text-center text-sm text-gray-500", children: [_jsxs("strong", { children: [recipes.length, " Wellness Recipes"] }), " \u00B7 GroGlow"] })] }), _jsx(RecipeModal, { recipe: selected, onClose: () => setSelected(null) })] }));
}
