import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({members, addStudent, removeCard}) => {
  const member = members.map((member, index) => 
    <Person name={member.name} quote={member.quote} superlative={member.superlative} photo={member.photo} id={index} key={index} addStudent={addStudent} removeCard={removeCard}/>);
    return (
      <div className='displayCards'>
        {member}
      </div>
    );
  
};

export default Cohort;
