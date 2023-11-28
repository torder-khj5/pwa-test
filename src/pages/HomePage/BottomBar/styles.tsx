import { palette } from '@styles/colors_v2.ts';
import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

export const BottomBarContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 5.7vw;
`;

export const BottomBarButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 5.7vw;
  font-size: 16px;
  color: white;
  background-color: ${colors.green_key_100};
`;

export const OrderModalWrapper = styled.div`
  display: flex;

  flex-direction: column;
  flex-shrink: 0;
  gap: var(--spacing-spacing-3, 10px);
  align-items: flex-start;
  width: 85vw;
  height: 70vh;

  overflow: scroll;
`;

export const OrderModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-spacing-8, 28px);
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  height: 100%;
`;

export const OrderModalHeaderArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 42px;
`;

export const OrderModalListTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  height: calc(70vh - 60px);
  overflow: scroll;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-around;
  height: 52px;
  background: #fff;

  border-bottom: 1px solid var(--gray-gray-20, #f1f4f7);

  & h6 {
    display: flex;
    gap: var(--spacing-spacing-4, 12px);
    align-items: center;
    align-self: stretch;

    justify-content: center;
    width: 100%;
    padding: 0 var(--border-radius-border-radius-l, 16px);
    color: ${palette.gray_300};
  }

  & h6:first-of-type {
    justify-content: flex-start;
  }

  & h6:last-of-type {
    justify-content: flex-end;
  }
`;

export const TableContents = styled.div`
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-around;
  height: 52px;
  text-align: center;
  background: #fff;

  border-bottom: 1px solid var(--gray-gray-20, #f1f4f7);

  & h6 {
    display: flex;
    gap: var(--spacing-spacing-4, 12px);
    align-items: center;
    align-self: stretch;

    justify-content: center;
    width: 100%;
    padding: 0 var(--border-radius-border-radius-l, 16px);

    word-break: keep-all;
  }

  & h6:first-of-type {
    justify-content: flex-start;
    text-align: left;
  }

  & h6:nth-of-type(4) {
    justify-content: flex-end;
  }
`;

export const OrderModalTotalPriceArea = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  justify-content: space-between;
  height: 59px;
  padding: 0 var(--border-radius-border-radius-l, 16px);
  background: #fff;

  border-top: 2px solid var(--gray-gray-100, #ccd2dd);
`;
