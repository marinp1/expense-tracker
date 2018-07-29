import * as _ from 'lodash';
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

const Container = styled.div`
  margin-top: 0.5rem;
`;

const TransactionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  @media (min-width: ${BREAKPOINTS.tablet}) and (max-width: ${BREAKPOINTS.tabletMax}) {
    >div:nth-child(2n + 2) {
      margin-left: 0.5rem;
    }
    >div:nth-child(2n + 1) {
      margin-right: 0.5rem;
    }
  }
  @media (min-width: ${BREAKPOINTS.desktop}) {
    >div:nth-child(3n + 2) {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
`;

const MonthTitle = styled.p`
  margin-top: 1rem;
  font-weight: bold;
`;

const DayTitle = styled.p`
  margin-top: 0.5rem;
  font-weight: light;
`;

/* tslint:disable no-console forin */
export const TransactionViewComponent: React.SFC<TransactionViewProps> = (props) => {

  function groupTransactionsByMonth() {
    const dateMapped = props.transactions.map(t => ({
      ...t,
      formattedByMonth: t.datetime.format('YYYY [>] MMMM'),
    }));

    const sorted = _.sortBy(dateMapped, 'formattedByMonth').reverse();
    const groupingByMonth = _.groupBy(sorted, 'formattedByMonth');

    const returnable = [];
    for (const key in groupingByMonth) {
      returnable.push(groupingByMonth[key]);
    }

    return returnable;
  }

  function groupTransactionsByDay(transactions: Transaction[]) {
    const dateMapped = transactions.map(t => ({
      ...t,
      formattedByDay: t.datetime.format('dddd Do'),
    }));

    const sorted = _.sortBy(dateMapped, 'formattedByDay').reverse();
    const groupingByDay = _.groupBy(sorted, 'formattedByDay');

    const returnable = [];
    for (const key in groupingByDay) {
      returnable.push(groupingByDay[key]);
    }

    return returnable;
  }

  function addNewTransaction() {

    let dt = moment();
    if (Math.random() > 0.6) {
      dt = dt.subtract(8640000000)
    } else if (Math.random() > 0.3) {
      dt = dt.subtract(86400000)
    }

    const tr: Transaction = {
      uuid: uuid.v4(),
      type: TRANSACTION_TYPE.EXPENSE,
      bankName: 'Osuuspankki',
      accountName: 'Käyttötili',
      datetime: dt,
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
      <Container>
        {groupTransactionsByMonth().map((trs) => {
          const monthTitle = trs[0].formattedByMonth;
          return (
            <React.Fragment key={monthTitle}>
              <MonthTitle>{monthTitle}</MonthTitle>
              <React.Fragment>
                {groupTransactionsByDay(trs).map((trs2) => {
                  const dayTitle = trs2[0].formattedByDay;
                  return (
                    <React.Fragment key={dayTitle}>
                      <DayTitle>{dayTitle}</DayTitle>
                      <TransactionContainer key={dayTitle}>
                        {trs2.map(t => (
                          <TransactionComponent {...t}/>
                        ))}
                      </TransactionContainer>
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            </React.Fragment>
          );
        })}
      </Container>
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