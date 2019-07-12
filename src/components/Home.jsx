import React from "react";
import taps from '../assets/images/taps.jpg';

function Home(){
  return (
    <div>
      <style jsx>{`
        div {
          margin-top: 10px;

        }
        h1 {
          text-align: center;
          break-inside: avoid-column;
        }
        
        img {
          float: left;
          padding-right: 20px;
          padding-left: 10px;
        }
      `}</style>
      <img src={taps} height='300px' weight='300px' alt='beer glasses under taps' />
      <h1>Welcome to the Tap Room!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Neque laoreet suspendisse interdum consectetur libero id. Magna etiam tempor orci eu lobortis elementum nibh. Fusce ut placerat orci nulla pellentesque dignissim enim. Lacinia quis vel eros donec ac odio tempor orci. Sagittis purus sit amet volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas. At tempor commodo ullamcorper a. Sapien nec sagittis aliquam malesuada bibendum arcu. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Quam viverra orci sagittis eu volutpat odio facilisis. Tincidunt praesent semper feugiat nibh.</p>
    </div>
  );
}

export default Home;