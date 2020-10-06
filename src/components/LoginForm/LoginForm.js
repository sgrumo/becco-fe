import React, { useState } from 'react';
import { signIn } from '../../utils/api';
import { Link, Redirect } from 'react-router-dom';

const LoginForm = ({ sendRequest, receiveRequest }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [redirect, setRedirect] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    signIn(email, password).then(res => {
      sessionStorage.setItem('username', res.data.username);
      sessionStorage.setItem('token', res.data.token);
      receiveRequest();
      setRedirect(true);
    }).catch(err => {
      setErrorMessage(err.response.data.message);
      receiveRequest();
    });
    sendRequest();
  }

  const handleChangeEmail = (value) => {
    setErrorMessage('')
    setEmail(value);
  }

  const handleChangePassword = (value) => {
    setErrorMessage('')
    setPassword(value);
  }

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required onChange={ev => handleChangeEmail(ev.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" required onChange={ev => handleChangePassword(ev.target.value)} />
      </div>
      {errorMessage &&
        <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      }
      {redirect && <Redirect to="/game" />}
      <button type="submit" className="btn btn-primary">Login</button>
      <Link to="/signup">Registrati!</Link>
    </form>
  )
}

export default LoginForm;
