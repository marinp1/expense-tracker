import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as uuid from 'uuid';
import { BREAKPOINTS } from '../../styles';
import { CombinedState } from '../Types';
import TransactionComponent from './TransactionComponent';
import {
  addTransaction,
  removeTransaction,
} from './TransactionViewActions';
import { Transaction, TRANSACTION_TYPE } from './TransactionViewTypes';

/* tslint:disable:interface-name object-literal-sort-keys  */
interface TransactionViewProps {
  transactions: Transaction[],
  addTransaction: (transaction: Transaction) => void;
}

const TransactionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  @media (min-width: ${BREAKPOINTS.mobile}) and (max-width: ${BREAKPOINTS.mobileMax}) {
    div:nth-child(2n + 2) {
      margin-left: 0.5rem;
    }
    div:nth-child(2n + 1) {
      margin-right: 0.5rem;
    }
  }
  @media (min-width: ${BREAKPOINTS.tablet}) {
    div:nth-child(3n + 2) {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
`;

export const TransactionViewComponent: React.SFC<TransactionViewProps> = (props) => {

  function addNewTransaction() {
    const tr: Transaction = {
      uuid: uuid.v4(),
      type: TRANSACTION_TYPE.EXPENSE,
      datetime: moment(),
      stakeholder: 'A company',
      category: {
        name: 'Ruoka',
        icon: 'fa-stroopwafel',
      },
      message: 'Kauppareissu',
      amount: 100,
    }
    props.addTransaction(tr);
  }

  return (
    <React.Fragment>
      <button onClick={addNewTransaction}>New transaction</button>
      <TransactionContainer>
        {props.transactions.map(_ => (
          <TransactionComponent {..._}/>
        ))}
      </TransactionContainer>
    </React.Fragment>
  );
}

const mapStateToProps = (state: CombinedState) => ({
  transactions: state.transactionView.transactions,
});

export default connect(mapStateToProps, {
  addTransaction,
  removeTransaction,
})(TransactionViewComponent);