import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Person
        id={21}
        name='Jane Doe'
        photo='https://placekitten.com/200/300'
        quote='You got this'
        superlative='Most likely to cry'
      addStudent={jest.fn()} 
      removeCard={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});