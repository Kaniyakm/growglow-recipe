import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Clock } from 'lucide-react';
import { Badge } from './ui/badge';
const CATEGORY_LABEL = {
    'hair-mask': 'Hair Mask',
    'smoothie': 'Smoothie',
    'detox-water': 'Detox Water',
};
const CATEGORY_COLOR = {
    'hair-mask': 'from-emerald-400 to-teal-500',
    'smoothie': 'from-violet-400 to-purple-500',
    'detox-water': 'from-cyan-400 to-blue-500',
};
export function RecipeCard({ recipe, index, onClick }) {
    const [flipped, setFlipped] = useState(false);
    return (_jsx("div", { style: { perspective: '1000px', height: '420px', animationDelay: `${index * 0.05}s` }, className: "w-full", children: _jsxs("div", { style: {
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                position: 'relative',
                width: '100%',
                height: '100%',
            }, children: [_jsxs("div", { style: { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }, className: "absolute inset-0 bg-white rounded-xl border border-gray-200\n                     overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-300\n                     transition-shadow duration-300 flex flex-col group", children: [_jsxs("div", { className: "relative overflow-hidden h-52 flex-shrink-0", children: [_jsx("img", { src: recipe.image, alt: recipe.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }), _jsx("button", { onClick: () => setFlipped(true), className: "absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm\n                         text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full\n                         shadow-md hover:bg-emerald-600 hover:text-white transition-all duration-200", children: "\uD83C\uDF3F Ingredients" }), _jsx("div", { className: "absolute top-3 left-3", children: _jsx(Badge, { variant: recipe.category === 'hair-mask' ? 'default' : 'secondary', children: CATEGORY_LABEL[recipe.category] }) })] }), _jsxs("div", { className: "p-5 flex flex-col flex-1", children: [_jsx("h3", { onClick: () => onClick(recipe), className: "font-semibold text-gray-900 mb-2 cursor-pointer\n                         hover:text-emerald-600 transition-colors line-clamp-2", children: recipe.title }), _jsx("p", { className: "text-sm text-gray-500 line-clamp-2 mb-3 flex-1", children: recipe.description }), _jsx("div", { className: "flex flex-wrap gap-1 mb-3", children: recipe.benefits.slice(0, 3).map(b => (_jsx(Badge, { variant: "outline", className: "text-xs", children: b.replace(/-/g, ' ') }, b))) }), _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500 border-t pt-3 mt-auto", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "size-4" }), _jsx("span", { children: recipe.time })] }), _jsx("span", { className: "capitalize bg-gray-100 px-2 py-0.5 rounded-full", children: recipe.difficulty })] })] })] }), _jsxs("div", { style: {
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }, className: "absolute inset-0 rounded-xl overflow-hidden shadow-md flex flex-col", children: [_jsx("div", { className: `bg-gradient-to-br ${CATEGORY_COLOR[recipe.category]} p-5 flex-shrink-0`, children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-white/80 text-xs font-medium uppercase tracking-widest mb-1", children: "Ingredients" }), _jsx("h3", { className: "text-white font-semibold text-base line-clamp-2", children: recipe.title })] }), _jsx("button", { onClick: () => setFlipped(false), className: "flex-shrink-0 ml-3 bg-white/20 hover:bg-white/40 text-white\n                           w-8 h-8 rounded-full flex items-center justify-center transition-colors", children: "\u2715" })] }) }), _jsx("div", { className: "bg-white flex-1 overflow-y-auto p-5 space-y-3", children: recipe.ingredients.map((ing) => (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx("span", { className: "text-2xl flex-shrink-0", children: ing.emoji }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-semibold text-gray-800", children: ing.name }), _jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: ing.benefit })] })] }, ing.name))) }), _jsx("div", { className: "bg-gray-50 border-t px-5 py-3 flex-shrink-0", children: _jsx("button", { onClick: () => onClick(recipe), className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white\n                         text-sm font-semibold py-2.5 rounded-lg transition-colors", children: "View Full Recipe \u2192" }) })] })] }) }));
}
