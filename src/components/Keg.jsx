import React from 'react';
import PropTypes from 'prop-types';
import bubbles from '../assets/images/bubbles.jpg'

function Keg(props) {
  return (
    <div>
      <style jsx>{`
        div {
        }
    `}</style>  
          <h2>{props.name}</h2>
          <h4>By {props.brand}</h4>
          <h4>Price: ${props.price}</h4>
          <h4>Alcohol Content: {props.alcoholLvl}%</h4>
          <h4>Remaining Taps: {props.remainingTaps}/124</h4>
          <button type="button">Sell Pint</button>
          <button type="button">Edit Keg Information</button>  
    </div>  
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholLvl: PropTypes.number.isRequired,
  remainingTaps: PropTypes.number.isRequired
};

export default Keg;