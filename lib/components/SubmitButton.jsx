import styled, { css } from 'styled-components';
import defaultTheme from '../theme';
import { pulse } from '../common/animations';

const fillFunc = props => {
  const { speaking, invalid, theme } = props;

  if (speaking) {
    return theme.headerBgColor;
  }
  return invalid ? '#E53935' : '#4a4a4a';
};

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #e1dcfa;
  border-radius: 50%;
  transition: 0.3s ease-out;
  padding-top: 13px;
  padding-right: 24px;
  &:hover {
    background: #bfafe3;
  }
`;

SubmitButton.defaultProps = {
  theme: defaultTheme
};

export default SubmitButton;
