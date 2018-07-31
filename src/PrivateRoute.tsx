import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { APP_STATE, CombinedState } from './Types';

interface IProps {
  appState: APP_STATE,
  redirect: string;
  stateRequired: APP_STATE;
}

/* tslint:disable:jsx-no-lambda no-console  */
const PrivateRoute: React.SFC<IProps & RouteProps> = ({ appState, stateRequired, redirect, ...rest }) => {
  const Component = rest.component as React.ComponentClass;
  rest.component = undefined;
  console.log(rest);
  return (
    <Route {...rest} render={props => (
      appState === stateRequired
              ? <Component {...props} />
              : <Redirect to={{ pathname: redirect, state: { from: props.location } }} />
      )} />
  );
};

const mapStateToProps = (state: CombinedState) => ({
  appState: state.auth.authState,
});

export default connect(mapStateToProps)(PrivateRoute);