import React, { Component } from 'react';
import Axios from 'axios';

export default class Wall extends Component { 

    componentDidMount(){
        Axios.get(`/api/post/all`)
            .then(posts => console.log(posts.data))
            .catch(err => console.log(err)
            )
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
