import * as ACTIONS from '../Actions';

const initialState = {
  loading: false
};

export default function (state = initialState, { type, payload, error }) {
  switch (type) {
    case ACTIONS.LOGIN_ACTION:
      return { ...state, loading: true };
    case ACTIONS.LOGIN_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.LOGIN_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
}
