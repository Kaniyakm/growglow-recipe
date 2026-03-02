import { useParams, Link, Navigate } from 'react-router';
import { recipes }                   from '../data/recipes';
import { Recipe }                    from '../types/recipe';

const CATEGORY_LABEL: Record<string, string> = {
  'hair-mask':   'Hair Masks',
  'smoothie':    'Smoothies',
  'detox-water': 'Detox Waters',
};
  export function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/" replace />;

  const recipe: Recipe | undefined = recipes.find((r: Recipe) => r.id === Number(id));
  if (!recipe) return <Navigate to="/" replace />;

  const related: Recipe[] = recipes
    .filter((r: Recipe) => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Back */}
      <Link to="/" className="text-sm text-emerald-600 hover:underline mb-6 inline-block">
        ← Back to Recipes
      </Link>

      {/* Hero */}
      <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/7]">
        <img src={recipe.image} alt={recipe.title}         // ✅ YOUR field
             className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full">
          {CATEGORY_LABEL[recipe.category]}
        </span>
        <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full capitalize">
          {recipe.difficulty}
        </span>
        <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
          ⏱ {recipe.time}                                   {/* ✅ YOUR field */}
        </span>
      </div>

      <h1 className="text-4xl font-semibold mb-4">{recipe.title}</h1>
      <p className="text-gray-600 text-lg mb-8">{recipe.description}</p>

      {/* Benefits */}
      <div className="bg-emerald-50 rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-lg mb-3">Benefits</h2>
        <div className="flex flex-wrap gap-2">
          {recipe.benefits.map(b => (
            <span key={b} className="bg-white text-emerald-700 border border-emerald-200
                                     text-sm px-3 py-1 rounded-full capitalize">
              {b.replace(/-/g, ' ')}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">

        {/* Ingredients */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold text-lg mb-4">Ingredients</h2>
          <div className="space-y-3">
            {recipe.ingredients.map((ing) => (
              <div key={ing.name} className="flex gap-3">
                <span className="text-2xl">{ing.emoji}</span>
                <div>
                  <p className="font-medium text-sm">{ing.name}</p>
                  <p className="text-xs text-gray-500">{ing.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold text-lg mb-4">Instructions</h2>
          <ol className="space-y-3">
            {recipe.steps.map((step: string, i: number) => (  // ✅ YOUR field
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white
                                 rounded-full flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 mb-8">
        <p className="text-sm text-amber-800">
          💡 <strong>Pro Tip:</strong> Always patch test new ingredients before full application.
        </p>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div>
          <h2 className="font-semibold text-lg mb-4">More {CATEGORY_LABEL[recipe.category]}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r: Recipe) => (
              <Link key={r.id} to={`/recipes/${r.id}`}
                    className="bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
                <img src={r.image} alt={r.title}            // ✅ YOUR field
                     className="w-full h-32 object-cover" />
                <div className="p-3">
                  <p className="text-sm font-medium line-clamp-2">{r.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{r.time}</p>  {/* ✅ YOUR field */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
