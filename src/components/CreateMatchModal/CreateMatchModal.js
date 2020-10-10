import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createMatch } from '../../utils/api';

const CreateMatchModal = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState('public');
  const [gameID, setGameID] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    createMatch(name, visibility, password).then(res => setGameID(res.data.id)).catch(err => setErrorMessage(err.response.data.message));
  }

  const handleChangeEmail = (value) => {
    if (errorMessage) setErrorMessage('')
    setName(value);
  }

  const handleChangePassword = (value) => {
    if (errorMessage) setErrorMessage('')
    setPassword(value);
  }

  const handleChangeVisibility = (value) => {
    if (errorMessage) setErrorMessage('')
    setVisibility(value);
  }

  return (
    <div className="modal fade" id="createMatchModal" tabIndex="-1" role="dialog" aria-labelledby="ModalTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalTitle">Crea una partita</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="name">Nome della partita</label>
                <input type="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Metti qui il nome della partita" required onChange={ev => handleChangeEmail(ev.target.value)} />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="visibility-public" value="public" checked={visibility === 'public'} onChange={ev => handleChangeVisibility(ev.target.value)} />
                  <label className="form-check-label" htmlFor="visibility-public">
                    Pubblica
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="visibility-private" value="private" checked={visibility === 'private'} onChange={ev => handleChangeVisibility(ev.target.value)} />
                  <label className="form-check-label" htmlFor="visibility-private">
                    Privata
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Metti qui la password" disabled={visibility === 'public'} required={visibility === 'private'} onChange={ev => handleChangePassword(ev.target.value)} />
              </div>
              {errorMessage &&
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              }
              <button type="submit" className="btn btn-primary">Crea!</button>
            </form>
          </div>
        </div>
      </div>
      {gameID && <Redirect to={`/game/${gameID}`} />}
    </div>
  )
};

export default CreateMatchModal;
