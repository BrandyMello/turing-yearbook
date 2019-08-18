import React from 'react';
import './Person.css';

const Person = ({member, addStudent, removeCard}) => {
  return (
      <div className='card'>
        <img src={member.photo} alt={member.name}/>
        <h3>{member.name}</h3>
        <p className='quote' contenteditable="true">"{member.quote}"</p>
        <p className='superlative' contenteditable="true">{member.superlative}</p>
        <button className='remove-btn' contenteditable="true" onClick={() => removeCard(member.id)}>Remove</button>
      </div>
    )
}

export default Person;


