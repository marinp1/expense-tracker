import * as React from 'react';
import styled from 'styled-components';
import { COLORS, HEADER_HEIGHT } from '../styles';

const HeaderContainer = styled.div`
  background: ${COLORS.darkBlue};
  box-shadow: 0px 4px 20px 4px rgba(0,0,0,0.1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT};
`;

const Header: React.SFC<{}> = () => (
  <HeaderContainer>
    <p>Hello</p>
  </HeaderContainer>
)

export default Header;