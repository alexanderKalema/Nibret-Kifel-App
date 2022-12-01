/* eslint-disable quotes */

const auth = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'LOGIN_SUCCESSFUL':
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };
    case 'ADD_LOADING':
      return {
        ...state,
        loading: true,
        submitted:false,
      };

    case 'ADD_SUCCESSFUL':
      return {
        ...state,
        loading: false,
        data: payload,
        submitted: true,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case 'ADD_FAILED':
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case 'CLEAR_STATE':
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
        submitted:false,

      };

    default:
      return state;
  }};
  export default auth;