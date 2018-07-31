import { APP_STATE } from '../Types';

export enum TypeKeys {
  CHANGE_APP_STATE = 'CHANGE_APP_STATE',
  OTHER_ACTION = '__any_other_action_type__',
}

/* tslint:disable:interface-name object-literal-sort-keys  */
interface ChangeAppState {
  type: TypeKeys.CHANGE_APP_STATE;
  authState: APP_STATE;
}

// https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/
interface OtherAction {
  type: TypeKeys.OTHER_ACTION;
}

export type ActionTypes = 
  | ChangeAppState 
  | OtherAction;

export const changeAppState = (authState: APP_STATE) => (dispatch: any) => {
  const action: ChangeAppState = {
    type: TypeKeys.CHANGE_APP_STATE,
    authState,
  }
  dispatch(action);
}
