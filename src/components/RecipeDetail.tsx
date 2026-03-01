import { useParams, Link, Navigate } from 'react-router';
import { recipes } from '../data/recipes';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Clock, ChefHat, Sparkles, Lightbulb } from 'lucide-react';

export function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link to="/recipes">
              <Button variant="secondary" size="sm" className="mb-4">
                <ArrowLeft className="size-4 mr-2" />
                Back to Recipes
              </Button>
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant={recipe.category === 'hair-mask' ? 'default' : 'secondary'}>
                {recipe.category === 'hair-mask' ? 'Hair Mask' : recipe.category === 'smoothie' ? 'Smoothie' : 'Spa Water'}
              </Badge>
              {recipe.benefits.map(benefit => (
                <Badge key={benefit} variant="outline" className="bg-white/20 text-white border-white/30">
                  {benefit.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl text-white mb-3">{recipe.title}</h1>
            <p className="text-white/90 text-lg max-w-3xl">{recipe.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-emerald-50 rounded-xl p-6 grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="size-8 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-600">Prep Time</p>
                  <p className="font-semibold">{recipe.prepTime} minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ChefHat className="size-8 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-600">Difficulty</p>
                  <p className="font-semibold capitalize">{recipe.difficulty}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="size-8 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-600">Benefits</p>
                  <p className="font-semibold">{recipe.benefits.length} key benefits</p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Sparkles className="size-6 text-emerald-600" />
                Why Use This Recipe
              </h2>
              <p className="text-gray-700 leading-relaxed">{recipe.summary}</p>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-2xl mb-6">Step-by-Step Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="pt-1 flex-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tips */}
            {recipe.tips && (
              <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="size-5 text-amber-600" />
                  Pro Tips
                </h3>
                <p className="text-gray-700">{recipe.tips}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Recipes */}
            <div className="bg-white rounded-xl border p-6 lg:sticky lg:top-24">
              <h3 className="font-semibold mb-4">
                More {recipe.category === 'hair-mask' ? 'Hair Masks' : recipe.category === 'smoothie' ? 'Smoothies' : 'Spa Waters'}
              </h3>
              <div className="space-y-4">
                {recipes
                  .filter(r => r.category === recipe.category && r.id !== recipe.id)
                  .slice(0, 3)
                  .map(related => (
                    <Link 
                      key={related.id} 
                      to={`/recipes/${related.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3 items-start">
                        <img 
                          src={related.imageUrl} 
                          alt={related.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium group-hover:text-emerald-600 transition-colors line-clamp-2 mb-1">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-500">{related.prepTime} min</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link to="/recipes">
                <Button variant="outline" className="w-full mt-4">
                  View All Recipes
                </Button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}