import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should update state with a new student when addStudent is called', () => {
    const wrapper = shallow(<App />);
    const mockStudent = {
      id: 3,
      photo: 'https://placekitten.com/200/300',
      name: 'Dick',
      quote: 'My name is not Richard',
      superlative: 'Most likely to piss me off.'
    }
    const expected = [mockStudent];

    expect(wrapper.state('students')).toEqual([]);
    wrapper.instance().addStudent(mockStudent);
    expect(wrapper.state('students')).toEqual(expected);
  });


});

