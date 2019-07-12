import React from "react";
import { Link } from 'react-router-dom';
import background from '../assets/images/beerheader.png'
import logo from '../assets/images/logo.png'

function Header(){
  return (
    <div>
    <style jsx>{`
      div {
        background-color: black;
      }
      #navbar {
        background-color: LightCoral;
        height: 25px;
        text-align: center;
        color: black;
      }
      #title {
        padding-top: 20px;
        text-align: center;
        padding-bottom: 10px;
        position: relative;
        left: 125px;
      }
    `}</style>
      <div id="title"><img src={logo}/></div>
      <div id="navbar">
        <Link to="/">Home</Link> | <Link to="/keglist">Kegs on Tap</Link> | <Link to="/aboutus">About Us</Link> | <Link to="/employees">Employee Functions</Link>
      </div>
    </div>
  );
}

export default Header;