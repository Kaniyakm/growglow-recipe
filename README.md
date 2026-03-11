# 🌿 GroGlow — Wellness Recipe App

> Natural wellness recipes for hair growth and glowing skin  
> Built with TypeScript + React + Tailwind CSS

**Designed & Built by Kaniya Martin**

---

## 🔗 Live Demo

[View Live on GitHub Pages](https://YOUR_USERNAME.github.io/recipe-growglow/)

---

## 📖 About

GroGlow is a wellness recipe application featuring 19 natural recipes across three categories. Each recipe includes detailed ingredient benefits, step-by-step instructions, and difficulty ratings to help users find the perfect wellness routine for their hair and skin.

---

## ✨ Features

- **19 Natural Recipes** across Hair Masks, Glow Smoothies and Detox Waters
- **Flip Card Interaction** — click any card to reveal ingredients with a 3D flip animation
- **Smart Filtering** — filter by category, benefits, difficulty and search
- **Recipe Detail Pages** — full ingredient lists, step-by-step instructions and related recipes
- **Responsive Design** — works on mobile, tablet and desktop
- **Base64 Images** — all images embedded for fast offline loading
- **TypeScript** — fully typed data models and components

---

## 🗂️ Recipe Categories

| Category | Count | Description |
|---|---|---|
| 💆 Hair Masks | 6 | Deep conditioning treatments for growth, shine and frizz control |
| 🥤 Glow Smoothies | 5 | Nutrient-packed blends for glowing skin and anti-ageing |
| 💧 Detox Waters | 8 | Refreshing infusions to hydrate, cleanse and brighten skin |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Vite | Build tool |
| React Router | Client-side routing |
| Lucide React | Icons |
| shadcn/ui | UI components (Badge, Button, Input) |

---

## 📁 Project Structure

```
src/
  components/
    ui/               # shadcn/ui components (Badge, Button, Input etc.)
    RecipeCard.tsx    # Flip card with 3D animation
    RecipeDetail.tsx  # Full recipe detail page
    RecipeModal.tsx   # Recipe modal overlay
    RecipeSection.tsx # Category section with card grid
    FilterPills.tsx   # Category filter buttons
    SearchBar.tsx     # Search input
  data/
    recipes.ts        # All 19 recipes with typed data
    images/
      images.ts       # Base64 encoded recipe images
  hooks/
    useRecipes.ts     # Filter and search logic
  Pages/
    HomePage.tsx      # Landing page with hero and category previews
  styles/
    index.css         # Entry point
    tailwind.css      # Tailwind v4 config
    theme.css         # CSS variables and design tokens
    fonts.css         # Font imports
  types/
    recipe.ts         # TypeScript interfaces and types
  App.tsx             # Recipes grid page
  main.tsx            # Entry point + routing
```

---




Open [groglow.netlify.app]
(http:/https://groglow.netlify.app/) in your browser.






## 🎨 Design

- **Figma Design File:** [Wellness Recipe App](https://www.figma.com/design/eEd8vZAr2opoOnkhFvrYWu/Wellness-Recipe-App)
- Color palette centered on emerald greens, with violet accents for smoothies and cyan for detox waters
- Card flip animation built with pure CSS `rotateY` and `backface-visibility`

---

## 📝 TypeScript Types

```typescript
type RecipeCategory  = 'hair-mask' | 'smoothie' | 'detox-water';
type DifficultyLevel = 'easy' | 'medium' | 'advanced';
type BenefitTag      = 'hair-growth' | 'moisturizing' | 'anti-frizz' | 'scalp-health'
                     | 'shine' | 'glowing-skin' | 'anti-aging' | 'hydration'
                     | 'detox' | 'volume' | 'energy';
```

---

## 🌱 Future Improvements

- [ ] Add favourites / save recipe functionality
- [ ] Ingredient shopping list export
- [ ] User ratings and reviews
- [ ] Dark mode toggle
- [ ] Print-friendly recipe view

---

## 👩🏾‍💻 Author

**Kaniya Martin**  
Per Scholas — Full Stack Development  
© 2026

---

## 📄 License

This project was built for educational purposes as part of the Per Scholas Full Stack Development program.
