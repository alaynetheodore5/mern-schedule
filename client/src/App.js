import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import Display from './Components/Display';
import ScheduleForm from './Components/ScheduleForm';
import EditSchedule from './Components/EditSchedule';

function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-dark text-light text-center">
        <h1>My Schedule</h1>
      </div>
      <Link className="btn btn-outline-info" to="/">Schedule</Link>
      <Link className="btn btn-outline-info" to="/new">New Activity</Link>
      <Router className="my-5">
        <Display path="/" />
        <ScheduleForm path="/new" />
        <EditSchedule path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
