import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

interface RadioProps {
  size?: number;
  type: string;
}

export const Radio = styled.input<RadioProps>`
  box-sizing: border-box;
  display: inline-block;
  flex-shrink: 0;
  width: ${({ size }) => (size ?? 22) + 'px'};
  height: ${({ size }) => (size ?? 22) + 'px'};
  margin: 0;
  vertical-align: middle;
  cursor: pointer;
  background-color: ${colors.white};
  background-image: url('/src/assets/icons/check_red.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-clip: content-box;
  border: 1px solid ${colors.line};
  border-radius: ${({ type }) => (type === 'checkbox' ? '5px' : '50%')};
  appearance: none;

  :checked {
    background-color: ${colors.key_400};
    background-image: url('/src/assets/icons/check_red.svg');
    border: none;
  }

  :not(:checked, :disabled):hover {
    background-color: #fff;
    background-image: url('/src/assets/icons/check_red.svg');
    border: 1px solid ${colors.key_400};
  }

  :disabled {
    cursor: unset;
    background-color: #f5f6f8;
    background-image: url('/src/assets/icons/check_red.svg');
    border: 1px solid ${colors.blue_500};
  }

  & + label {
    color: #777;
  }

  &:hover + label {
    color: ${colors.black};
  }

  &:disabled + label {
    color: ${colors.blue_100};
  }

  &:checked + label {
    color: ${colors.black};
  }
`;
