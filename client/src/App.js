import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherApp from './componets/weatherApp';
import GithubApp from './componets/githubApp'; 
import NinjaGold from './componets/ninjaGold/ninjaGold';
// import Posts from './componets/wall/posts';
import Wall from './componets/wall/wall';
import Login from './componets/auth/login';
import Registration from "./componets/auth/registration";
import Admin from "./componets/reduxFun/admin";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Adding react to the project is a success!
              </p>
              {/* <Link to="/login"> login </Link>  */}
              <Link to="/weather"> Weather </Link>
              <Link to="/git"> Git </Link>
              <Link to="/ninjaGold"> Ninja Gold </Link>
              <Link to="/wall"> Wall </Link>
              <Link to="/login">Login</Link>
              <Link to="/registration">Registration</Link>
              <Link to="/admin">Admin</Link>
              <Route path="/admin" component={Admin}/>
              <Route path="/login" component={Login}/>
              <Route path="/registration" component={Registration}/>
              <Route path="/wall" component={Wall}/>
              {/* <Route path="/login" component={Posts}/> */}
              <Route path="/weather" component={WeatherApp}/>
              <Route path="/git" component={GithubApp}/>
              <Route path="/ninjaGold" component={NinjaGold}/>
            </header>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
