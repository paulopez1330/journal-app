import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginSreen = () => {
  
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    email: 'lopezpaulo89@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {    
    e.preventDefault();
    
    if(isFormValid()) {
      dispatch(
        startLoginEmailPassword( email, password )
      );
    }  
  }
  
  const handleGoogleLogin = (e) => {    
    e.preventDefault();
    dispatch( startGoogleLogin() );
  }

  const isFormValid= () => {

    if ( !validator.isEmail( email )) {

      dispatch( setError( 'Email is not valid' ));
      return false;

    } else if (password.length < 5 ) {
      
      dispatch( setError( 'Password should be at least 6 characters and match' ));
      return false;
    }
    
    dispatch(removeError());
    return true;
  }  

  return (
    <>
      <h3 className="auth__title">Login</h3>
      
      <form onSubmit={ handleLogin }>

        {
          msgError &&
          (
            <div className='auth__alert-error'>
              { msgError }
            </div>
          )
        }

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />

        <input
          type="Pawword"
          placeholder="password"
          name="password"
          className="auth__input"
          autoComplete="off"
          value={ password }
          onChange={ handleInputChange }
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={ loading }
        >
          Login
        </button>

        <hr />
      
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          
          <div 
            className="google-btn"
            onClick={ handleGoogleLogin }
          >            
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
          </div>

        </div>

        <Link
          to="/auth/register"
          className="link"
        >
          Create new account
        </Link>

      </form>
    </>
  )
}