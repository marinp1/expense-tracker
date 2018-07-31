import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../../styles';

/* tslint:disable:interface-name object-literal-sort-keys  */

export const Container = styled.div`
  margin-top: 0.5rem;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
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

export const MonthContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${COLORS.lightGray};
  span {
    margin-right: 0.3rem;
  }
`;

export const MonthTitle = styled.h3`
  font-weight: light;
`;

export const DayTitle = styled.p`
  color: ${COLORS.darkGray};
  margin-top: 0.5rem;
  font-weight: light;
`;

export const Title = styled.h1`
  color: ${COLORS.softBlack};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: ${COLORS.darkGray};
  font-size: 90%;
  margin-bottom: 1.5rem;
`;
