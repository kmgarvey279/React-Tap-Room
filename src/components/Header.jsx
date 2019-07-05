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
      }
      
      img#background {

        height: 200px;
        width: 100%;
        object-fit: cover
        position: absolute;
        z-index: 0;
      }
      
      #title {
        position: relative;
        z-index: 1;
        text-align: center;
      }
    `}</style>
      <img id="background" src={background}/>
      <div id="title">Tap Room</div>
      <div id="navbar">
        <Link to="/">Home</Link> | <Link to="/keglist">Kegs on Tap</Link> | <Link to="/newkegform">Add New Keg</Link>
      </div>
    </div>
  );
}

export default Header;