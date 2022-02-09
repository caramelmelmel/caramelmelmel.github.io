import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

//placeholder
import data from "../yourdata"
const Navigation = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            <img src={data.navIcon} width="60" height="60" alt="about"></img>
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
