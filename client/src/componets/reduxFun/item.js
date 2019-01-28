import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {deleteUser} from '../../actions/adminActions';
import {connect} from 'react-redux'

class Item extends Component {
  deleteUser(id) {
    this.props.deleteUser(id)
  }
  render () {
    let {user} = this.props
    return (
      <div>
        <h5>_id: {user._id}</h5>
        <h4>name: {user.firstName} {user.lastName}</h4>
        <h6>email: {user.email}</h6>
        <button onClick={this.deleteUser.bind(this,user._id)}>Delete User</button>
        <br/>
      </div>
    )
  }
}

Item.propsTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
}

// when connecting to redux if there is nothing that i need i must put null
export default connect(null,{deleteUser})(Item)