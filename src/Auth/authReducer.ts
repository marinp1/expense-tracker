import { APP_STATE } from '../Types';
import * as Actions from './AuthActions';

/* tslint:disable:interface-name object-literal-sort-keys  */
export interface State {
  authState: APP_STATE;
  userName?: string;
}

const initialState: State = {
  authState: APP_STATE.SIGN_IN,
  userName: undefined,
}

function transactionViewReducer(state: State = initialState, action: Actions.ActionTypes) {
  switch (action.type) {
    case Actions.TypeKeys.CHANGE_APP_STATE:
      return {
        ...state,
        authState: action.authState,
      }
    default:
      return state;
  }
}

export default transactionViewReducer;