import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import TransactionView from './app/TransactionView';

const App: React.SFC<{}> = () => (
  <Switch>
    <Route path='/' component={ TransactionView }/>
  </Switch>
);

export default App;
