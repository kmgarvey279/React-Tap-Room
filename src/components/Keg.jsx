import React from 'react';
import PropTypes from 'prop-types';
import bubbles from '../assets/images/bubbles.jpg'

function Keg(props) {
  const kegInfo = 
    <div>
      <h2>{props.name}</h2>
      <h4>By {props.brand}</h4>
      <h4>Price: ${props.price}</h4>
      <h4>Alcohol Content: {props.alcoholLvl}%</h4>
    </div>
  if (props.currentRouterPath === '/employees'){
    return (
      <div onClick{()=> {props.onKegSelection(props.kegId);}}>
        <style jsx>{`
          div {
          }
      `}</style>  
        {kegInfo}    
        <h4>Remaining Taps: {props.remainingTaps}/124</h4>
        <button type="button">Sell Pint</button> 
      </div>  
    );
  } else {
    <div>
      {kegInfo}
    </div>  
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholLvl: PropTypes.number.isRequired,
  remainingTaps: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;