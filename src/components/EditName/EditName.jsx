import React from 'react';
import '../EditName/editName.css';

export default function EditName() {
  return (
    <div className='container-editName'>
      <div className='top-container-editName'>
        <input placeholder='Tony' type='text' name='name' />
        <input placeholder='Jarvis' type='text' name='name' />
      </div>
      <div className='bottom-container-editName'>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}
