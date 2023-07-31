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
  color: ${({ priority }) => (priority === 'primary' ? colors.red_500 : colors.navy_900)};
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
        backgroundColor: isPrimary ? colors.red_500 : colors.navy_900,
        color: colors.white_100,

        ':active': {
          background: isPrimary ? colors.red_500 : colors.black_100,
        },

        ':disabled': {
          background: isPrimary ? colors.red_100 : colors.navy_30,
          color: isPrimary ? colors.white_100 : colors.black_10,
        },
      });
    case 'line':
      return css({
        border: `1px solid ${isPrimary ? colors.red_500 : colors.navy_30}`,
        background: colors.white_100,

        ':active': {
          border: `1px solid ${isPrimary ? colors.red_500 : colors.navy_900}`,
          background: isPrimary ? colors.red_50 : colors.navy_30,
        },

        ':disabled': {
          border: `1px solid ${isPrimary ? colors.red_100 : colors.navy_50}`,
          background: isPrimary ? colors.red_50 : '#F5F6F8',
          color: isPrimary ? colors.red_200 : '#C2C5CC',
        },
      });
    case 'bg':
      return css({
        background: isPrimary ? colors.red_50 : colors.navy_30,

        ':active': {
          background: isPrimary ? colors.red_100 : colors.navy_50,
        },
      });
  }
};
