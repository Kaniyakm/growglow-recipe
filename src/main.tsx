import { StrictMode }        from 'react';
import { createRoot }        from 'react-dom/client';
import { createHashRouter, RouterProvider, Outlet } from 'react-router';
import App                   from './App';
import { HomePage }          from './Pages/HomePage';
import { RecipeDetail }  from './components/RecipeDetail';
import './styles/index.css';

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 to-white">

      <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/#/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-2 rounded-lg">
              <span className="text-white text-lg">✨</span>
            </div>
            <div>
              <h1 className="font-semibold text-xl tracking-tight">GroGlow</h1>
              <p className="text-xs text-gray-500">Wellness Recipes</p>
            </div>
          </a>

          <nav className="flex items-center gap-6">
            <a href="/#/"
               className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium">
              Home
            </a>
            <a href="/#/recipes"
               className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm
                          font-medium px-4 py-2 rounded-lg transition-colors">
              All Recipes
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t mt-16 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>GroGlow © 2026 — Natural wellness recipes for hair growth and glowing skin</p>
          <p className="text-xs mt-1 text-gray-400">
            Always patch test new ingredients. Consult professionals for medical concerns.
          </p>
          <p className="mt-3 text-xs text-emerald-600 font-medium">
      Designed &amp; Built by Kaniya Martin
         </p>
        </div>
      </footer>
    </div>
  );
}

const router = createHashRouter([
  {
    path:     '/',
    element:  <RootLayout />,
    children: [
      { index: true,          element: <HomePage /> },
      { path: 'recipes',      element: <App /> },
      { path: 'recipes/:id',  element: <RecipeDetail /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
