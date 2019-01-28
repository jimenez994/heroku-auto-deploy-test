import { DELETE_USER, GET_USERS } from "./Types";
import Axios from "axios";

// Get Users 
export const getUsers = () => dispatch => {
  Axios.get(`api/allUsers`)
    .then(res => 
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

export const deleteUser = id => dispatch => {
  Axios.post('api/user/delete', {_id: id})
    .then(res => 
      dispatch({
        type: DELETE_USER,
        payload: id
      })
    )
    .catch(err => console.log(err))
}