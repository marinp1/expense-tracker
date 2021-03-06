import * as _ from 'lodash';
import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import * as uuid from 'uuid';
import { COLORS } from '../../styles';
import { CombinedState } from '../../Types';
import TransactionComponent from './TransactionComponent';
import {
  addTransaction,
  removeTransaction,
} from './TransactionViewActions';
import { Transaction, TRANSACTION_TYPE } from './TransactionViewTypes';

import { amountToReadable } from '../../utils';

import {
  Container,
  DayTitle,
  Description,
  MonthContainer,
  MonthTitle,
  Title,
  TransactionContainer,
} from './StyledComponents';

/* tslint:disable:interface-name object-literal-sort-keys  */
interface TransactionViewProps {
  transactions: Transaction[],
  addTransaction: (transaction: Transaction) => void;
}

enum GROUPING_STYLE {
  BY_DATE = 'BY_DATE',
  BY_MONTH = 'BY_MONTH',
}

/* tslint:disable no-console forin */
function groupTransactions(transactions: Transaction[], groupingStyle: GROUPING_STYLE) {
  
  const dateMapped = transactions.map(t => ({
    ...t,
    formattedByMonth: t.datetime.format('YYYY MMMM'),
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

function getMonthCalculations(transactions: Transaction[]) {
  const expenses = transactions.filter(t => t.amount < 0).map(t => t.amount).reduce((a: number, b: number) => a + b, 0);
  const income = transactions.filter(t => t.amount > 0).map(t => t.amount).reduce((a: number, b: number) => a + b, 0);
  const difference = income + expenses;
  return {
    income: amountToReadable(income),
    expenses: amountToReadable(expenses),
    difference: amountToReadable(difference),
    differenceValue: difference,
  }
}

const ColoredIconText: React.SFC<{icon: string, color: string, content: string}> = ({icon, color, content}) => (
  <React.Fragment>
      <span className={icon} style={{ marginLeft: '0.5rem', color }}/>
      <span style={{ color }}>{content}</span>
  </React.Fragment>
);

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
      amount: 2225,
    }
    props.addTransaction(tr);
  }

  const groupedByMonth = groupTransactions(props.transactions, GROUPING_STYLE.BY_MONTH);

  return (
    <React.Fragment>
      <button onClick={addNewTransaction}>New transaction</button>
      <Container>
        <Title>Transactions</Title>
        <Description>
          Displaying {props.transactions.length} / {props.transactions.length} transactions
        </Description>
        {groupedByMonth.map((trs) => {
          let monthTitle = trs[0].formattedByMonth;

          if (trs[0] !== groupedByMonth[0][0] && trs[0].datetime.month() !== 1) {
            monthTitle = monthTitle.split(' ')[1];
          }

          const calculations = getMonthCalculations(trs);
          const diffColor = calculations.differenceValue > 0 ? COLORS.lightBlue : COLORS.red;

          return (
            <React.Fragment key={monthTitle}>
              <MonthContainer>
                <MonthTitle>{monthTitle}</MonthTitle>
                <div>
                  <p>
                    <ColoredIconText icon="fas fa-exchange-alt" color={diffColor} content={String(calculations.difference)}/>
                    (
                      <ColoredIconText icon="fas fa-arrow-alt-circle-up" color={COLORS.lightBlue} content={String(calculations.income)}/>
                      <ColoredIconText icon="fas fa-arrow-alt-circle-down" color={COLORS.red} content={String(calculations.expenses)}/>
                    )
                  </p>
                </div>
              </MonthContainer>
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