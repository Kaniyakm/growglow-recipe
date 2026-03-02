import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Search, X } from 'lucide-react';
import { Button } from './ui/button';
const PILLS = [
    { key: 'all', label: 'All Recipes', icon: '✨' },
    { key: 'hair-mask', label: 'Hair Masks', icon: '💆' },
    { key: 'smoothie', label: 'Smoothies', icon: '🥤' },
    { key: 'detox-water', label: 'Detox Waters', icon: '💧' },
];
export function FilterPills({ filter, onFilter, counts }) {
    return (_jsx("div", { className: "filter-pills", children: PILLS.map(({ key, label, icon }) => (_jsxs("button", { className: `pill ${filter === key ? 'pill--active' : ''}`, onClick: () => onFilter(key), children: [_jsx("span", { children: icon }), _jsx("span", { children: label }), _jsx("span", { className: "pill-count", children: key === 'all' ? counts.all : counts[key] })] }, key))) }));
}
const benefitOptions = [
    { value: 'hair-growth', label: 'Hair Growth' },
    { value: 'moisturizing', label: 'Moisturizing' },
    { value: 'anti-frizz', label: 'Anti-Frizz' },
    { value: 'scalp-health', label: 'Scalp Health' },
    { value: 'shine', label: 'Shine' },
    { value: 'glowing-skin', label: 'Glowing Skin' },
    { value: 'anti-aging', label: 'Anti-Aging' },
    { value: 'hydration', label: 'Hydration' },
    { value: 'detox', label: 'Detox' },
    { value: 'energy', label: 'Energy' },
];
export function RecipeFilter({ filters, onFiltersChange }) {
    const handleCategoryChange = (category) => {
        onFiltersChange({ ...filters, category });
    };
    const handleBenefitToggle = (benefit) => {
        const newBenefits = filters.benefits.includes(benefit)
            ? filters.benefits.filter(b => b !== benefit)
            : [...filters.benefits, benefit];
        onFiltersChange({ ...filters, benefits: newBenefits });
    };
    const handleDifficultyChange = (difficulty) => {
        onFiltersChange({ ...filters, difficulty });
    };
    const handleSearchChange = (searchQuery) => {
        onFiltersChange({ ...filters, searchQuery });
    };
    const handleClearFilters = () => {
        onFiltersChange({
            category: 'all',
            benefits: [],
            difficulty: 'all',
            searchQuery: '',
        });
    };
    const hasActiveFilters = filters.category !== 'all' ||
        filters.benefits.length > 0 ||
        filters.difficulty !== 'all' ||
        filters.searchQuery !== '';
    return (_jsxs("div", { className: "bg-white rounded-xl border p-6 space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-semibold", children: "Filter Recipes" }), hasActiveFilters && (_jsxs(Button, { variant: "ghost", size: "sm", onClick: handleClearFilters, className: "text-emerald-600", children: [_jsx(X, { className: "size-4 mr-1" }), "Clear All"] }))] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "search", children: "Search" }), _jsxs("div", { className: "relative mt-2", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" }), _jsx(Input, { id: "search", type: "text", placeholder: "Search recipes...", value: filters.searchQuery, onChange: (e) => handleSearchChange(e.target.value), className: "pl-10" })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "Category" }), _jsxs("div", { className: "flex gap-2 mt-2 flex-wrap", children: [_jsx(Badge, { variant: filters.category === 'all' ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleCategoryChange('all'), children: "All" }), _jsx(Badge, { variant: filters.category === 'hair-mask' ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleCategoryChange('hair-mask'), children: "Hair Masks" }), _jsx(Badge, { variant: filters.category === 'smoothie' ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleCategoryChange('smoothie'), children: "Smoothies" }), _jsx(Badge, { variant: filters.category === 'detox-water' ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleCategoryChange('detox-water'), children: "Spa Waters" })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "Benefits" }), _jsx("div", { className: "flex gap-2 mt-2 flex-wrap", children: benefitOptions.map((option) => (_jsx(Badge, { variant: filters.benefits.includes(option.value) ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleBenefitToggle(option.value), children: option.label }, option.value))) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Difficulty" }), _jsxs("div", { className: "flex gap-2 mt-2 flex-wrap", children: [_jsx(Badge, { variant: filters.difficulty === 'all' ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleDifficultyChange('all'), children: "All" }), _jsx(Badge, { variant: filters.difficulty === 'easy' ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleDifficultyChange('easy'), children: "Easy" }), _jsx(Badge, { variant: filters.difficulty === 'medium' ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleDifficultyChange('medium'), children: "Medium" }), _jsx(Badge, { variant: filters.difficulty === 'advanced' ? 'default' : 'outline', className: "cursor-pointer hover:bg-emerald-100", onClick: () => handleDifficultyChange('advanced'), children: "Advanced" })] })] })] }));
}
