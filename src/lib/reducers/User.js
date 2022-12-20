import { USER_LOADING, USER_LOADED, USER_REMOVE, USER_UPDATED, USER_ERROR } from '../types';
import initialData from '../services/token';

const initialState = {
  loading: false,
  authorized: false,
  data: {},
  ...initialData(),
};

const User = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        authorized: true,
        data: { ...state.data, ...payload },
      };
    case USER_UPDATED:
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...payload },
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    case USER_REMOVE:
      return { ...initialState, authorized: false };
    default:
      return state;
  }
};

export default User;