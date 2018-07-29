// import * as moment from 'moment';
import * as React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../../styles';
import { Transaction } from './TransactionViewTypes';

/* tslint:disable:interface-name object-literal-sort-keys  */
const Container = styled.div`
  background: ${COLORS.white};
  box-sizing: border-box;
  box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  padding-left: 1.5rem;
  border: 1px solid ${COLORS.lightGray};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  flex-grow: 1;
  :before {
    content: "";
    position: absolute;
    width: 0.5rem;
    top: 0;
    bottom: 0;
    left: 0;
    background: ${COLORS.red};
  }
  width: 100%;
  max-width: 100%;
  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 48%;
    max-width: 48%;
  }
  @media (min-width: ${BREAKPOINTS.desktop}) {
    width: 32%;
    max-width: 32%;
  }
`;

const UpperPane = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  p {
    display: inline-block;
  }
`

const AccountName = styled.p`
  font-weight: normal;
  margin-right: 0.5rem;
`;

const NormalText = styled.p`
  font-weight: normal;
`;

const BoldText = styled.p`
  font-weight: bolder;
`;

const LighterText = styled.p`
  font-weight: lighter;
`;

const LowerPane = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    display: inline-block;
  }
`;

const CategoryContainer = styled.p`
  font-weight: bolder;
`;

const MessageContainer = styled.p`
  font-weight: lighter;
  margin-left: 0.5rem;
`;

export const TransactionComponent: React.SFC<Transaction> = (props) => {
  return (
    <Container>
        <UpperPane>
          <div>
            <AccountName>{props.accountName}</AccountName>
            <LighterText>{props.bankName}</LighterText>
          </div>
          <BoldText>{props.amount}</BoldText>
        </UpperPane>
        <LowerPane>
          <NormalText>{props.stakeholder}</NormalText>
          <div>
            <CategoryContainer>{props.category.name}</CategoryContainer>
            <MessageContainer>{props.message}</MessageContainer>
          </div>
        </LowerPane>
    </Container>
  );
}

export default TransactionComponent;