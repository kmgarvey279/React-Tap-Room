import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <style jsx>{`
    `}</style>
      <h2>{props.name}</h2>
      <h4>{props.brand}</h4>
      <h4>{props.price}</h4>
      <h4>{props.alcoholLvl}</h4>
      <h4>{props.remainingTaps}</h4>
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