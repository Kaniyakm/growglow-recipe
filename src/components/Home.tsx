import { Link } from 'react-router';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
            <Leaf className="size-4" />
            <span className="text-sm font-medium">100% Natural Wellness Recipes</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Grow Stronger Hair,
            <br />
            Glow from Within
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover TypeScript-powered wellness recipes featuring natural hair growth masks, 
            skin-glowing smoothies, and hydrating detox waters with detailed ingredient benefits.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/recipes">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Explore Grow & Glow Recipes
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
            <Link to="/recipes?category=hair-mask">
              <Button size="lg" variant="outline">
                Hair Grow Masks
              </Button>
            </Link>
            <Link to="/recipes?category=smoothie">
              <Button size="lg" variant="outline">
                Skin Glow Smoothies
              </Button>
            </Link>
            <Link to="/recipes?category=detox-water">
              <Button size="lg" variant="outline">
                Detox Waters
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl mb-12">Why GroGlow?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="size-8 text-emerald-600" />
              </div>
              <h3 className="mb-3">Natural Ingredients</h3>
              <p className="text-gray-600">
                Every recipe uses simple, natural ingredients you can find at home or your local store.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="size-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3">Science-Backed Benefits</h3>
              <p className="text-gray-600">
                Each ingredient includes detailed benefits explaining how it works for your wellness.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="size-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="mb-3">Smart Filtering</h3>
              <p className="text-gray-600">
                Filter by category, benefits, difficulty, and search to find the perfect recipe for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-12 border border-emerald-100">
          <h2 className="text-3xl mb-4">Ready to Transform Your Wellness?</h2>
          <p className="text-gray-600 mb-6">
            Browse our collection of TypeScript-typed recipes with detailed ingredient benefits and easy-to-follow instructions.
          </p>
          <Link to="/recipes">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Your Journey
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}