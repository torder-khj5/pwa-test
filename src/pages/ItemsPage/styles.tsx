import styled from '@emotion/styled';

// TODO) 디자인 시스템으로 추출
export const PageTitle = styled.section`
  font-size: 24px;
`;

export const Text = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const Title = styled(Text)`
  margin-top: 5px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: yellowgreen;
`;

export const PaginationSection = styled.section`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  text-align: center;
  cursor: pointer;
  border-radius: 100%;

  :hover {
    background-color: #eee;
  }
`;
