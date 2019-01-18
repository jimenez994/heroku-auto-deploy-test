import React, { Component } from 'react'
import Axios from 'axios';
export default class weatherApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      search :'',
      output: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.search);
    var searchType = `q=${this.state.search}` 
    if(isValidZip === true){
      searchType = `zip=${this.state.search}`
    }
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?${searchType}&APPID=bb9e615b330eecf16100fe0b2e388e96`)
      .then( res => {
        var tempAF = Math.ceil((res.data.main.temp - 273.15) * 9/5 + 35)
        this.setState({output: tempAF})
      })
      .catch( err => {
        this.setState({output: 'sorry something went wrong'})
      })
  }
  onChange(e){
    this.setState({[e.target.name] : e.target.value})
  }
  render() {
    return (
      <div>
        <h2>Weather App</h2>
        <form onSubmit={this.onSubmit}>
          <p>{this.state.output} Fº </p>
          <input type='text' name='search' onChange={this.onChange}/>
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}
