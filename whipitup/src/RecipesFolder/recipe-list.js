import Recipes from './Recipes.js'

export default function RecipeList(props){
 const recipeList = props.recipes.map(recipe => {
    return  (<li>
    <Recipes 
    key={recipe.recipe_id}
    title = {recipe.title}
    image = {recipe.img}
    content = {recipe.content }
    />
     </li>
    )
 })

return (
        <ul>
            {recipeList}
        </ul>
    )
}
    
