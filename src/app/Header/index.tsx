import * as React from 'react';
import styled from 'styled-components';
import { COLORS, HEADER_HEIGHT } from '../../styles';

const HeaderContainer = styled.div`
  background: ${COLORS.darkBlue};
  box-shadow: 0px 4px 20px 4px rgba(0,0,0,0.1);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  height: ${HEADER_HEIGHT};
`;

const LeftPart = styled.div`
  p {
    color: white;
  }
`;

const RightPart = styled.div`
  p {
    color: white;
  }
`;

const Header: React.SFC<{}> = () => (
  <HeaderContainer>
    <LeftPart>
      <p>BUDGHETTO</p>
    </LeftPart>
    <RightPart>
      <p>Hello, Patrik Marin</p>
    </RightPart>
  </HeaderContainer>
)

export default Header;