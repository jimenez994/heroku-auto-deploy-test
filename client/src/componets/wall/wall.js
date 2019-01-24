import React, { Component } from 'react';
import Axios from 'axios';
import Feed from './feed'

export default class Wall extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      postText: ''
    }
  }
  componentDidMount(){
    Axios.get(`/api/post/all`)
      .then(result => this.setState({posts: result.data}))
      .catch(err => console.log(err)
      )
  }
  onChange = (e) => {
    this.setState({postText: e.target.value})    
  }
  addPost = () => {
    Axios.post(`/api/post/create`, {text: this.state.postText})
      .then(post => this.setState(prevState => ({ posts: [post.data, ...prevState.posts], postText: '' })))
      .catch(err => console.log(err))
      
  }
  deletePost = (e) => {
    let id = e.target.value;
    let updatedPosts = this.state.posts.filter(post => post._id !== id)
    Axios.delete(`/api/post/delete/${id}`)
      .then(res => this.setState({posts: updatedPosts}))
      .catch(err => console.log(err))
  } 
  addComment = (postId, comment) => {
    console.log(postId);
    console.log(comment);
  }
  render() {
    let postsContent;
    if(this.state.posts != null){
      postsContent = <Feed posts={this.state.posts} addComment={this.addComment} deletePost={this.deletePost}/>
    }
    return (
      <div>
        <input type='text' onChange={this.onChange} value={this.state.postText}/>
        <button onClick={this.addPost}>Post</button>
        {postsContent}
      </div>
    )
  }
}
