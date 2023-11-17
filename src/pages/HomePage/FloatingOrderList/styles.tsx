import styled from '@emotion/styled';

export const OrderListContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;

  width: 19rem;
  height: 25rem;

  overflow: scroll;
  background: white;
  border: 1px solid lightgray;
  opacity: 0.9;

  & div:nth-of-type(2) {
    height: 10px;
    background: #e8e8e8;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
    text-align: center;
    background: lightgray;
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
