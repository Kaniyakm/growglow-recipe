import { Link, useLocation } from 'react-router';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const location = useLocation();
  
  return (
    <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-2 rounded-lg">
              <Sparkles className="size-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-xl tracking-tight">GroGlow</h1>
              <p className="text-xs text-gray-600">Wellness Recipes</p>
            </div>
          </Link>
          
          <div className="flex gap-6 items-center">
            <Link 
              to="/" 
              className={`transition-colors ${ 
                location.pathname === '/' 
                  ? 'text-emerald-600 font-medium' 
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>
            <Link to="/ingredients">
              <Button 
                variant={location.pathname === '/ingredients' ? 'default' : 'outline'}
                size="sm"
              >
                SuperFoods List
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}