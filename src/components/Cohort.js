import React from 'react';
import Person from './Person';
import './Cohort.css';

// , removeStudent

const Cohort = ({members, addStudent, removeCard}) => {
  const member = members.map((member, index) => 
    <Person member={member} id={index} key={index} addStudent={addStudent} removeCard={removeCard}/>);
    return (
      <div className='displayCards'>
        {member}
      </div>
    );
  
};

export default Cohort;
