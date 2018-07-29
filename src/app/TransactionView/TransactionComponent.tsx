// import * as moment from 'moment';
import * as React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../../styles';
import { Transaction } from './TransactionViewTypes';

/* tslint:disable:interface-name object-literal-sort-keys  */
const Container = styled.div`
  background: ${COLORS.white};
  box-sizing: border-box;
  position: relative;
  padding: 0.5rem;
  padding-left: 1rem;
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
  @media (min-width: ${BREAKPOINTS.mobile}) {
    width: 48%;
    max-width: 48%;
  }
  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 32%;
    max-width: 32%;
  }
`;

export const TransactionComponent: React.SFC<Transaction> = (props) => {
  return (
    <Container>
        {props.uuid}
    </Container>
  );
}

export default TransactionComponent;