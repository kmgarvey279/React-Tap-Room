import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props){
  return (
    <div>
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
  selectedKeg: PropTypes.object
};

export default EditKegForm