import React from 'react';
import Person from './Person';
import './Cohort.css';

// , removeStudent

const Cohort = ({members, addStudent}) => {
  const member = members.map((member, index) => 
    <Person member={member} id={index} addStudent={addStudent} />);
  
  // {
  //   return (<Person
  //     id={member.id}
  //     name={member.name}
  //     quote={member.quote}
  //     superlative={member.superlative}
  //     photo={member.photo}
  //     key={member.id}
  //   />
  //   );
  // });
  
  // console.log({member}, {index})
    return (
      <div className='displayCards'>
        {member}
      </div>
    );
  
};

export default Cohort;
