import React from "react";
import '../main.css'

function Main(props) {
  return (
    <div className="main">
      <div className="top">
        <img
          className="banner"
          border="0"
          alt="banner"
          src ={process.env.PUBLIC_URL + 'images/desktop/banner.png'}
          height="300px"
        />
        <h2> Menu of the Week: Sept 22-28 </h2>
      </div>
      <div className="cards">

        <div className="card div">
          <img
            className="card"
            border="0"
            alt="card"
            src ={process.env.PUBLIC_URL + 'images/desktop/food1.png'}
            height="300px"
          />
          <button>Button</button>
        </div>
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food2.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food3.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food4.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food5.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food6.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food7.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food8.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food9.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food10.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food11.png'}
          height="300px"
        />
        <img
          className="card"
          border="0"
          alt="card"
          src ={process.env.PUBLIC_URL + 'images/desktop/food12.png'}
          height="300px"
        />
      </div>
    </div>
  )
}

export default Main;
