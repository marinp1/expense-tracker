import { Transaction  } from './TransactionViewTypes';

export enum TypeKeys {
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  REMOVE_TRANSACTION = 'REMOVE_TRANSACTION',
  OTHER_ACTION = '__any_other_action_type__',
}

/* tslint:disable:interface-name object-literal-sort-keys  */
interface AddTransaction {
  type: TypeKeys.ADD_TRANSACTION;
  transaction: Transaction;
}

interface RemoveTransaction {
  type: TypeKeys.REMOVE_TRANSACTION;
  uuid: string;
}

// https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/
interface OtherAction {
  type: TypeKeys.OTHER_ACTION;
}

export type ActionTypes = 
  | AddTransaction 
  | RemoveTransaction 
  | OtherAction;

export const addTransaction = (transaction: Transaction) => (dispatch: any) => {
  const action: AddTransaction = {
    type: TypeKeys.ADD_TRANSACTION,
    transaction,
  }
  dispatch(action);
}

export const removeTransaction = (uuid: string) => (dispatch: any) => {
  const action: RemoveTransaction = {
    type: TypeKeys.REMOVE_TRANSACTION,
    uuid,
  }
  dispatch(action);
}