import {Link} from 'react-router-dom'
import Footer from './Footer'
export default function Menu(){
    return (
        <div className="logo">
          <h1>
            <Link to="/"> WhipItUp</Link>
          </h1>
          <p className="moto">"Cooking made Easy"</p>
        </div>

    )
}