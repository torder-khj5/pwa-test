import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 4px;
  align-items: center;
  padding: 4px;
  border: 1px solid black;
`;
export const StyledInput = styled.input`
  box-sizing: border-box;
  flex: 1;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #999;
  border: 0 none;
  outline: none;
  caret-color: #000;

  ::placeholder {
    color: #999;
  }
`;
