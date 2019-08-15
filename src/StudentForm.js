import React, { Component } from 'react';

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
    const newStudent = {id: Date.now(), ...this.state};
    this.props.addStudent(newStudent);
    this.setState({studentName: '', studentQuote: '', studentSuperlative: ''});
  }

  render() {
    return (
      <form className='form'>
        <input type='text' placeholder='Type name here: "Jane"' name='studentName' value={this.state.studentName} onChange={this.handleInputChange}/>
        <input type='text' placeholder='Type favorite quote here...' name='studentQuote' value={this.state.studentQuote} onChange={this.handleInputChange}/>
        <input type='text' placeholder='Type superlative here...' name='studentSuperlative' value={this.state.studentSuperlative} onChange={this.handleInputChange}/>
        <button className='submit' onClick={this.handleNewStudent}>Make me a Student</button>
      </form>
    )
  }
}

export default StudentForm;