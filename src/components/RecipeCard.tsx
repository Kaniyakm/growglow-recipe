import React from 'react';
import { Recipe, RecipeCategory } from '../types/recipe';
import { CATEGORY_LABEL }         from '../data/filters';
import { BENEFIT_ICON, BENEFIT_LABEL, BenefitTag } from './Benefits';


interface RecipeCardProps {
  recipe:  Recipe;
  index:   number;
  onClick: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, index, onClick }) => (
  <div
    className="card"
    style={{ animationDelay: `${index * 0.05}s` }}
    onClick={() => onClick(recipe)}
  >
    <div className="card-img-wrap">
      <img src={recipe.image} alt={recipe.title} />
      <span className="card-badge">{recipe.tag}</span>
      <span className="card-diff">{recipe.difficulty}</span>
    </div>

    <div className="card-body">
      {/* ✅ cast to RecipeCategory fixes implicit any on Record index */}
      <div className="card-category">
        {CATEGORY_LABEL[recipe.category as RecipeCategory]}
      </div>

      <div className="card-title">{recipe.title}</div>

      <div className="flex flex-wrap gap-2 mt-2">
        {recipe.benefits.map((tag: string) => {
          const benefitTag = tag as BenefitTag;
          return (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full flex items-center gap-1"
            >
              {/* ✅ cast to BenefitTag fixes implicit any on both Record indexes */}
              <span>{BENEFIT_ICON[benefitTag as BenefitTag]}</span>
              {BENEFIT_LABEL[benefitTag as BenefitTag]}
            </span>
          );
        })}
      </div>

      <div className="card-footer">
        <span className="card-time">⏱ {recipe.time}</span>
        <button className="card-cta">View →</button>
      </div>
    </div>
  </div>
);
