import Recipes from "./Recipes.js";
import React from "react";

export default function RecipeList(props) {
  console.log("i made it inside here", props.recipes);
  const recipeList = props.recipes.map((recipe) => {
    return (
      <Recipes
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.img}
        content={recipe.content}
      />
    );
  });

  return <div>{recipeList}</div>;
}
