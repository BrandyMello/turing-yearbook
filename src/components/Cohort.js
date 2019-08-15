import React from 'react';
import Person from './Person';
import './Cohort.css';

// , removeStudent

const Cohort = (props) => {
  const member = props.members.map(member => <Person member={member} />);
    return (
      <div className='displayCards'>
        {member}
      </div>
    );
  
}

export default Cohort;
