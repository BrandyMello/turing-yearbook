import React from 'react';
import './Person.css';

const Person = ({member}) => {
  return (
      <div className='card'>
        <img src={member.photo} />
        <h3>{member.name}</h3>
        <p className='quote'>"{member.quote}"</p>
        <p className='superlative'>{member.superlative}<  /p>
      </div>
    )
}

export default Person;
