import React, { Component } from 'react';
import Cohort from './Cohort';
import StudentForm from './StudentForm';
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

  removeCard = (id) => {
    const key = Object.keys(this.state);
    const filteredStaff = this.state[key[0]].filter(staffMember => staffMember.id !== id);
    const filteredStudents = this.state[key[1]].filter(student => student.id !== id);
    this.setState({students: filteredStudents});
    this.setState({staff: filteredStaff});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <main>
          <h2>Staff</h2>
          <Cohort members={this.state.staff} removeCard={this.removeCard}/>
          <h2>Students</h2>
          <StudentForm addStudent={this.addStudent} removeCard={this.removeCard}/>
          <Cohort members={this.state.students} addStudent={this.addStudent} removeCard={this.removeCard} />
        </main>
      </div>
    );
  }
}

export default App;

