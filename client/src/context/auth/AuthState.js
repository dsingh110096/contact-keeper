import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESSS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  //here state will allow us access any state in the state.
  //dispatch will allow us disptach any object to the reducer that is contactReducer.

  //Load User

  //Register User
  const register = async (formdata) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/users', formdata, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
        //that is token here after register
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };
  //Login User

  //Logout

  //Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        register,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
