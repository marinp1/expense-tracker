import * as React from 'react';
import { connect } from 'react-redux';
import { CombinedState } from '../Types';
import {
  addTransaction,
  removeTransaction,
} from './TransactionViewActions';
import { Transaction } from './TransactionViewTypes';

/* tslint:disable:interface-name object-literal-sort-keys  */
interface TransactionViewProps {
  transactions: Transaction[],
  addTransaction: (transaction: Transaction) => void;
}

export const TransactionViewComponent: React.SFC<TransactionViewProps> = (props) => {

  function addNewTransaction() {
    const tr: Transaction = {
      amount: 100,
      uuid: 'adas',
    }
    props.addTransaction(tr);
  }

  return (
    <div onClick={ addNewTransaction } >
      <p>Hello {props.transactions.length}</p>
    </div>
  );
}

const mapStateToProps = (state: CombinedState) => ({
  transactions: state.transactionView.transactions,
});

export default connect(mapStateToProps, {
  addTransaction,
  removeTransaction,
})(TransactionViewComponent);