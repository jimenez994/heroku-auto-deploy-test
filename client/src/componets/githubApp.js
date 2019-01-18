import React, { Component } from 'react'
import Axios from 'axios'
export default class githubApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo : '',
      error:'',
      search : ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state.search);
    Axios.get(`https://api.github.com/users/${this.state.search}`)
      .then(res => {
        this.setState({userInfo: res.data})
        console.log(this.state.userInfo)
      })
      .catch(err => {
        console.log(err)
        this.setState({error: 'Sorry something went wrong'})
      })
    
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value, error: ''})
  }
  render() {
    return (
      <div>
        <h2>github app</h2>
        <img src="https://thumbsnap.com/t/acp0ghYY.jpg" alt="ThumbSnap" />
        <form onSubmit={this.onSubmit}>
          <input type="text" name='search' onChange={this.onChange} ></input>
          <button type="submit"> Find</button>
        </form>
        <h3>{this.state.error}</h3>
        <h3>{this.state.userInfo.login}</h3>
        <img src={this.state.userInfo.avatar_url} alt=''/>
      </div>
    )
  }
}
