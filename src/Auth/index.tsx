import * as React from 'react';

import Button, { BUTTON_THEME } from '../Util/Button';
import DropboxIcon from '../Util/DropboxIcon';

import {
  Box,
  Container,
  Header,
} from './StyledComponents';

const Login: React.SFC<{}> = () => (
  <Container>
    <Box>
      <Header>ExpenseTracker</Header>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Connect to Dropbox in order to get started</p>
      <Button theme={BUTTON_THEME.INVERSE}>
        Connect to dropbox
        <DropboxIcon/>
      </Button>
    </Box>
  </Container>
);

export default Login;