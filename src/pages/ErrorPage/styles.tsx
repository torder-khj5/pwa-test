import styled from '@emotion/styled';

// TODO) 디자인 시스템으로 추출
export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

// TODO) 디자인 시스템으로 추출
export const Header = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

// TODO) 디자인 시스템으로 추출
export const Paragraph = styled.p`
  line-height: 20px;
  text-align: center;
  white-space: pre-line;
`;

export const ButtonSection = styled.section`
  display: flex;
  gap: 15px;
  justify-content: space-around;
  white-space: nowrap;
`;

// TODO) 디자인 시스템으로 추출
export const Button = styled.button`
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  background-color: gray;
  border-radius: 5px;

  :hover {
    scale: 1.05;
  }
`;
