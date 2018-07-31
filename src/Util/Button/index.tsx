import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  CustomButton,
  inverseTheme,
  mainTheme,
} from './StyledComponents';

export enum BUTTON_THEME {
  MAIN = 'MAIN',
  INVERSE = 'INVERSE'
}

interface IProps {
  theme: BUTTON_THEME;
  children: any | any[];
}

const Button: React.SFC<IProps> = (props: IProps) => {
  const currentTheme = props.theme === BUTTON_THEME.MAIN
    ? mainTheme : inverseTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CustomButton>
        {props.children}
      </CustomButton>
    </ThemeProvider>
  );
};

export default Button;