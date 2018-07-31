import styled from 'styled-components';
import { COLORS } from './../../styles';

export const CustomButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.1rem;
  border: 1px solid ${COLORS.lightGray};
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  :hover {
    cursor: pointer;
    background: ${props => props.theme.focusBackgroundColor};
  }
  :focus {
    outline: none;
  }
`;

export const mainTheme = {
  backgroundColor: COLORS.lightBlue,
  color: COLORS.white,
  focusBackgroundColor: COLORS.lightBlue,
};

export const inverseTheme = {
  backgroundColor: COLORS.softWhite,
  color: COLORS.softBlack,
  focusBackgroundColor: COLORS.white,
}

CustomButton.defaultProps = {
  theme: { ...mainTheme }
};