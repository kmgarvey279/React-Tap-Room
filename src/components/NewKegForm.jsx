import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name' />
        <input
          type='text'
          id='brand'
          placeholder='Brand' />
        <input
          type='number'
          id='price'
          placeholder='Price' />
        <input
          type='number'
          id='alcoholLvl'
          placeholder='Alcohol Content' />
          <button type='submit'>Add Keg</button>
      </form>
    </div>  
  );
}

export default NewKegForm;