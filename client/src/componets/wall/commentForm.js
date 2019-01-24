import React, { Component } from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      id : this.props.postId,
      comment: ''
    }
  }
  onChange = (e) => {
    this.setState({comment: e.target.value})
  }
  render () {
    let {addComment} = this.props
    let addC = () => {
      addComment(this.state.id, this.state.comment)
      this.setState({comment: ''})
    }
    return (
      <div>
        <input onChange={this.onChange} value={this.state.comment}/>
        <button onClick={addC}>add</button>
      </div>
    )
  }
}

export default CommentForm