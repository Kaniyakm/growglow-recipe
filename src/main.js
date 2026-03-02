import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider, Outlet } from 'react-router';
import App from './App';
import { HomePage } from './Pages/HomePage';
import { RecipeDetail } from './components/RecipeDetail';
import './styles/index.css';
function RootLayout() {
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-emerald-50/50 to-white", children: [_jsx("header", { className: "border-b bg-white/95 backdrop-blur sticky top-0 z-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between", children: [_jsxs("a", { href: "/#/", className: "flex items-center gap-2", children: [_jsx("div", { className: "bg-gradient-to-br from-emerald-400 to-teal-600 p-2 rounded-lg", children: _jsx("span", { className: "text-white text-lg", children: "\u2728" }) }), _jsxs("div", { children: [_jsx("h1", { className: "font-semibold text-xl tracking-tight", children: "GroGlow" }), _jsx("p", { className: "text-xs text-gray-500", children: "Wellness Recipes" })] })] }), _jsxs("nav", { className: "flex items-center gap-6", children: [_jsx("a", { href: "/#/", className: "text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium", children: "Home" }), _jsx("a", { href: "/#/recipes", className: "bg-emerald-600 hover:bg-emerald-700 text-white text-sm\n                          font-medium px-4 py-2 rounded-lg transition-colors", children: "All Recipes" })] })] }) }), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx("footer", { className: "border-t mt-16 py-8 bg-gray-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 text-center text-sm text-gray-500", children: [_jsx("p", { children: "GroGlow \u00A9 2026 \u2014 Natural wellness recipes for hair growth and glowing skin" }), _jsx("p", { className: "text-xs mt-1 text-gray-400", children: "Always patch test new ingredients. Consult professionals for medical concerns." }), _jsx("p", { className: "mt-3 text-xs text-emerald-600 font-medium", children: "Designed & Built by Kaniya Martin" })] }) })] }));
}
const router = createHashRouter([
    {
        path: '/',
        element: _jsx(RootLayout, {}),
        children: [
            { index: true, element: _jsx(HomePage, {}) },
            { path: 'recipes', element: _jsx(App, {}) },
            { path: 'recipes/:id', element: _jsx(RecipeDetail, {}) },
        ],
    },
]);
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
