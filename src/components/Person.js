import React from 'react';
import './Person.css';

// , removeStudent

const Person = ({member, addStudent}) => {
  console.log({member})
  return (
      <div className='card'>
        <img src={member.photo} alt={member.name}/>
        <h3>{member.name}</h3>
        <p className='quote'>"{member.quote}"</p>
        <p className='superlative'>{member.superlative}</p>
        <button className='remove-btn'>Remove Student</button>
      </div>
    )
}

export default Person;


