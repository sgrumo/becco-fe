import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { joinMatch } from '../../utils/api';

const PasswordMatchModal = (props) => {

  const match = props.match;

  const [password, setPassword] = useState('');
  const [gameID, setGameID] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    join();
  }

  const join = () => {
    setErrorMessage('');
    joinMatch(match.id, password).then(() => setGameID(match.id)).catch(err => setErrorMessage(err.response.data.message));
  }


  const handleChangePassword = (value) => {
    if (errorMessage) setErrorMessage('')
    setPassword(value);
  }

  return (
    <div className="modal fade" id="passwordMatchModal" tabIndex="-1" role="dialog" aria-labelledby="ModalTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalTitle">Joina la partita!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {match.visibility === 'private' && <form onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Metti qui la password" required onChange={ev => handleChangePassword(ev.target.value)} />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Entra!</button>
              </div>
            </form>}

            {errorMessage &&
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            }

            {match.visibility === 'public' &&
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={() => join()}>Entra!</button>
              </div>
            }

          </div>
        </div>
      </div>
      {gameID && <Redirect to={`/game/${gameID}`} />}
    </div>
  )
};

export default PasswordMatchModal;
