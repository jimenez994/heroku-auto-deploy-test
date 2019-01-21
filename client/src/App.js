import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherApp from './componets/weatherApp';
import GithubApp from './componets/githubApp'; 
import NinjaGold from './componets/ninjaGold/ninjaGold';
import Posts from './componets/wall/posts';
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
            <Link to="/wall">Wall</Link>
            <Link to="/weather"> Weather</Link>
            <Link to="/git"> Git</Link>
            <Link to="/ninjaGold">Ninja Gold</Link>
            <Route path="/wall" component={Posts}/>
            <Route path="/weather" component={WeatherApp}/>
            <Route path="/git" component={GithubApp}/>
            <Route path="/ninjaGold" component={NinjaGold}/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
