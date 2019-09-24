import { dataConstants } from 'actions';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
};

const Auth = (
  state = { ...initialState, requestLoad: false },
  action,
) => {
  switch (action.type) {
    case dataConstants.REQUEST:
      return { ...state, requestLoad: true };
    case dataConstants.DATA_SUCCESS:
      return { ...state, requestLoad: false, ...action.payload };
    case dataConstants.DATA_FAILURE:
      return { ...state, requestLoad: false };
    default:
      return state;
  }
};
export default Auth;
