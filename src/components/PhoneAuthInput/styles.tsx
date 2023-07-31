import { colors } from '@styles/colors.ts';
import Input from '@components/@shared/Input';
import Icon from '@components/@shared/Icon';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface InputWrapperProps {
  disabled?: boolean;
  isError?: boolean;
  isPressed?: boolean;
}
export const InputWrapper = styled.div<InputWrapperProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 11px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ isPressed }) => (isPressed ? colors.black_100 : '#777')};
  letter-spacing: -0.8px;
  background: ${colors.navy_0};
  border: ${({ isPressed }) => `1px solid ${isPressed ? colors.black_100 : colors.line}`};
  border-radius: 10px;
  outline: none;
  caret-color: #777;

  .icon-resize {
    height: 24px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: #babcc2;
      background-color: #f5f6f8;
      border-color: #e0e3eb;
    `}
`;

export const SuffixWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px;
  margin-right: 11px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
`;

export const Suffix = styled.span<{ isFilled: boolean }>`
  margin-right: 5px;
  color: ${({ isFilled }) => isFilled && colors.black_100};
`;

export const PhoneNumberWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const PhoneNumberInput = styled(Input)`
  padding: 0;
  border: none;
  border-radius: 0%;

  :focus {
    border: none;
  }

  :hover {
    border: none;
  }

  :disabled {
    color: #babcc2;
    border: none;

    ::placeholder {
      color: #babcc2;
    }
  }
`;

export const ButtonWrapper = styled.div`
  height: 100%;
`;

export const IconAdditionalMargin = styled(Icon)`
  margin-left: 14px;
  cursor: pointer;
  object-fit: fit;
`;

export const TimerSpan = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: ${colors.red_500};
  text-align: right;
  letter-spacing: -0.8px;
`;

export const ErrorSpan = styled.span`
  margin-top: 12px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  color: ${colors.error};
  letter-spacing: -0.75px;
`;
