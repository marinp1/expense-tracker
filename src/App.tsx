import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, HEADER_HEIGHT } from './styles';

import TransactionView from './app/TransactionView';
import Header from './Header';

const Background = styled.div`
  background: ${COLORS.lightBlue};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const AppContainer = styled.div`
  background: ${COLORS.white};
  box-shadow: 0px 4px 20px 15px rgba(0,0,0,0.1);
  width: 100%;
  margin-top: ${HEADER_HEIGHT};
  max-width: ${BREAKPOINTS.desktop};
  padding: 2rem;
`;

const App: React.SFC<{}> = () => (
  <Background>
    <Header />
    <AppContainer>
      <Switch>
        <Route path='/' component={ TransactionView }/>
      </Switch>
    </AppContainer>
  </Background>
);

export default App;
