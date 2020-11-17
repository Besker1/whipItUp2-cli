import {Route} from 'react-router-dom';
import FrontPage from '../Users/FrontPage';
import AboutPage from '../Users/AboutPage'
import LoginPage from '../Users/LoginPage'
import SignUpPage from '../Users/SignUpPage'
import RecipeSearchPage from '../RecipesFolder/RecipeSearchPage'



export default function RecipesRouter() {
        return (
                <Route path = '/' component ={FrontPage}/>,
                <Route path = '/about' component ={AboutPage}/>,
                <Route path = '/login' component ={LoginPage}/>,
                <Route path = '/signup' component ={SignUpPage}/>,
                <Route path = '/recipe' component ={RecipeSearchPage}/>
        )
}