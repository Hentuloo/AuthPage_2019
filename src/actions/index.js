import axios from 'axios';
import history from 'config/history';
import Constants from 'config/Constants';

axios.defaults.baseURL = 'https://nodetraning.herokuapp.com';
axios.defaults.headers.common = {
  Authorization: `bearer ${localStorage.getItem('jsonWebToken')}`,
};
axios.interceptors.response.use(null, error => {
  const { status, config } = error.response;
  if (status === 401) {
    if (config.data) {
      // if is request from login or reqister page

      const reqData = JSON.parse(config.data);
      const { email, password } = reqData;

      if (email && password) return Promise.reject(error);
    }
    localStorage.removeItem('jsonWebToken');
    history.push(Constants.PATHS.login);
  }
  return Promise.reject(error);
});

export * from './errorActions';
export * from './authActions';
export * from './dataActions';
