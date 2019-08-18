import React, { Component } from 'react';
import './Form.css';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      studentName: '',
      studentQuote: '',
      studentSuperlative: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleNewStudent = (e) => {
    e.preventDefault();
    const newStudent = {id: Date.now(), photo: 'https://placekitten.com/200/300',  ...this.state};
    this.props.addStudent(newStudent);
    this.setState({name: '', quote: '', superlative: ''});
  }

  render() {
    return (
      <form className='form'>
        <input type='text' placeholder='Type name here: "Jane"' name='name' value={this.state.name} onChange={this.handleInputChange}/>
        <input type='text' placeholder='Type fave quote here...' name='quote' value={this.state.quote} onChange={this.handleInputChange}/>
        <input type='text' placeholder='Type superlative here...' name='superlative' value={this.state.superlative} onChange={this.handleInputChange}/>
        <button className='submit' onClick={this.handleNewStudent}>Make me a Student</button>
      </form>
    )
  }
}

export default StudentForm;