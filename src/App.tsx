import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS, HEADER_HEIGHT } from './styles';

import TransactionView from './app/TransactionView';
import Header from './Header';

const Background = styled.div`
  background: ${COLORS.lightBlue};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const AppContainer = styled.div`
  background: ${COLORS.white}
  width: 100%;
  margin-top: ${HEADER_HEIGHT};
  max-width: 1024px;
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
