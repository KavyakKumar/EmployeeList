import React from  'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/createEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/edit/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/view/:id" component = {ViewEmployeeComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;