import { themes } from '@styles/theme.ts';
import { colors } from '@styles/colors.ts';
import { type BtnSize, type BtnType, type Priority } from '@components/CommonButton/index.tsx';
import styled from '@emotion/styled';
import { css, type SerializedStyles } from '@emotion/react';

interface CommonButtonProps {
  isMain?: boolean;
  customStyles?: SerializedStyles;
  priority?: Priority;
  btnSize?: BtnSize;
  btnType?: BtnType;
}

export const CommonButton = styled.button<CommonButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: ${({ priority }) => (priority === 'primary' ? colors.red_500 : colors.blue_900)};
  text-align: center;
  letter-spacing: -1px;
  border-radius: 10px;

  ${({ btnSize }) => btnSize && themes.buttons.size[btnSize]}

  ${({ btnType, priority }) => btnType && mapToBtnType(btnType, priority)}
`;

const mapToBtnType = (btnType: BtnType, priority?: Priority) => {
  const isPrimary = priority === 'primary';
  switch (btnType) {
    case 'default':
      return css({
        backgroundColor: isPrimary ? colors.key_400 : colors.black_900,
        color: colors.white,

        ':active': {
          background: isPrimary ? colors.key_600 : colors.black_600,
        },

        ':disabled': {
          background: isPrimary ? colors.key_50 : colors.black_100,
          cursor: 'not-allowed',
        },
      });
    case 'line':
      return css({
        border: `1px solid ${isPrimary ? colors.key_400 : colors.black_900}`,
        background: colors.white,
        color: isPrimary ? colors.key_400 : colors.black_900,

        ':active': {
          border: `1px solid ${isPrimary ? colors.key_400 : colors.black_900}`,
          background: isPrimary ? colors.key_50 : colors.black_50,
          color: isPrimary ? colors.key_400 : colors.black_900,
        },

        ':disabled': {
          border: `1px solid ${isPrimary ? colors.key_50 : colors.black_200}`,
          background: isPrimary ? colors.red_50 : colors.black_50,
          color: isPrimary ? colors.key_100 : colors.key_200,
          cursor: 'not-allowed',
        },
      });
    case 'bg':
      return css({
        background: isPrimary ? colors.key_10 : colors.black_50,

        ':active': {
          background: isPrimary ? colors.key_50 : colors.black_100,
        },

        ':disabled': {
          background: isPrimary ? colors.key_10 : colors.black_50,
          color: isPrimary ? colors.white : colors.black_200,
          cursor: 'not-allowed',
        },
      });
  }
};
