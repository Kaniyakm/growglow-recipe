import { Link } from 'react-router';
import { ArrowRight, Leaf, Sparkles, Clock, Filter } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 to-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700
                          px-4 py-2 rounded-full mb-6">
            <Leaf className="size-4" />
            <span className="text-sm font-medium">100% Natural Wellness Recipes</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-emerald-600
                         to-teal-600 bg-clip-text text-transparent leading-tight">
            Grow Stronger Hair,
            <br />
            Glow from Within
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Natural wellness recipes featuring hair growth masks, skin-glowing smoothies,
            and hydrating detox waters — with detailed ingredient benefits.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/recipes">
              <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700
                                 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Explore All Recipes
                <ArrowRight className="size-5" />
              </button>
            </Link>
            <Link to="/recipes?category=hair-mask">
              <button className="inline-flex items-center gap-2 border border-gray-300
                                 hover:border-emerald-400 text-gray-700 font-semibold
                                 px-6 py-3 rounded-lg transition-colors hover:text-emerald-600">
                💆 Hair Masks
              </button>
            </Link>
            <Link to="/recipes?category=smoothie">
              <button className="inline-flex items-center gap-2 border border-gray-300
                                 hover:border-emerald-400 text-gray-700 font-semibold
                                 px-6 py-3 rounded-lg transition-colors hover:text-emerald-600">
                🥤 Smoothies
              </button>
            </Link>
            <Link to="/recipes?category=detox-water">
              <button className="inline-flex items-center gap-2 border border-gray-300
                                 hover:border-emerald-400 text-gray-700 font-semibold
                                 px-6 py-3 rounded-lg transition-colors hover:text-emerald-600">
                💧 Detox Waters
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <section className="border-y bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
            <div>
              <p className="text-3xl font-semibold text-emerald-600">6</p>
              <p className="text-sm text-gray-500">Hair Masks</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-violet-600">5</p>
              <p className="text-sm text-gray-500">Smoothies</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-cyan-600">8</p>
              <p className="text-sm text-gray-500">Detox Waters</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why GroGlow ──────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl mb-12">Why GroGlow?</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center
                              justify-center mx-auto mb-4">
                <Leaf className="size-8 text-emerald-600" />
              </div>
              <h3 className="mb-3">Natural Ingredients</h3>
              <p className="text-gray-600 text-sm">
                Every recipe uses simple, natural ingredients you can find at home
                or your local store.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center
                              justify-center mx-auto mb-4">
                <Sparkles className="size-8 text-teal-600" />
              </div>
              <h3 className="mb-3">Science-Backed Benefits</h3>
              <p className="text-gray-600 text-sm">
                Each ingredient includes detailed benefits explaining exactly how
                it works for your wellness.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center
                              justify-center mx-auto mb-4">
                <Filter className="size-8 text-cyan-600" />
              </div>
              <h3 className="mb-3">Smart Filtering</h3>
              <p className="text-gray-600 text-sm">
                Filter by category, benefits, and difficulty to find the perfect
                recipe for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recipe category previews ─────────────────────────────── */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl mb-8 text-center">Browse by Category</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link to="/recipes?category=hair-mask" className="group">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl
                            p-8 text-white hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">💆</div>
              <h3 className="text-xl font-semibold mb-2">Hair Masks</h3>
              <p className="text-white/80 text-sm mb-4">
                Deep conditioning treatments for growth, shine and frizz control.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium
                               group-hover:gap-2 transition-all">
                Explore <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>

          <Link to="/recipes?category=smoothie" className="group">
            <div className="bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl
                            p-8 text-white hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🥤</div>
              <h3 className="text-xl font-semibold mb-2">Glow Smoothies</h3>
              <p className="text-white/80 text-sm mb-4">
                Nutrient-packed blends for glowing skin, energy and anti-ageing.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium
                               group-hover:gap-2 transition-all">
                Explore <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>

          <Link to="/recipes?category=detox-water" className="group">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl
                            p-8 text-white hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-2">Detox Waters</h3>
              <p className="text-white/80 text-sm mb-4">
                Refreshing infusions to hydrate, cleanse and brighten your skin.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium
                               group-hover:gap-2 transition-all">
                Explore <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50
                        rounded-2xl p-12 border border-emerald-100">
          <h2 className="text-3xl mb-4">Ready to Transform Your Wellness?</h2>
          <p className="text-gray-600 mb-6">
            Browse 19 natural recipes with detailed ingredient benefits
            and easy step-by-step instructions.
          </p>
          <Link to="/recipes">
            <button className="inline-flex items-center gap-2 bg-emerald-600
                               hover:bg-emerald-700 text-white font-semibold
                               px-8 py-4 rounded-lg transition-colors text-lg">
              Start Your Journey
              <ArrowRight className="size-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
