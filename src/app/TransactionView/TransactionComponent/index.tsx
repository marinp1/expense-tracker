// import * as moment from 'moment';
import * as React from 'react';
import { Transaction } from '../TransactionViewTypes';

import { amountToReadable } from '../../../utils';

import {
  AccountName,
  BoldText,
  CategoryContainer,
  Container,
  LighterText,
  LowerPane,
  MessageContainer,
  NormalText,
  UpperPane,
} from './StyledComponents';

export const TransactionComponent: React.SFC<Transaction> = (props) => {
  return (
    <Container>
        <UpperPane>
          <div>
            <i className="far fa-credit-card"/>
            <AccountName>{props.accountName}</AccountName>
            <LighterText>{props.bankName}</LighterText>
          </div>
          <BoldText>{amountToReadable(props.amount)}</BoldText>
        </UpperPane>
        <LowerPane>
          <div>
            <i className="fas fa-store-alt"/>
            <NormalText>{props.stakeholder}</NormalText>
          </div>
          <div>
          <i className="fas fa-tag"/>
            <CategoryContainer>{props.category.name}</CategoryContainer>
            <MessageContainer>{props.message}</MessageContainer>
          </div>
        </LowerPane>
    </Container>
  );
}

export default TransactionComponent;