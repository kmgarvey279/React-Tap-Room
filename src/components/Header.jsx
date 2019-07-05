import React from "react";
import { Link } from 'react-router-dom';
import background from '../assets/images/beerheader.png'

function Header(){
  return (
    <div>
    <style jsx>{`
      div {
      }
      #navbar {
        background-color: gray;
        height: 25px;
        text-align: center;
        color: black;
      }
      
      img#background {

        height: 150px;
        width: 100%;
        object-fit: cover
        position: absolute;
        z-index: 0;
      }
      
      #title {
        
        text-align: center;
      }
    `}</style>
      <div id="title"><h1>Tap Room</h1></div>
      <img id="background" src={background}/>
      <div id="navbar">
        <Link to="/">Home</Link> | <Link to="/keglist">Kegs on Tap</Link> | <Link to="/newkegform">Add New Keg</Link> | <Link to="/aboutus">About Us</Link> 
      </div>
    </div>
  );
}

export default Header;