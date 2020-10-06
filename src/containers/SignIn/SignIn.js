import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const SignIn = (props) => {

  const setLoaderVisibility = (isLoaderVisible) => { props.setLoaderVisibility(isLoaderVisible) };

  return (
    <div className="container">
      <LoginForm sendRequest={() => setLoaderVisibility(true)} receiveRequest={() => setLoaderVisibility(false)} />
    </div>
  )
}

export default SignIn;
