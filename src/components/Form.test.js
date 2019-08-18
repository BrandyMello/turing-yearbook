import React from 'react';
import { shallow } from 'enzyme';
import Form from './StudentForm';

describe('Form', () =>  {
  it('should match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow(<Form addCard={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state on the input change within the form', () => {
    const wrapper = shallow(<Form addCard={jest.fn()}/>);

    wrapper.find('input').at(0).simulate('change', {target: {value: 'Berry', name: 'name'}});
    wrapper.find('input').at(1).simulate('change', {target: {value: 'trying', name: 'quote'}});
    wrapper.find('input').at(2).simulate('change', {target: {value: 'carry on', name: 'supperlative'}});

    expect(wrapper.state('name')).toEqual('Berry');
    expect(wrapper.state('quote')).toEqual('trying');
    expect(wrapper.state('supperlative')).toEqual('carry on');
  });

  it('should call addCard prop when clicked', () => {
    const addStudentMock = jest.fn();
    const wrapper = shallow(<Form addStudent={jest.fn()}/>);
    const eventMock = { preventDefault: jest.fn() };

    wrapper.find('button').simulate('click', eventMock);
    wrapper.instance().handleNewStudent(eventMock);

    expect(handleNewStudent).toHaveBeenCalled();
  });

});