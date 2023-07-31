import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface InputProps {
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
  borderColor?: string;
  backGroundColor?: string;
  disabled?: boolean;
  isError?: boolean;
}

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: ${({ fontSize }) => (fontSize ?? '16') + 'px'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 500};
  color: ${({ fontColor }) => fontColor ?? colors.black_100};
  letter-spacing: -0.8px;
  background: ${({ backGroundColor }) => backGroundColor ?? colors.navy_0};
  border: ${({ borderColor }) => `1px solid ${borderColor ?? colors.line}`};
  border-radius: 10px;
  outline: none;
  caret-color: ${({ fontColor }) => fontColor ?? '#777'};

  :focus {
    color: ${colors.black_100};
    border: 1px solid ${colors.navy_900};
  }

  ::placeholder {
    color: #777;
  }

  :disabled {
    font-weight: 500;
    color: #babcc2;
    background-color: #f5f6f8;
    border: 1px solid ${colors.navy_50};
  }

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid ${colors.error};
    `}
`;
