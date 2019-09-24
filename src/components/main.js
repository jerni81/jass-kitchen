import React from "react";
import '../main.css'

function Main(props) {
  return (
    <div className="main">
      <img
        className="banner"
        border="0"
        alt="banner"
        src ={process.env.PUBLIC_URL + 'images/desktop/banner.png'}
        height="300px"
      />
      <h1> Main </h1>

    </div>
  )
}

export default Main;
