import * as React from 'react';
import styled from 'styled-components';
import { COLORS, HEADER_HEIGHT } from '../styles';

const HeaderContainer = styled.div`
  background: ${COLORS.darkBlue}
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