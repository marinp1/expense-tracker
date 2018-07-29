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

enum GROUPING_STYLE {
  BY_DATE = 'BY_DATE',
  BY_MONTH = 'BY_MONTH',
}

/* tslint:disable no-console forin */
function groupTransactions(transactions: Transaction[], groupingStyle: GROUPING_STYLE) {
  
  const dateMapped = transactions.map(t => ({
    ...t,
    formattedByMonth: t.datetime.format('YYYY [>] MMMM'),
    formattedByDay: t.datetime.format('dddd Do'),
  }));

  const val = groupingStyle === GROUPING_STYLE.BY_DATE ?
    'formattedByDay' : 'formattedByMonth';

  const sorted = _.sortBy(dateMapped, val).reverse();
  const grouped = _.groupBy(sorted, val);

  const returnable = [];
  for (const key in grouped) {
    returnable.push(grouped[key]);
  }

  return returnable;
}

export const TransactionViewComponent: React.SFC<TransactionViewProps> = (props) => {

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
        {groupTransactions(props.transactions, GROUPING_STYLE.BY_MONTH).map((trs) => {
          const monthTitle = trs[0].formattedByMonth;
          return (
            <React.Fragment key={monthTitle}>
              <MonthTitle>{monthTitle}</MonthTitle>
              <React.Fragment>
                {groupTransactions(trs, GROUPING_STYLE.BY_DATE).map((trs2) => {
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