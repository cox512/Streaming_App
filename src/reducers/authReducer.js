import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

//We set the default value of state in the const above and then pass that into the args value
//NOTE:A common error occurs when the spelling of your type (EX. 'SIGN_IN') has a typo.
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };

    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };

    default:
      return state;
  }
};
