import React, { Component } from 'react'
import Axios from 'axios';
import setAuthToken from '../../setAuthToken/setAuthToken';
import jwt_decode from 'jwt-decode' 

class Login extends Component {
  constructor(props) {
    super(props);
    this.state ={
      email: '',
      password: '',
      user: {}
    }
  }
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`api/login`, {email: this.state.email, password: this.state.password})
      .then(res => {
        const {token} = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        this.setState({user: jwt_decode(token) })
        console.log(this.state.user);
      })
      .catch(err => console.log(err))
  }
  render () {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <h4>Email</h4>
          <input type='text' name="email" onChange={this.onChange} value={this.state.email}/>
          <h4>Password</h4>
          <input type='password' name="password" onChange={this.onChange} value={this.state.password}/><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login