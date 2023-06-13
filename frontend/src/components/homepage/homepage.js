import React from "react"
import { Link } from "react-router-dom"
import "./homepage.css"

const Homepage = () => {
    return (
      <div className="home">
          <div className="homepage">
            <h1>Hello Homepage</h1>
           <Link to={'/register'}> <div className="button">Register</div></Link>
        </div>
      </div>
    )
}

export default Homepage