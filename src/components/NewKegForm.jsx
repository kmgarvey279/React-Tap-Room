import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcohol = null;
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price = _price.value, alcoholLvl = _alcohol.value, remainingTaps = 124})
    _name.value = '';
    _brand.value = '';
    _price.value '';
    _alcohol.value = '';
  }
  
    return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name' 
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand' 
          ref={(input) => {_brand = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price' 
          ref={(input) => {_price = input;}}/>
        <input
          type='number'
          id='alcoholLvl'
          placeholder='Alcohol Content' 
          ref={(input) => {_alcohol = input;}}/>
        <button type='submit'>Add Keg</button>
      </form>
    </div>  
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;