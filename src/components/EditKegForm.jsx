import React from 'react';

function EditKegForm(){
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
        <input
          type='number'
          id='remainingTaps'
          placeholder='Remaining Taps' />
        <button type='submit'>Add Keg</button>
      </form>
    </div>  
  );
}