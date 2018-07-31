import styled from 'styled-components';
import { COLORS } from './../../styles';

export const CustomButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.1rem;
  border: 1px solid ${COLORS.lightGray};
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;

export const mainTheme = {
  backgroundColor: COLORS.lightBlue,
  color: COLORS.white,
};

export const inverseTheme = {
  backgroundColor: COLORS.softWhite,
  color: COLORS.softBlack,
}

CustomButton.defaultProps = {
  theme: { ...mainTheme }
};