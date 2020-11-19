// import RecipeList from "./recipe-list";
import React from 'react'
import { whipUpContext } from '../ApiContext';
import RecipeList from './recipe-list';

export default function RecipeSearchPage(props){
    return (
    
    <whipUpContext.Consumer>

        {({vegan, meal, recipes}) => (

<body>

    <h2>Try These and Thank me Later</h2>
    <form>
        <select
          onChange={(e) => {
            e.preventDefault();
                meal =  e.target.value
                props.filterRecipeType(e.target.value, meal)
          }
        }
        >
            <option>Meals</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
        </select>
        <label htmlFor="vegan-option">Vegan</label>
        <input type="checkbox" 
        name="Vegan-option" 
        id="vegan"
        // defaultChecked={this.defaultChecked}
        onChange={e=> {
        //   e.preventDefault();
            vegan = true
        }
    }/>

        <button> Search recipe</button> 
    </form>
    <div className="results">
        <ul>
        <RecipeList recipes={recipes} />

        </ul>
    </div>
</body>



        )}

    </whipUpContext.Consumer>


    )
}