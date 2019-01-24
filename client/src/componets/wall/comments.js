import React, { Component } from 'react'

class Comments extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render () {
    let {comments} = this.props     
    return (
      <div style={{maxHeight:'200px',minHeight:'1px',overflow: 'auto'}}>
        {comments.map(comment => (<p key={comment._id}>{comment.comment}</p>))}

        {/* auto scroll down magic!! */}
        <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>

      </div>
    )
  }
}

export default Comments