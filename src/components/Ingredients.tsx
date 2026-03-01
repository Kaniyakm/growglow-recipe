import { useState } from 'react';
import { Leaf } from 'lucide-react';

interface IngredientData {
  name: string;
  hairBenefits: string;
  skinBenefits: string;
  keyNutrients: string;
}

const ingredientsData: IngredientData[] = [
  {
    name: 'Avocado',
    hairBenefits: 'Hydrates scalp, strengthens, adds shine',
    skinBenefits: 'Deeply moisturizes, protects from UV damage',
    keyNutrients: 'Vitamin E, Omega-3s, Potassium'
  },
  {
    name: 'Citrus (Orange/Lemon)',
    hairBenefits: 'Reduces scalp inflammation, aids growth',
    skinBenefits: 'Boosts collagen, brightens skin',
    keyNutrients: 'Vitamin C, Flavonoids'
  },
  {
    name: 'Berries (Blueberry/Strawberry)',
    hairBenefits: 'Antioxidants fight scalp damage',
    skinBenefits: 'Fights free radicals, prevents aging',
    keyNutrients: 'Vitamin C, Antioxidants'
  },
  {
    name: 'Papaya',
    hairBenefits: 'Conditions hair, strengthens, aids sebum',
    skinBenefits: 'Exfoliates, rejuvenates skin',
    keyNutrients: 'Vitamin A, Papain Enzyme'
  },
  {
    name: 'Banana',
    hairBenefits: 'Prevents breakage, improves elasticity',
    skinBenefits: 'Hydrates, reduces wrinkles',
    keyNutrients: 'Potassium, Vitamin B6'
  },
  {
    name: 'Coconut',
    hairBenefits: 'Deep conditioning, reduces protein loss',
    skinBenefits: 'Moisturizes, antibacterial properties',
    keyNutrients: 'Lauric Acid, MCT Oils'
  },
  {
    name: 'Aloe Vera',
    hairBenefits: 'Repairs scalp, reduces dandruff',
    skinBenefits: 'Soothes inflammation, hydrates deeply',
    keyNutrients: 'Vitamins A, C, E, Enzymes'
  },
  {
    name: 'Rosemary',
    hairBenefits: 'Stimulates growth, improves circulation',
    skinBenefits: 'Anti-aging, tightens skin',
    keyNutrients: 'Carnosic Acid, Iron'
  },
  {
    name: 'Peppermint',
    hairBenefits: 'Increases follicle depth, promotes growth',
    skinBenefits: 'Cools, reduces inflammation',
    keyNutrients: 'Menthol, Vitamin A'
  },
  {
    name: 'Tea Tree',
    hairBenefits: 'Fights dandruff, unclogs follicles',
    skinBenefits: 'Antibacterial, clears acne',
    keyNutrients: 'Terpinen-4-ol'
  },
  {
    name: 'Lavender',
    hairBenefits: 'Promotes growth, reduces stress',
    skinBenefits: 'Calms irritation, heals wounds',
    keyNutrients: 'Linalool, Camphor'
  },
  {
    name: 'Ginger',
    hairBenefits: 'Improves circulation, strengthens',
    skinBenefits: 'Brightens, evens skin tone',
    keyNutrients: 'Gingerol, Magnesium'
  },
  {
    name: 'Turmeric',
    hairBenefits: 'Reduces scalp inflammation',
    skinBenefits: 'Brightens, reduces hyperpigmentation',
    keyNutrients: 'Curcumin, Iron'
  },
  {
    name: 'Spinach',
    hairBenefits: 'Prevents hair loss, provides iron',
    skinBenefits: 'Boosts collagen, protects cells',
    keyNutrients: 'Iron, Vitamins A & C'
  },
  {
    name: 'Matcha',
    hairBenefits: 'Protects follicles, promotes growth',
    skinBenefits: 'Fights aging, protects from UV',
    keyNutrients: 'EGCG, L-Theanine'
  },
  {
    name: 'Chia Seeds',
    hairBenefits: 'Strengthens, adds shine',
    skinBenefits: 'Reduces inflammation, hydrates',
    keyNutrients: 'Omega-3s, Zinc'
  },
  {
    name: 'Hemp Seeds',
    hairBenefits: 'Strengthens structure, promotes growth',
    skinBenefits: 'Balances oil, reduces inflammation',
    keyNutrients: 'Omega-3 & 6, Protein'
  },
  {
    name: 'Spirulina',
    hairBenefits: 'Prevents hair loss, adds volume',
    skinBenefits: 'Renews cells, detoxifies',
    keyNutrients: 'Complete Protein, B Vitamins'
  },
  {
    name: 'Pineapple',
    hairBenefits: 'Thickens hair, reduces breakage',
    skinBenefits: 'Reduces inflammation, clears acne',
    keyNutrients: 'Bromelain, Vitamin C'
  },
  {
    name: 'Mango',
    hairBenefits: 'Conditions, promotes growth',
    skinBenefits: 'Renews cells, evens tone',
    keyNutrients: 'Beta-Carotene, Vitamin A'
  },
  {
    name: 'Cucumber',
    hairBenefits: 'Hydrates scalp, adds shine',
    skinBenefits: 'Hydrates deeply, reduces puffiness',
    keyNutrients: 'Silica, Vitamin K'
  },
  {
    name: 'Olive Oil',
    hairBenefits: 'Seals cuticle, adds shine',
    skinBenefits: 'Moisturizes, protects barrier',
    keyNutrients: 'Vitamin E, Squalene'
  },
  {
    name: 'Argan Oil',
    hairBenefits: 'Tames frizz, adds shine',
    skinBenefits: 'Moisturizes, absorbs quickly',
    keyNutrients: 'Vitamin E, Fatty Acids'
  },
  {
    name: 'Castor Oil',
    hairBenefits: 'Strengthens roots, thickens hair',
    skinBenefits: 'Deeply moisturizes, reduces scars',
    keyNutrients: 'Ricinoleic Acid, Omega-6'
  },
  {
    name: 'Jojoba Oil',
    hairBenefits: 'Balances oil, moisturizes',
    skinBenefits: 'Mimics sebum, non-comedogenic',
    keyNutrients: 'Vitamin E, B-Complex'
  },
  {
    name: 'Sweet Almond Oil',
    hairBenefits: 'Reduces hair fall, promotes growth',
    skinBenefits: 'Softens, evens skin tone',
    keyNutrients: 'Magnesium, Biotin'
  },
  {
    name: 'Honey',
    hairBenefits: 'Locks moisture, promotes scalp health',
    skinBenefits: 'Antibacterial, retains moisture',
    keyNutrients: 'Antioxidants, Enzymes'
  },
  {
    name: 'Dates',
    hairBenefits: 'Strengthens, prevents breakage',
    skinBenefits: 'Hydrates cells, provides minerals',
    keyNutrients: 'Copper, Selenium, B5'
  },
  {
    name: 'Cinnamon',
    hairBenefits: 'Stimulates circulation, promotes growth',
    skinBenefits: 'Regulates blood sugar, reduces inflammation',
    keyNutrients: 'Cinnamaldehyde, Manganese'
  },
  {
    name: 'Cardamom',
    hairBenefits: 'Strengthens follicles',
    skinBenefits: 'Detoxifies, improves circulation',
    keyNutrients: 'Cineole, Manganese'
  }
];

export function IngredientsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIngredients = ingredientsData.filter(ingredient =>
    ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Leaf className="size-10 text-emerald-600" />
          <h1 className="text-4xl">SuperFoods List: Fruits & Herbs for Skin and Hair Health</h1>
        </div>
        <p className="text-gray-600">
          Discover the natural superfoods that power our wellness recipes and their benefits for your hair and skin
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search ingredients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {/* Ingredients Table */}
      <div className="bg-white rounded-xl border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-emerald-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 border-r">
                  Fruit/Herb/Nut
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 border-r min-w-[250px]">
                  Primary Hair Benefits
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 border-r min-w-[250px]">
                  Primary Skin Benefits
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 min-w-[200px]">
                  Key Nutrients
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredIngredients.map((ingredient, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    {ingredient.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-r">
                    {ingredient.hairBenefits}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-r">
                    {ingredient.skinBenefits}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {ingredient.keyNutrients}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>Showing {filteredIngredients.length} of {ingredientsData.length} natural ingredients</p>
      </div>
    </div>
  );
}