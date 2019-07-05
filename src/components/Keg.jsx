import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <style jsx>{`
    `}</style>
      <h2>Name:{props.name}</h2>
      <h4>Brand:{props.brand}</h4>
      <h4>Price:{props.price}</h4>
      <h4>Alcohol Content:{props.alcoholLvl}</h4>
      <h4>Remaining Taps:{props.remainingTaps}</h4>
      <button type="button">Sell Pint</button>
      <button type="button">Edit Pint Information</button>
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