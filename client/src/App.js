import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import Display from './Components/Display';
import ScheduleForm from './Components/ScheduleForm';
import EditSchedule from './Components/EditSchedule';

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1>ScheduleKeeper</h1>
      </div>
      <div className="container">
        <div className="navbar">
          <Link className="navbtn" to="/">My Schedule</Link>
          <Link className="navbtn" to="/new">Add Activity</Link>
        </div>
        <Router className="my-5">
          <Display path="/" />
          <ScheduleForm path="/new" />
          <EditSchedule path="/edit/:_id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
