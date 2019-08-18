import React, { Component } from 'react';
import Cohort from './Cohort';
import StudentForm from '../StudentForm';
import people from '../data/yearbook-data.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addStudent = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent]
    })
  }

  // removeStudent = (id) => {
  //   const filteredStudents = this.state.students.filter(student => student.id !== id);
  //   this.setState({students: filteredStudents});
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <main>
          <h2>Staff</h2>
          <Cohort members={this.state.staff} addStudent={this.addStudent}/>
          <h2>Students</h2>
          <StudentForm addStudent={this.addStudent}/>
          <Cohort members={this.state.students} addStudent={(newStudent) => this.addStudent(newStudent)}  />
        </main>
      </div>
    );
  }
}

export default App;

// removeStudent={id => this.removeStudent(id)}
