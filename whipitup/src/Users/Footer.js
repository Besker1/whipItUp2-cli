export default function Footer(){
    return (
        <footer>
        {/* <!-- should be located in the middle  --> */}
        <div>
          <p>
            Created By{" "}
            <a href="linkedIn info" target="_blank">
              Besker T
            </a>
          </p>
        </div>

        <div className="contacts">
          {/* <!-- will be located on the left hand sign when it's on mobile  and desktop--> */}

          <ul>
            <li>
              <a href="linkedin" target="_blank">
                {" "}
                linkedin
              </a>
            </li>
            <li>
              <a href=" twitter" target="_blank">
                twitter
              </a>
            </li>
            <li>
              <a href="github" target="_blank">
                github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
}