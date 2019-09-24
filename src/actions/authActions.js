import axios from 'axios';
import history from 'config/history';
import Constants from 'config/Constants';

export const authConstants = {
  REQUEST: 'REQUEST',
  NEW_ACCOUNT: 'NEW_ACCOUNT',

  AUTHENTICATE_SUCCESS: 'AUTHENTICATE_SUCCESS',
  AUTHENTICATE_FAILURE: 'AUTHENTICATE_FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

export const newAccount = (
  firstName,
  lastName,
  email,
  password,
) => dispatch => {
  dispatch({
    type: authConstants.REQUEST,
  });
  return axios
    .post('/auth/register', {
      email,
      password,
      firstName,
      lastName,
    })
    .then(payload => {
      dispatch({
        type: authConstants.AUTHENTICATE_SUCCESS,
        payload,
      });

      history.push(Constants.PATHS.login);
    })
    .catch(err => {
      const { errorType, name } = err.response.data;
      const error = errorType || name;

      dispatch({
        type: authConstants.AUTHENTICATE_FAILURE,
        payload: { errorType: error, field: 'general' },
      });
    });
};
export const login = (email, password) => dispatch => {
  dispatch({
    type: authConstants.REQUEST,
  });

  return axios
    .post('/auth/login', {
      email,
      password,
    })
    .then(res => {
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
      });
      const { token } = res.data;
      localStorage.setItem('jsonWebToken', token);
      history.push(Constants.PATHS.root);
    })
    .catch(err => {
      const respnse = err.response.data;
      let errorType = err.response.data;

      if (respnse === 'Bad Request') errorType = 'dataWrong';
      if (respnse === 'Unauthorized') errorType = 'loginFailure';
      return dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { errorType, field: 'general' },
      });
    });
};
export const logout = () => dispatch => {
  localStorage.removeItem('jsonWebToken');
  dispatch({
    type: authConstants.LOGOUT,
  });
  history.push(Constants.PATHS.login);
};
