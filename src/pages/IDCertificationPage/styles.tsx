import styled from '@emotion/styled';

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

export const InputContainer = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  width: 100%;
  margin: 50px 0;
`;

export const RequestButton = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 20px;
  font-size: 10px;

  cursor: pointer;

  border: 1px solid lightgray;
`;
