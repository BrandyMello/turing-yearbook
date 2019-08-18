import React from 'react';
import './Person.css';

const Person = ({id, photo, name, quote, superlative, addStudent, removeCard}) => {
  return (
      <div className='card'>
        <img src={photo} alt={name}/>
        <h3>{name}</h3>
        <p className='quote' contentEditable="true" suppressContentEditableWarning={true}>"{quote}"</p>
        <p className='superlative' contentEditable="true" suppressContentEditableWarning={true}>{superlative}</p>
        <button className='remove-btn' contentEditable="true" suppressContentEditableWarning={true} onClick={() => removeCard(id)}>Remove</button>
      </div>
    )
}

export default Person;


