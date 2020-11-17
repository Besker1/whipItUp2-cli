import './App.css';
import './index.css'
import { Component } from 'react';
import FrontPage from './Users/FrontPage'
import {Route} from 'react-router-dom'
import AboutPage from './Users/AboutPage'
import LoginPage from './Users/LoginPage'
import SignUpPage from './Users/SignUpPage'
import RecipeSearchPage from './RecipesFolder/RecipeSearchPage'
import Menu from './Users/Menu';
import Footer from './Users/Footer';
import Nav from './Users/Nav';



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
  componentDidMount = async (data) => { 
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

  // renderNavRoutes() {
  //   return (
  //     <>
  //       {['/', '/folder/:folderId'].map((path) => (
  //         <Route exact key={path} path={path} component={NoteListNav} />
  //       ))}
  //       <Route path='/note/:noteId' component={NotePageNav} />
  //       <Route path='/add-folder' component={NotePageNav} />
  //       <Route path='/add-note' component={NotePageNav} />
  //     </>
  //   );
  // }

  // renderMainRoutes() {
  //   return (
  //     <>
  //       {['/', '/folder/:folderId'].map((path) => (
  //         <Route exact key={path} path={path} component={NoteListMain} />
  //       ))}
  //       <Route path='/note/:noteId' component={NotePageMain} />
  //       <Route path='/add-folder' component={AddFolder} />
  //       <Route path='/add-note' component={AddNote} />
  //     </>
  //   );
  // }


render(){
   return (
   <div className="front-page">
      <main>

        <header>
          <nav className='navigation'> 
          <Menu/>
            <Nav/>
             
          </nav>
        </header>
      </main>
     <div>
      <Route exact path = '/' component ={FrontPage}/>
      <Route exact path = '/about' component ={AboutPage}/>
      <Route path = '/login' component ={LoginPage}/>
      <Route path = '/signup' component ={SignUpPage}/>
      <Route path = '/recipe' component ={RecipeSearchPage}/>
     </div>
   
      </div>

   )
}
 }