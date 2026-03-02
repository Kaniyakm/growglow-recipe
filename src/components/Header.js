import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
export function Header() {
    const location = useLocation();
    return (_jsx("header", { className: "border-b bg-white/95 backdrop-blur sticky top-0 z-50", children: _jsx("div", { className: "container mx-auto px-4 py-4", children: _jsxs("nav", { className: "flex items-center justify-between", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [_jsx("div", { className: "bg-gradient-to-br from-emerald-400 to-teal-600 p-2 rounded-lg", children: _jsx(Sparkles, { className: "size-6 text-white" }) }), _jsxs("div", { children: [_jsx("h1", { className: "font-semibold text-xl tracking-tight", children: "GroGlow" }), _jsx("p", { className: "text-xs text-gray-600", children: "Wellness Recipes" })] })] }), _jsxs("div", { className: "flex gap-6 items-center", children: [_jsx(Link, { to: "/", className: `transition-colors ${location.pathname === '/'
                                    ? 'text-emerald-600 font-medium'
                                    : 'text-gray-600 hover:text-emerald-600'}`, children: "Home" }), _jsx(Link, { to: "/ingredients", children: _jsx(Button, { variant: location.pathname === '/ingredients' ? 'default' : 'outline', size: "sm", children: "SuperFoods List" }) })] })] }) }) }));
}
