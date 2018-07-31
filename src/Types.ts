import { State as TransactionState } from './App/TransactionView/transactionViewReducer';
import { State as AuthState } from './Auth/authReducer';

export enum APP_STATE {
  SIGN_IN = 'SIGN_IN',
  SIGNED_IN = 'SIGNED_IN',
}

/* tslint:disable:interface-name object-literal-sort-keys  */
export interface CombinedState {
  auth: AuthState,
  transactionView: TransactionState,
}