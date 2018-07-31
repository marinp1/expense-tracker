import * as React from 'react';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, HEADER_HEIGHT } from '../styles';
import { APP_STATE } from '../Types';

import Header from '../App/Header';
import Login from '../Auth';
import PrivateRoute from '../PrivateRoute';
import TransactionView from './TransactionView';

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

const AppComponent = () => (
  <React.Fragment>
    <Header />
    <AppContainer>
      <Switch>
        <PrivateRoute stateRequired={APP_STATE.SIGNED_IN} redirect='/login' exact={true} path='/' component={ TransactionView }/>
      </Switch>
    </AppContainer>
  </React.Fragment>
)

const App: React.SFC<{}> = () => (
  <Background>
    <Switch>
      <PrivateRoute stateRequired={APP_STATE.SIGN_IN} redirect='/' path='/login' component={ Login }/>
      <AppComponent/>
    </Switch>
  </Background>
);

export default App;
