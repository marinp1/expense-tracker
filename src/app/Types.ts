import { State as TransactionState } from './TransactionView/transactionViewReducer';

/* tslint:disable:interface-name object-literal-sort-keys  */
export interface CombinedState {
  transactionView: TransactionState,
}