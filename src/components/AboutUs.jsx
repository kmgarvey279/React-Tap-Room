import React from "react";
import beers from '../assets/images/beers.jpg';
import taps from '../assets/images/taps2.jpg';
import glasses from '../assets/images/glasses.jpg';
import bar from '../assets/images/bar.jpg';

function AboutUs(){
  return (
    <div>
      <style jsx>{`
        div {
        }
        
        img {
          margin-left: 12px;
          margin-right: 12px;
        }
      `}</style>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Neque laoreet suspendisse interdum consectetur libero id. Magna etiam tempor orci eu lobortis elementum nibh. Fusce ut placerat orci nulla pellentesque dignissim enim. Lacinia quis vel eros donec ac odio tempor orci.</p>
      <img src={beers} height="200px" weight="200px"/> <img src={taps} height="200px" weight="200px"/> <img src={glasses} height="200px" weight="200px"/> <img src={bar} height="200px" weight="200px"/>
    </div>
  );
}

export default AboutUs;