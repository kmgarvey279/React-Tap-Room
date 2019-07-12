import React from "react";
import { Link } from 'react-router-dom';
import background from '../assets/images/beerheader.png'

function Header(){
  return (
    <div>
    <style jsx>{`
      div {
        background-color: black;
      }
      
      img#background {
        height: 150px;
        width: 100%;
        object-fit: cover
        position: absolute;
        z-index: 0;
      }
      
      #title h1 {
        padding-top: 20px;
        text-align: center;
      }
    `}</style>
      <img id="background" src={background}/>
    </div>
  );
}

export default Header;