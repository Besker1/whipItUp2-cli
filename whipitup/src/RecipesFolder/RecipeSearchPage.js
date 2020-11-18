// import RecipeList from "./recipe-list";
import React from 'react'

export default function RecipeSearchPage(props){
    return (
<body>

    <h2>Try These and Thank me Later</h2>
    <form>
        <select>
            <option>Meals</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
        </select>
        <label htmlFor="vegan-option">Vegan</label>
        <input type="checkbox" name="Vegan-option" id="vegan"/>
        <button> Search recipe</button> 
    </form>
    <div className="results">
        <ul>
            
        </ul>
    </div>
</body>
    )
}