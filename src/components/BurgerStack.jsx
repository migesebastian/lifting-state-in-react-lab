import React from 'react';

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ color: ingredient.color }}>
          {ingredient.name} <button onClick={() => removeFromBurger(index)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
