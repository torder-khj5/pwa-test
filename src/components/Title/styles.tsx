import styled from '@emotion/styled';

export const TitleContainer = styled.div<{ isVisibleRightButton: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: baseline;
  padding: ${({ isVisibleRightButton }) => (isVisibleRightButton ? '25px 30px' : '34px 30px')};
`;

export const Title = styled.h4`
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  color: #000;
  letter-spacing: -1.3px;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: #000;
  letter-spacing: -0.8px;
`;

export const RightButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
