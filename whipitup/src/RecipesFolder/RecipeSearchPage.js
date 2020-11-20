// import RecipeList from "./recipe-list";
import React from 'react'
import { whipUpContext } from '../ApiContext';
import RecipeList from './recipe-list';

export default function RecipeSearchPage(props){
    // const data = this.state.recipes;
    // const vegan = this.state.vegan;
    //   const newData = []
    //   for(let i =0; i < data.length; i++){
    //     if(vegan){
    //       if(data[i].meal === mealType && data[i].is_vegan){
    //      newData.push(data[i])
    //     }
    //     }
    //     if(mealType === data[i].meal){
    //       newData.push(data[i])
    //     }
        
    //   }
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
                props.filterRecipeType(e.target.value)
          }
        }
        >
            <option value = 'meals'>Meals</option>
            <option value= 'breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value = 'dinner'>Dinner</option>
        </select>
        <label htmlFor="vegan-option">Vegan</label>
        <input type="checkbox" 
        name="Vegan-option" 
        id="vegan"
        onChange={e=> {
        //   e.preventDefault();
            props.filterVeganType(!vegan)
        }
    }/>

    </form>
    <div className="results">
        <ul>
        <RecipeList recipes={recipes.filter(recipe => {
            // if(vegan){
            //     return recipe.meal === meal && recipe.is_vegan
            // }
            console.log(meal)
            if(meal === 'meals' || !meal){
                return true
            }else {
                return recipe.meal === meal
            }

            }
            ).filter(recipe => {
                console.log(vegan)
                if(vegan){
                    return recipe.is_vegan
                }
            return true
            })
            } />

        </ul>
    </div>
</body>



        )}

    </whipUpContext.Consumer>


    )
}