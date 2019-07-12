import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcohol = null;
  
  function handleKegEditSubmission(event) {
    event.preventDefault();
    props.onKegEdit({name: _name.value, brand: _brand.value, price: _price.value, alcoholLvl: _alcohol.value});
  }
  return (
    <div>
    <h3>Edit Keg</h3>
      <form onSubmit={handleKegEditSubmission}>
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
        <button type='submit'>Edit Keg</button>
      </form>
    </div>  
  );
}

EditKegForm.propTypes = {
  selectedKeg: PropTypes.object,
  onKegEdit: PropTypes.func
};

export default EditKegForm