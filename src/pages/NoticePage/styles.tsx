import { colors } from '@styles/colors';
import styled from '@emotion/styled';

// TODO) 디자인 시스템으로 추출
export const PageTitle = styled.section`
  font-size: 24px;
`;
// TODO) 디자인 시스템(Typography)으로 추출
export const Text88 = styled.div`
  font-size: 16px;
`;

export const TopSection = styled.section`
  display: flex;

  gap: 320px;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid black;
`;

export const Row = styled.li`
  display: grid;
  grid-template-columns: 60px 1fr 100px;
  gap: 16px;
  align-items: center;
  height: 56px;
  padding: 0 8px;
  cursor: pointer;
  border-bottom: 1px solid lightgray;

  :hover {
    background-color: ${colors.navy_100};
  }
`;

export const NoticeType = styled.div<{ bgColor: string }>`
  padding: 4px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: ${({ bgColor }) => bgColor};
`;

export const NoticeDate = styled.div`
  font-size: 14px;
  color: #999;
  text-align: center;
`;

export const PaginationWrap = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  button {
    min-width: 32px;
    max-width: 32px;
    padding: 4px;
    cursor: pointer;
    border-collapse: collapse;
    background: inherit;
    border: 1px solid gray;
    border-radius: 0;
    box-shadow: none;

    :hover {
      background-color: black;
    }

    &.first-button {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &.last-button {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;
