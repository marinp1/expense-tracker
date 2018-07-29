import * as Actions from './TransactionViewActions';
import { Transaction } from './TransactionViewTypes';

/* tslint:disable:interface-name object-literal-sort-keys  */
export interface State {
  transactions: Transaction[],
}

const initialState: State = {
  transactions: [],
}

function transactionViewReducer(state: State = initialState, action: Actions.ActionTypes) {
  switch (action.type) {
    case Actions.TypeKeys.ADD_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.concat(action.transaction),
      }
    case Actions.TypeKeys.REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(_ => _.uuid !== action.uuid),
      }
    default:
      return state;
  }
}

export default transactionViewReducer;