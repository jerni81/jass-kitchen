import React from "react";

function Header(props) {
  return (
    <div className="header">
       <a>JASS Kitchen</a>
       <img  src ={process.env.PUBLIC_URL + 'images/desktop/shopping_cart.svg'}/>
    </div>
  )
}

export default Header;
