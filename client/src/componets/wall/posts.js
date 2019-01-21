import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { FacebookProvider, LoginButton } from 'react-facebook';

export default class posts extends Component {
    // google login response
    responseGoogle = (response) => {
        console.log(response);
    }
    // facebook login responce 
    handleResponse = (data) => {
        console.log(data);
      }
     
      handleError = (error) => {
        this.setState({ error });
      }

  render() {
    return (
      <div>
         <GoogleLogin
            clientId="185642988994-vhduti3pdd54oa4hara1vvqd7v1vdtr3.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
        />
        <FacebookProvider appId="299249414279206">
        <LoginButton
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>

      </div>
    )
  }
}
