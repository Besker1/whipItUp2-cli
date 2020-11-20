import "./App.css";
import "./index.css";
import { React, Component } from "react";
import FrontPage from "./Users/FrontPage";
import { Route } from "react-router-dom";
import AboutPage from "./Users/AboutPage";
import LoginPage from "./Users/LoginPage";
import SignUpPage from "./Users/SignUpPage";
import RecipeSearchPage from "./RecipesFolder/RecipeSearchPage";
import Menu from "./Users/Menu";
import Footer from "./Users/Footer";
import Nav from "./Users/Nav";
import RecipeList from "./RecipesFolder/recipe-list";
import { whipUpContext } from "./ApiContext";

export default class App extends Component {
  state = {
    recipes: [],
    vegan: false,
    meal: "",
    url: "http://localhost:8000/",
  };

  /// search for recipes using the api based on the data which can be vegan or nothing
  componentDidMount() {
    const url = this.state.url;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "SECRET-API_TOKEN",
      },
      method: "GET",
    };
    fetch(`${url}`, options)
      .then((res) => res.json())
      .then((res) => this.handleRecipe(res));
  }
  /// push the recipe to the recipes found from fetch to the recipes in the state;
  handleRecipe = (data) => {
      this.setState({
        recipes: data
      });
  };
  // fiilter get called if the state of vegan is true, thus function should be called
  filterRecipeType=(meal)=>{
      this.setState({
        // recipes: newData,
        meal
      })
    }
  filterVeganType = (vegan) => {
    this.setState({
      vegan
    })
  }

  render() {
    console.log("here iam the meal", this.state.meal);

    return (
     <whipUpContext.Provider value = {this.state}>
      <div className="front-page">
        <main>
          <header>
            <nav className="navigation">
              <Menu />
              <Nav />
            </nav>
          </header>
        </main>
        <div>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/recipe">
            <RecipeSearchPage filterRecipeType = {this.filterRecipeType} filterVeganType = {this.filterVeganType} />
          </Route>
        </div>
      </div>
    </whipUpContext.Provider>
    );
  }
}
