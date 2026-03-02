import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { recipes } from '../data/recipes';
import { RecipeCard } from './RecipeCard';
import { RecipeFilter } from './FilterPills';
export function RecipesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        category: searchParams.get('category') || 'all',
        benefits: [],
        difficulty: 'all',
        searchQuery: '',
    });
    // Sync URL params with filters
    useEffect(() => {
        const category = searchParams.get('category');
        if (category && (category === 'hair-mask' || category === 'smoothie' || category === 'detox-water')) {
            setFilters(prev => ({ ...prev, category: category }));
        }
    }, [searchParams]);
    // Filter logic using TypeScript
    const filteredRecipes = useMemo(() => {
        return recipes.filter((recipe) => {
            // Category filter
            if (filters.category !== 'all' && recipe.category !== filters.category) {
                return false;
            }
            // Benefits filter (recipe must have ALL selected benefits)
            if (filters.benefits.length > 0) {
                const hasAllBenefits = filters.benefits.every(benefit => recipe.benefits.includes(benefit));
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
                const matchesIngredients = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(query));
                if (!matchesTitle && !matchesDescription && !matchesIngredients) {
                    return false;
                }
            }
            return true;
        });
    }, [filters]);
    return (_jsxs("div", { className: "container mx-auto px-4 py-12", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-4xl mb-3", children: "All Recipes" }), _jsxs("p", { className: "text-gray-600", children: ["Explore ", recipes.length, " natural wellness recipes for hair growth and glowing skin"] })] }), _jsxs("div", { className: "grid lg:grid-cols-[300px,1fr] gap-8", children: [_jsx("aside", { children: _jsx("div", { className: "lg:sticky lg:top-24", children: _jsx(RecipeFilter, { filters: filters, onFiltersChange: setFilters }) }) }), _jsxs("div", { children: [_jsx("div", { className: "mb-6 flex items-center justify-between", children: _jsxs("p", { className: "text-gray-600", children: [filteredRecipes.length, " ", filteredRecipes.length === 1 ? 'recipe' : 'recipes', " found"] }) }), filteredRecipes.length > 0 ? (_jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: filteredRecipes.map((recipe) => (_jsx(RecipeCard, { recipe: recipe }, recipe.id))) })) : (_jsxs("div", { className: "text-center py-16 bg-white rounded-xl border", children: [_jsx("div", { className: "text-gray-400 mb-4", children: _jsx("svg", { className: "size-16 mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }), _jsx("h3", { className: "text-xl mb-2", children: "No recipes found" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Try adjusting your filters or search terms" })] }))] })] })] }));
}
