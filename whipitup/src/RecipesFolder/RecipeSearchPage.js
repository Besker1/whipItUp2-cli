import Recipes from "./Recipes";

export default function RecipeSearchPage(){
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
            <li>{<Recipes/>}</li>
            <li>recipe 2 with video</li>
            <li> recipe 3 with video</li>
            <li>recipe 4 with video</li>
        </ul>
    </div>
</body>
    )
}