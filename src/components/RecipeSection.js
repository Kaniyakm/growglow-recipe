import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RecipeCard } from './RecipeCard';
const SECTION_TITLE = {
    'hair-mask': 'Hair Masks',
    'smoothie': 'Smoothies',
    'detox-water': 'Detox Waters',
};
export function RecipeSection({ category, recipes, onSelect }) {
    if (recipes.length === 0)
        return null;
    return (_jsxs("section", { className: "recipe-section", children: [_jsx("h2", { className: "section-title", children: SECTION_TITLE[category] }), _jsx("div", { className: "cards-grid", children: recipes.map((recipe, i) => (_jsx(RecipeCard, { recipe: recipe, index: i, onClick: onSelect }, recipe.id))) })] }));
}
