import { colors } from '@styles/colors.ts';
import Icon from '@components/@shared/Icon';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  margin: 100px 0 50px;
  font-size: 20px;
  font-weight: bold;
`;

export const TypeContainer = styled.div`
  width: 620px;
  height: max-content;
`;

export const TypeItem = styled.div<{ active?: boolean }>`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;

  width: 100%;
  height: 160px;
  margin-bottom: 20px;

  background: #fff;
  border: ${({ active }) =>
    active
      ? css`
          border-radius: 20px;
          border: 2px solid ${colors.red_500};
          background: #fff;
          box-shadow: 3px 3px 20px 0 rgb(255 67 67 / 20%);
        `
      : `1px solid lightgray`};
  border-radius: 20px;
  box-shadow: 3px 3px 15px 0 rgb(48 54 68 / 5%);

  :hover {
    border: 2px solid ${({ active }) => (active ? `#ff4545` : `#303644`)};
    box-shadow: 3px 3px 3px 20px 0 rgb(71 89 132 / 40%);
  }

  :active {
    border: 2px solid ${colors.red_500};
    border-radius: 20px;
    box-shadow: 3px 3px 20px 0 rgb(255 67 67 / 20%);
  }
`;

export const TypeItemIcon = styled.img`
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  margin: 35px 0 35px 45px;
  background: ${colors.navy_30};
  border: 1px solid ${colors.navy_50};

  border-radius: 15px;
`;

export const TypeItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 62px;
  margin-left: 30px;
`;

export const TypeItemLabel = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 28px */
  color: #000;
  letter-spacing: -1.4px;
`;

export const TypeItemDesc = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  color: #000;
  letter-spacing: -1px;
`;

export const SelectIcon = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
`;
