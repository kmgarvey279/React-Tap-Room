import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props){
  let _name = null; 
  let _brand = null;
  let _price = null;
  let _alcohol = null;
  
  function handleKegEditFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value == '')
    if(_name.value == ''){
      _name.value = props.selectedKeg.name;
    }
    if(_brand.value == ''){
      _brand.value = props.selectedKeg.brand;
    } 
    if(_price.value == ''){
      _price.value = props.selectedKeg.price;
    }
    if(_alcohol.value == ''){
      _alcohol.value = props.selectedKeg.alcoholLvl;
    }
    props.onKegEdit({name: _name.value, brand: _brand.value, price: _price.value, alcoholLvl: _alcohol.value, remainingTaps: 124, kegId: props.selectedKegId});
  }
  
  return (
    <div>
    <h3>Edit {props.selectedKeg.name} Keg</h3>
      <form onSubmit={handleKegEditFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder={props.selectedKeg.name}
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder={props.selectedKeg.brand}
          ref={(input) => {_brand = input;}}/>
        <input
          type='number'
          id='price'
          step={0.50}
          precision={3}
          placeholder={props.selectedKeg.price}
          ref={(input) => {_price = input;}}/>
        <input
          type='number'
          id='alcoholLvl'
          step={0.1}
          precision={2}
          placeholder={props.selectedKeg.alcoholLvl}
          ref={(input) => {_alcohol = input;}}/>
        <button type='submit'>Edit Keg</button>
      </form>
    </div>  
  );
}

EditKegForm.propTypes = {
  selectedKeg: PropTypes.object.isRequired,
  onKegEdit: PropTypes.func.isRequired,
  kegId: PropTypes.string.isRequired
};

export default EditKegForm;