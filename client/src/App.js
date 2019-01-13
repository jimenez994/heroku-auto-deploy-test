import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherApp from './componets/weatherApp';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Adding react to the project is a success!
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Learn React
            </a>
            <Link to="/weather"> Weather</Link>
          <Route path="/weather" component={WeatherApp}/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
