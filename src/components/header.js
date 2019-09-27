import React from "react";
import '../header.css'

function Header(props) {
  return (
    <div className="header">
      <div className="title">
        <h1>JASS Kitchen</h1>
      </div>
       <div className="hey">
       Hey Brad!
       <img className="desktop" src ={process.env.PUBLIC_URL + 'images/desktop/shopping_cart.svg'} alt="shoppingCart"/>
       </div>
    </div>
  )
}

export default Header;
