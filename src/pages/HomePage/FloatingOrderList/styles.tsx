import styled from '@emotion/styled';

export const OrderListContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;

  width: 350px;
  height: 300px;

  overflow: scroll;
  background: white;
  border: 1px solid lightgray;
  opacity: 0.9;

  & div:first-of-type {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid gray;
  }
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 2px;
  border-bottom: 1px solid lightblue;
`;
