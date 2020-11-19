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
  filterRecipeType=(mealType)=>{
    const data = this.state.recipes;
    const vegan = this.state.vegan;
      const newData = []
    
      for(let i =0; i < data.length; i++){
        if(vegan){
          if(data[i].meal === mealType && data[i].is_vegan){
         newData.push(data[i])
        }
        }
        if(mealType === data[i].meal){
          newData.push(data[i])
        }
        
      }
      this.setState({
        recipes: newData
      })
    }
  

  render() {
    console.log("here iam the meal", this.state.meal);

    return (
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
            <body>
              <h2>Try These and Thank me Later</h2>
              <form>
                <select
                  onChange={(e) => {
                    e.preventDefault();
                    this.setState({
                      meal: e.target.value
                    })
                  this.filterRecipeType(e.target.value)
                  }
                }
                >
                  <option>Meals</option>
                  <option>breakfast</option>
                  <option>lunch</option>
                  <option>dinner</option>
                </select>
                <label htmlFor="vegan-option">Vegan</label>
                <input
                  type="checkbox"
                  name="Vegan-option"
                  id="vegan"
                  defaultChecked={this.props.defaultChecked}
                  onChange={(e) => {
                    e.preventDefault();
                    this.setState({
                      vegan: true,
                    });
                  }}
                />
                <button> Search recipe</button>
              </form>
              <div className="results">
                <ul>
                  <RecipeList recipes={this.state.recipes} />
                </ul>
              </div>
            </body>

            {/* <RecipeSearchPage   /> */}
          </Route>
        </div>
      </div>
    );
  }
}
