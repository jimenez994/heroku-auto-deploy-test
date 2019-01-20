import React, { Component } from 'react'

export default class ninjaGold extends Component {
  constructor(props){
    super(props);
    this.state = {
      gold: 0,
      messages: ['frewfwe','erfefw']
    }
    // this.onClick = this.onClick.bind(this)
  }
  
  onClick = (e) => {
    e.preventDefault()
    function goldG(a,b) {      
      return Math.floor(Math.random() * b) + a 
    }
    var place = e.target.name
    if(place === 'farm'){
      this.setState({gold: this.state.gold + goldG(10,20)})
    }else if(place === 'cave'){
      this.setState({gold: this.state.gold + goldG(5,10)})
    }else if(place === 'home'){
      this.setState({gold: this.state.gold + goldG(2,5)})
    }else if(place === 'casino'){
      this.setState({gold: this.state.gold + goldG(-50,100)})
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
        <p>{this.state.messages.map((msg) => (<li >{msg}</li>))}</p>
      </div>
    )
  }
}
