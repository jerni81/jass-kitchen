import React from "react";
import '../footer.css'

function Footer(props) {
  return (
    <div className="footer">

      <img  src ={process.env.PUBLIC_URL + 'images/desktop/social-media.png'} alt="socialmedia"/>
      <a href="/#">About Us</a>
      <a href="/#">Community</a>
      <a href="/#">Contact</a>
      <a href="/#">Customer Support</a>

    </div>
  )
}

export default Footer;
