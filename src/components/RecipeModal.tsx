import React, { useState, useEffect } from 'react';
import { Recipe } from '../types/recipe';
import { CATEGORY_LABEL } from '../data/filters';

interface RecipeModalProps {
  recipe:  Recipe | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => { setActiveStep(0); }, [recipe?.id]);
  if (!recipe) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero">
          <img src={recipe.image} alt={recipe.title} />
          <div className="modal-hero-overlay" />
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-content">
          <div className="modal-meta">
            <span className="modal-cat">{CATEGORY_LABEL[recipe.category]}</span>
            <span className="modal-sep">·</span>
            <span className="modal-time">⏱ {recipe.time}</span>
            <span className="modal-diff">{recipe.difficulty}</span>
          </div>
          <h2 className="modal-title">{recipe.title}</h2>
          <div className="modal-benefits">
            {recipe.benefits.map((b) => (
              <span key={b} className="modal-benefit-chip">{b}</span>
            ))}
          </div>
          <p className="modal-desc">{recipe.description}</p>

          <div className="section-label">Ingredients</div>
          <div className="ingredients-grid">
            {recipe.ingredients.map((ing) => (
              <div key={ing.name} className="ing-card">
                <span className="ing-emoji">{ing.emoji}</span>
                <div>
                  <div className="ing-name">{ing.name}</div>
                  <div className="ing-benefit">{ing.benefit}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-label">Steps — tap to track progress</div>
          <div className="steps-list">
            {recipe.steps.map((step, i) => (
              <div
                key={i}
                className={`step ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'done' : ''}`}
                onClick={() => setActiveStep(i === activeStep ? i + 1 : i)}
              >
                <div className="step-num">{i < activeStep ? '✓' : i + 1}</div>
                <div className="step-text">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};