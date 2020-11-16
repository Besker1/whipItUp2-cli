import './App.css';
import { Component } from 'react';
import FrontPage from './Users/FrontPage';

export default class App extends Component{
  state = {
    recipes: [],
    vegan: false,
    breakfast: false,
    dinner: false,
    lunch: true,
    url: ""
  }

  /// search for recipes using the api based on the data which can be vegan or nothing 
  SearchRecipes = async (data) => { 
   const url = this.state.url;
   //if there isn't any data sent we can just fetch all the recipes 
    if(!data){
      const res = await fetch(`${url}/`);
        return this.handleRecipe(res);
    }else {
      /// if there is data search for the recipe based on the data sent 
      try {
        const res_1 = await fetch(`${url}/${data}`);
        return this.handleRecipe(res_1);
      } catch (error) {
        return console.log(error);

    }
  }
}
/// push the recipe to the recipes found from fetch to the recipes in the state;
  handleRecipe = (data) => {
    const recipes = this.state.recipes;
    recipes.push(data)
  }

render(){
   return (
     <FrontPage/>
  )
}
 }