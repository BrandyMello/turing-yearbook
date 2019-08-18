import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
  it ('should match the snapshot', () => {
    const wrapper = shallow(<Cohort 
      members={[{
              id: 1,
              name: 'Eric',
              photo: './eric.jpg',
              quote: 'You miss all the shots you don\'t take.',
              superlative: 'Most likely to Win the PGA'
            }]}
      addStudent={jest.fn()}
      removeCard={jest.fn()}
      />);
  });
});