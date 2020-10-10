import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../utils/api';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    signUp(username, email, password).then(res => console.log(res)).catch(err => setErrorMessage(err.response.data.message));
  }

  const handleChangeEmail = (value) => {
    if (errorMessage) setErrorMessage('')
    setEmail(value);
  }

  const handleChangePassword = (value) => {
    if (errorMessage) setErrorMessage('')
    setPassword(value);
  }

  const handleChangeUsername = (value) => {
    if (errorMessage) setErrorMessage('')
    setUsername(value);
  }


  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Metti qui l'email" required onChange={ev => handleChangeEmail(ev.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Metti qui l'username" required onChange={ev => handleChangeUsername(ev.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Metti qui la password" required onChange={ev => handleChangePassword(ev.target.value)} />
      </div>
      {errorMessage &&
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      }
      <button type="submit" className="btn btn-primary">Registrati</button>
      <Link to="/signin">Hai già un accout? Vai al login!</Link>
    </form>
  )
}

export default SignUpForm;
