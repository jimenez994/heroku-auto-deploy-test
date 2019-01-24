import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Post from './post'

class Feed extends Component {

  render () {
    const {posts, deletePost, addComment} = this.props
    return posts.map(post => <Post key={post._id} post={post} addComment={addComment}  deletePost={deletePost}/>)
  }
}
Feed.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Feed