import React from 'react'
import './Recipe.scss'
const Recipe = (props) => {
  const {label,calories, image, ingredients} = props.recipe.recipe
  console.log(ingredients)
    return (
      <div className = "recipe">
          <h1>{label}</h1>
          <ol>
            {ingredients.map(ing=>(
              <li key ={ing.text}>
                {ing.text}
              </li>
            ))}
          </ol>
          <p> calories: {calories.toFixed(2)}</p>
          <img src={image} style={{marginBottom:'20px'}} alt=""/>
      </div>
    )
}

export default Recipe
