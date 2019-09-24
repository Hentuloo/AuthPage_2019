import { authConstants } from 'actions/authActions';
import { errorConstants } from 'actions/errorActions';

const initialErrors = {
  generalError: null,
  firstNameError: null,
  lastNameError: null,
  emailError: null,
  passwordError: null,
};
const initialState = {
  requestLoad: false,
  ...initialErrors,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.REQUEST:
      return { ...state, requestLoad: true };
    case errorConstants.ERROR_STATEMENT_RESET:
    case authConstants.AUTHENTICATE_SUCCESS:
    case authConstants.LOGIN_SUCCESS:
      return { ...state, requestLoad: false, ...initialErrors };
    case errorConstants.ERROR_STATEMENT_SET:
    case authConstants.LOGIN_FAILURE:
    case authConstants.AUTHENTICATE_FAILURE:
      return {
        ...state,
        ...initialErrors,
        [`${action.payload.field}Error`]: action.payload.errorType,
        requestLoad: false,
      };
    case authConstants.LOGOUT:
      return { ...state, requestLoad: false, ...initialErrors };

    default:
      return state;
  }
};

export default Auth;
