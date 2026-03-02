import { useParams, Link, Navigate } from 'react-router-dom';
import { recipes }  from '../data/recipes';
import { Recipe, RecipeCategory }   from '../types/recipe';
import { Button }   from '../components/ui/button';
import { Badge }    from '../components/ui/badge';
import { ArrowLeft, Clock, ChefHat, Sparkles, Lightbulb, Leaf } from 'lucide-react';

const CATEGORY_LABEL: Record<RecipeCategory, string> = {
   'hair-mask':   'Hair Mask',
  'smoothie':    'Smoothie',
  'detox-water': 'Detox Water',
};

const CATEGORY_LABEL_PLURAL: Record<RecipeCategory, string> = {
  'hair-mask':  'Hair Masks',
  'smoothie':    'Smoothies',
  'detox-water': 'Detox Waters',
};

const CATEGORY_VARIANT: Record<RecipeCategory, 'default' | 'secondary'> = {
  'hair-mask':  'default',
  'smoothie':    'secondary',
  'detox-water': 'secondary',
};

export function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Navigate to="/recipes" replace />;

  const recipe: Recipe | undefined = recipes.find((r: Recipe) => r.id === Number(id));

  if (!recipe) return <Navigate to="/recipes" replace />;

  const relatedRecipes: Recipe[] = recipes
    .filter((r: Recipe) => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <div className="relative h-[400px] overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
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
              <Badge variant={CATEGORY_VARIANT[recipe.category]}>
                {CATEGORY_LABEL[recipe.category]}
              </Badge>
              {recipe.benefits.map((benefit: string) => (
                <Badge key={benefit} variant="outline" className="bg-white/20 text-white border-white/30">
                  {benefit}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl text-white mb-3">{recipe.title}</h1>
            <p className="text-white/90 text-lg max-w-3xl">{recipe.description}</p>
          </div>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-8">

          {/* ── Main ─────────────────────────────────────────────────── */}
          <div className="space-y-8">

            {/* Quick Info */}
            <div className="bg-emerald-50 rounded-xl p-6 grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="size-8 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-600">Prep Time</p>
                  <p className="font-semibold">{recipe.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ChefHat className="size-8 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-600">Difficulty</p>
                  <p className="font-semibold">{recipe.difficulty}</p>
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

            {/* Why Use This */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Sparkles className="size-6 text-emerald-600" />
                Why Use This Recipe
              </h2>
              <p className="text-gray-700 leading-relaxed">{recipe.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
                {recipe.benefits.map((b: string) => (
                  <div key={b} className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2">
                    <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-xs font-medium text-emerald-800">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Leaf className="size-6 text-emerald-600" />
                Ingredients
              </h2>
              <div className="divide-y divide-gray-100">
                {recipe.ingredients.map((ing) => (
                  <div key={ing.name} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                    <span className="text-xl shrink-0">{ing.emoji}</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{ing.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{ing.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-2xl mb-6">Step-by-Step Instructions</h2>
              <ol className="space-y-4">
                {recipe.steps.map((step: string, index: number) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="pt-1 flex-1 text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Pro Tip */}
            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="size-5 text-amber-600" />
                Pro Tip
              </h3>
              <p className="text-gray-700 text-sm">
                Always patch test new ingredients on a small area of skin or scalp before full
                application. Consult a dermatologist or trichologist for persistent concerns.
              </p>
            </div>
          </div>

          {/* ── Sidebar ──────────────────────────────────────────────── */}
          <aside className="space-y-6">
            <div className="bg-white rounded-xl border p-6 lg:sticky lg:top-24">
              <h3 className="font-semibold mb-4">
                More {CATEGORY_LABEL_PLURAL[recipe.category]}
              </h3>

              <div className="space-y-4">
                {relatedRecipes.length === 0
                  ? <p className="text-sm text-gray-500">No related recipes yet.</p>
                  : relatedRecipes.map((related: Recipe) => (
                    <Link key={related.id} to={`/recipes/${related.id}`} className="block group">
                      <div className="flex gap-3 items-start">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-20 h-20 object-cover rounded-lg shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium group-hover:text-emerald-600 transition-colors line-clamp-2 mb-1">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-500">{related.time}</p>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>

              <Link to="/recipes">
                <Button variant="outline" className="w-full mt-4">View All Recipes</Button>
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

