import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './commentForm';
import Axios from 'axios';
import Comments from './comments'
class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: false,
      comments: this.props.post._comments
    }
  }
  showCF = () => {
    (this.state.form === true) ? this.setState({form: false}): this.setState({form:true})
  }
  addComment = (id, comment) => {
    Axios.post(`/api/comment/create`, {comment:comment, _post: id})
      .then(res => this.setState(prevState => ({comments: [...prevState.comments, res.data]})))
      .catch(err => console.log(err))
  }
  render () {
    let {post, deletePost} = this.props;
    let content;
    if(this.state.form === true) {
      content = (
        <div>
          <Comments comments={this.state.comments}/>
          <CommentForm postId={post._id} addComment={this.addComment}/>
        </div>
        )
    } 
    
    return (
      <div>
        <h4>{post.text}</h4>
        <button onClick={deletePost} value={post._id}>Delete</button>
        <button onClick={this.showCF}>Comment</button>
        {content}
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default Post