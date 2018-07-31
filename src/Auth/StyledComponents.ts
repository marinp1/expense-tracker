import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../styles';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @media (min-width: ${BREAKPOINTS.mobile}) {
    align-items: center;
  }
`;


export const Box = styled.div`
  padding: 1.5rem;
  background: ${COLORS.white};
  box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.05);
  width: 100%;
  max-width: ${BREAKPOINTS.tablet};
  @media (min-width: ${BREAKPOINTS.mobile}) {
    border-radius: 0.5rem;
    margin: 1.5rem;
  }
`;

export const Header = styled.h1`
  color: ${COLORS.softBlack}
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  text-align: center;
  border-bottom: 1px solid ${COLORS.lightGray};
`;