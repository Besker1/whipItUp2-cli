export default function FrontPage(props){
    return (
        <div class="front-page">
        <main>
    <header>
        <nav>
            {/* <!-- the logo will be on the left with the moto be in column with the whipitup --> */}
           <div class="logo">
               <h1>WhipItUp</h1>
            <p class="moto">"Cooking made Easy"</p>
        </div> 

        {/* <!-- singin and sign up menu will be on the righ hand side of the page --> */}
        <div class="menu">
            <ul>
                <li>About</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </div>
        </nav>

        {/* <!-- get recipe will be placed in the middle of the page --> */}
        <div class="entry">
            <button className="get-recipe-page entry-button" onClick = {props.getRecipes}>Get Recipe</button>
        </div>
    </header>
        <section>
            this is the about section where everything about the page will be
        </section>
    </main>
    <footer>
        {/* <!-- should be located in the middle  --> */}
        <div> 
            <p>Created By <a href="linkedIn info">Besker T</a></p>
        </div>

        <div className="contacts">
            {/* <!-- will be located on the left hand sign when it's on mobile  and desktop--> */}
            
            <ul>
                <li><a href="linkedin"> linkedin</a></li>
                <li><a href=" twitter">twitter</a></li>
                <li><a href="github">github</a></li>
            </ul>
        </div>
    </footer>
</div>
    )
}