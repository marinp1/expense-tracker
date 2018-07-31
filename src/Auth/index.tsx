import * as React from 'react';

import Button, { BUTTON_THEME } from '../Util/Button';
import DropboxIcon from '../Util/DropboxIcon';

import {
  Box,
  ButtonContent,
  Container,
  Header,
} from './StyledComponents';

const Login: React.SFC<{}> = () => (
  <Container>
    <Box>
      <Header>ExpenseTracker</Header>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Authenticate with Dropbox in order to get started</p>
      <div style={{ textAlign: 'center' }}>
        <Button theme={BUTTON_THEME.INVERSE}>
          <ButtonContent>
            <h3>Connect with</h3>
            <DropboxIcon/>
          </ButtonContent>
        </Button>
      </div>
    </Box>
  </Container>
);

export default Login;