import { FilterState,FilterKey, DifficultyLevel,BenefitTag, RecipeCategory } from '../types/recipe';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Search, X } from 'lucide-react';
import { Button } from './ui/button';

type CountMap = {
  all:           number;
  'hair-mask':   number;
  'smoothie':    number;
  'detox-water': number;
};

interface FilterPillsProps {
  filter:   FilterKey;
  onFilter: (f: FilterKey) => void;
  counts:   CountMap;
}

const PILLS: { key: FilterKey; label: string; icon: string }[] = [
  { key: 'all',          label: 'All Recipes', icon: '✨' },
  { key: 'hair-mask',    label: 'Hair Masks',  icon: '💆' },
  { key: 'smoothie',     label: 'Smoothies',   icon: '🥤' },
  { key: 'detox-water',  label: 'Detox Waters', icon: '💧' },
];

export function FilterPills({ filter, onFilter, counts }: FilterPillsProps) {  // ✅ named export
  return (
    <div className="filter-pills">
      {PILLS.map(({ key, label, icon }) => (
        <button
          key={key}
          className={`pill ${filter === key ? 'pill--active' : ''}`}
          onClick={() => onFilter(key)}
        >
          <span>{icon}</span>
          <span>{label}</span>
          <span className="pill-count">
            {key === 'all' ? counts.all : counts[key as RecipeCategory]}
          </span>
        </button>
      ))}
    </div>
  );
}




interface RecipeFilterProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const benefitOptions: { value: BenefitTag; label: string }[] = [
  { value: 'hair-growth', label: 'Hair Growth' },
  { value: 'moisturizing', label: 'Moisturizing' },
  { value: 'anti-frizz', label: 'Anti-Frizz' },
  { value: 'scalp-health', label: 'Scalp Health' },
  { value: 'shine', label: 'Shine' },
  { value: 'glowing-skin', label: 'Glowing Skin' },
  { value: 'anti-aging', label: 'Anti-Aging' },
  { value: 'hydration', label: 'Hydration' },
  { value: 'detox', label: 'Detox' },
  { value: 'energy', label: 'Energy' },
];

export function RecipeFilter({ filters, onFiltersChange }: RecipeFilterProps) {
  const handleCategoryChange = (category: RecipeCategory | 'all') => {
    onFiltersChange({ ...filters, category });
  };

  const handleBenefitToggle = (benefit: BenefitTag) => {
    const newBenefits = filters.benefits.includes(benefit)
      ? filters.benefits.filter(b => b !== benefit)
      : [...filters.benefits, benefit];
    onFiltersChange({ ...filters, benefits: newBenefits });
  };

  const handleDifficultyChange = (difficulty: DifficultyLevel | 'all') => {
    onFiltersChange({ ...filters, difficulty });
  };

  const handleSearchChange = (searchQuery: string) => {
    onFiltersChange({ ...filters, searchQuery });
  };

  const handleClearFilters = () => {
    onFiltersChange({
      category: 'all',
      benefits: [],
      difficulty: 'all',
      searchQuery: '',
    });
  };

  const hasActiveFilters = 
    filters.category !== 'all' || 
    filters.benefits.length > 0 || 
    filters.difficulty !== 'all' || 
    filters.searchQuery !== '';

  return (
    <div className="bg-white rounded-xl border p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filter Recipes</h3>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleClearFilters}
            className="text-emerald-600"
          >
            <X className="size-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Search */}
      <div>
        <Label htmlFor="search">Search</Label>
        <div className="relative mt-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input
            id="search"
            type="text"
            placeholder="Search recipes..."
            value={filters.searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <Label>Category</Label>
        <div className="flex gap-2 mt-2 flex-wrap">
          <Badge
            variant={filters.category === 'all' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-emerald-100"
            onClick={() => handleCategoryChange('all')}
          >
            All
          </Badge>
          <Badge
            variant={filters.category === 'hair-mask' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-emerald-100"
            onClick={() => handleCategoryChange('hair-mask')}
          >
            Hair Masks
          </Badge>
          <Badge
            variant={filters.category === 'smoothie' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-emerald-100"
            onClick={() => handleCategoryChange('smoothie')}
          >
            Smoothies
          </Badge>
          <Badge
            variant={filters.category === 'detox-water' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-emerald-100"
            onClick={() => handleCategoryChange('detox-water')}
          >
            Spa Waters
          </Badge>
        </div>
      </div>

      {/* Benefits */}
      <div>
        <Label>Benefits</Label>
        <div className="flex gap-2 mt-2 flex-wrap">
          {benefitOptions.map((option) => (
            <Badge
              key={option.value}
              variant={filters.benefits.includes(option.value) ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-emerald-100"
              onClick={() => handleBenefitToggle(option.value)}
            >
              {option.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <Label>Difficulty</Label>
        <div className="flex gap-2 mt-2 flex-wrap">
          <Badge
            variant={filters.difficulty === 'all' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-emerald-100"
            onClick={() => handleDifficultyChange('all')}
          >
            All
          </Badge>
          <Badge
            variant={filters.difficulty === 'easy' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-emerald-100"
            onClick={() => handleDifficultyChange('easy')}
          >
            Easy
          </Badge>
          <Badge
            variant={filters.difficulty === 'medium' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-emerald-100"
            onClick={() => handleDifficultyChange('medium')}
          >
            Medium
          </Badge>
          <Badge
            variant={filters.difficulty === 'advanced' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-emerald-100"
            onClick={() => handleDifficultyChange('advanced')}
          >
            Advanced
          </Badge>
        </div>
      </div>
    </div>
  );
}

