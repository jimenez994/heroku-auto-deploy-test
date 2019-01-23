import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Post from './post'

class Feed extends Component {

  render () {
    const {posts, deletePost} = this.props
    return posts.map(post => <Post key={post._id} post={post}  deletePost={deletePost}/>)
  }
}
Feed.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Feed