import React, { Component } from 'react';
import uniqueid from 'uniqid'

export default class ninjaGold extends Component {
  constructor(props){
    super(props);
    this.state = {
      gold: 0,
      messages: []
    }
  }
  reset = () => {
    this.setState({gold: 0, messages: []})
  }
  
  onClick = (e) => {
    e.preventDefault()
    var place = e.target.name
    const goldFound = (min,max, place) => {   
      var goldGen = Math.floor(Math.random() * (max - min + 1)) + min;
      var style = 'green';
      if(goldGen < 0){style= 'red'}
      this.setState({gold: this.state.gold + goldGen});
      this.setState(prevState => ({ messages: [ {msg:`You went to ${place} and found $ ${goldGen} coins`, style: style} ,...prevState.messages] }))
    }
    if(place === 'farm'){
      goldFound(10,20, 'farm')
    }else if(place === 'cave'){
      goldFound(5,10, 'cave')
    }else if(place === 'home'){
      goldFound(2,5,'home')
    }else if(place === 'casino'){
      goldFound(-50,50,'casino')
    }
  }
  
  render() {
    return (
      <div>
        <h2>Ninja Gold v3</h2>
        <h3>${this.state.gold}</h3>
        <h4>$10-$20</h4>
        <button name='farm' onClick={this.onClick}>Farm</button>
        <h4>$5-$10</h4>
        <button name='cave'  onClick={this.onClick}>Cave</button>
        <h4>$2-$5</h4>
        <button name='home' onClick={this.onClick}>Home</button>
        <h4>$-50-$50</h4>
        <button name='casino' onClick={this.onClick}>Casino</button>
        <div style={{height:'200px',overflow: 'auto'}}>{this.state.messages.map((message) => (<p style={{color: message.style}} key={uniqueid()}>{message.msg}</p>))}</div>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
