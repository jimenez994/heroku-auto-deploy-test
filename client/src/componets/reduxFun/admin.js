import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getUsers} from '../../actions/adminActions';
import Item from './item'

class Admin extends Component {

  componentDidMount() {
    this.props.getUsers()
  }
  render () {
    let {users} = this.props.user;
    let content;
    if(users === []){
      content = (<h2>Loading ...</h2>)
    }else{ 
      content = (
      <div>
        {users.map(user => (<Item key={user._id} user={user}/>))}
      </div>
    )}
    return (
      <div>
        <h3>Admin Page</h3>
        {content}
      </div>
    )
  }
}
Admin.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {getUsers})(Admin)