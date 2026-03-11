import { useState }       from 'react';
import { useNavigate }    from 'react-router';
import { Clock }          from 'lucide-react';
import { Recipe }         from '../types/recipe';
import { Badge }          from './ui/badge';

const CATEGORY_LABEL: Record<string, string> = {
  'hair-mask':   'Hair Mask',
  'smoothie':    'Smoothie',
  'detox-water': 'Detox Water',
};

const CATEGORY_COLOR: Record<string, string> = {
  'hair-mask':   'from-emerald-400 to-teal-500',
  'smoothie':    'from-violet-400 to-purple-500',
  'detox-water': 'from-cyan-400 to-blue-500',
};

interface Props {
  recipe:  Recipe;
  index:   number;
  onClick: (recipe: Recipe) => void;
}

export function RecipeCard({ recipe, index, onClick }: Props) {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{ perspective: '1000px', height: '420px', animationDelay: `${index * 0.05}s` }}
      className="w-full"
    >
      <div style={{
        transformStyle: 'preserve-3d',
        transition:     'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
        transform:      flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        position:       'relative',
        width:          '100%',
        height:         '100%',
      }}>

        {/* ── FRONT ── */}
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 bg-white rounded-xl border border-gray-200
                     overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-300
                     transition-shadow duration-300 flex flex-col group"
        >
          <div className="relative overflow-hidden h-52 flex-shrink-0">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={() => setFlipped(true)}
              className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm
                         text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full
                         shadow-md hover:bg-emerald-600 hover:text-white transition-all duration-200"
            >
              🌿 Ingredients
            </button>
            <div className="absolute top-3 left-3">
              <Badge variant={recipe.category === 'hair-mask' ? 'default' : 'secondary'}>
                {CATEGORY_LABEL[recipe.category]}
              </Badge>
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3
              onClick={() => onClick(recipe)}
              className="font-semibold text-gray-900 mb-2 cursor-pointer
                         hover:text-emerald-600 transition-colors line-clamp-2"
            >
              {recipe.title}
            </h3>

            <p className="text-sm text-gray-500 line-clamp-2 mb-3 flex-1">
              {recipe.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-3">
              {recipe.benefits.slice(0, 3).map(b => (
                <Badge key={b} variant="outline" className="text-xs">
                  {b.replace(/-/g, ' ')}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3 mt-auto">
              <div className="flex items-center gap-1">
                <Clock className="size-4" />
                <span>{recipe.time}</span>
              </div>
              <span className="capitalize bg-gray-100 px-2 py-0.5 rounded-full">
                {recipe.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            backfaceVisibility:       'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform:                'rotateY(180deg)',
          }}
          className="absolute inset-0 rounded-xl overflow-hidden shadow-md flex flex-col"
        >
          <div className={`bg-gradient-to-br ${CATEGORY_COLOR[recipe.category]} p-5 flex-shrink-0`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 text-xs font-medium uppercase tracking-widest mb-1">
                  Ingredients
                </p>
                <h3 className="text-white font-semibold text-base line-clamp-2">
                  {recipe.title}
                </h3>
              </div>
              <button
                onClick={() => setFlipped(false)}
                className="flex-shrink-0 ml-3 bg-white/20 hover:bg-white/40 text-white
                           w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="bg-white flex-1 overflow-y-auto p-5 space-y-3">
            {recipe.ingredients.map((ing) => (
              <div key={ing.name} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{ing.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{ing.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{ing.benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border-t px-5 py-3 flex-shrink-0">
            {/* ✅ FIXED: navigates to the full recipe page instead of opening modal */}
            <button
              onClick={() => navigate(`/recipes/${recipe.id}`)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white
                         text-sm font-semibold py-2.5 rounded-lg transition-colors"
            >
              View Full Recipe →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
