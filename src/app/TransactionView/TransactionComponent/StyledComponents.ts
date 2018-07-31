import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../../styles';

/* tslint:disable:interface-name object-literal-sort-keys  */
export const Container = styled.div`
  background: ${COLORS.softWhite};
  color: ${COLORS.softBlack};
  box-sizing: border-box;
  box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  padding-left: 1.5rem;
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
    width: 48.5%;
    max-width: 48.5%;
  }
  @media (min-width: ${BREAKPOINTS.desktop}) {
    width: 32.5%;
    max-width: 32.5%;
  }
`;

export const UpperPane = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  i {
    margin-right: 0.5rem;
  }
  p {
    display: inline-block;
  }
`

export const AccountName = styled.p`
  font-weight: normal;
  margin-right: 0.5rem;
`;

export const NormalText = styled.p`
  font-weight: normal;
`;

export const BoldText = styled.p`
  font-weight: bolder;
`;

export const LighterText = styled.p`
  font-weight: lighter;
`;

export const LowerPane = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    margin-right: 0.5rem;
  }
  p {
    display: inline-block;
  }
`;

export const CategoryContainer = styled.p`
  font-weight: bolder;
`;

export const MessageContainer = styled.p`
  font-weight: lighter;
  margin-left: 0.5rem;
`;
