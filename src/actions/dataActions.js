import axios from 'axios';

export const dataConstants = {
  REQUEST: 'REQUEST',
  DATA_SUCCESS: 'DATA_SUCCESS',
  DATA_FAILURE: 'DATA_FAILURE',
};

export const getBasicInformation = () => dispatch => {
  dispatch({
    type: dataConstants.REQUEST,
  });
  axios
    .get('/data/basic')
    .then(res => {
      dispatch({
        type: dataConstants.DATA_SUCCESS,
        payload: { ...res.data },
      });
    })
    .catch(() => {
      dispatch({
        type: dataConstants.DATA_FAILURE,
      });
    });
};
