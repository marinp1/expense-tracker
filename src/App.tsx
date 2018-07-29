import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from './styles';

import TransactionView from './app/TransactionView';

const Background = styled.div`
  background: ${COLORS.lightBlue};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const AppContainer = styled.div`
  background: ${COLORS.white}
  width: 100%;
  max-width: 1024px;
  padding: 2rem;
`;

const App: React.SFC<{}> = () => (
  <Background>
    <AppContainer>
      <Switch>
        <Route path='/' component={ TransactionView }/>
      </Switch>
    </AppContainer>
  </Background>
);

export default App;
