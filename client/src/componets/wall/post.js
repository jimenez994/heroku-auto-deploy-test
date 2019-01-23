import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render () {
    let {post, deletePost} = this.props;
    return (
      <div>
        <h4>{post.text}</h4>
        <button onClick={deletePost} value={post._id}>Delete</button>
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post