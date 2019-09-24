import React from "react";
import '../header.css'

function Header(props) {
  return (
    <div className="header">
      <div className="center">
        <h1>JASS Kitchen</h1>
      </div>
       <div className="right">
          <img src ={process.env.PUBLIC_URL + 'images/desktop/shopping_cart.svg'} alt="shoppingCart"/>
       </div>
    </div>
  )
}

export default Header;
