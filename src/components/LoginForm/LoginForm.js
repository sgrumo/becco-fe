import React from 'react';

const LoginForm = () => {

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" required />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}

export default LoginForm;
