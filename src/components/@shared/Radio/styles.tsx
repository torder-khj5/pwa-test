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
  background-color: ${colors.white_100};
  background-repeat: no-repeat;
  background-position: center;
  background-clip: content-box;
  border: 1px solid ${colors.line};
  border-radius: ${({ type }) => (type === 'checkbox' ? '5px' : '50%')};
  appearance: none;

  :checked {
    background-color: ${colors.navy_900};
    background-image: url('src/assets/react.svg');
    border: 1px solid ${colors.navy_900};
  }

  :not(:checked, :disabled):hover {
    background-color: #fff;
    background-image: url('src/assets/react.svg');
    border: 1px solid ${colors.navy_900};
  }

  :disabled {
    cursor: unset;
    background-color: #f5f6f8;
    background-image: url('src/assets/react.svg');
    border: 1px solid ${colors.navy_50};
  }

  & + label {
    color: #777;
  }

  &:hover + label {
    color: ${colors.black_100};
  }

  &:disabled + label {
    color: ${colors.navy_100};
  }

  &:checked + label {
    color: ${colors.black_100};
  }
`;
