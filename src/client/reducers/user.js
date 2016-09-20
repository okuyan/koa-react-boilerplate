import * as types from '../actions/types';

const initialState = {
  isRegistered: false,
};

export default function(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_REGISTRATION:
      return { isRegistered: false };
    default:
      return state;
  }
}
