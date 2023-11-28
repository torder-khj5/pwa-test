import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 1.5625vw 2.3438vw 0;
  overflow: auto;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  gap: 0 20px;
  justify-content: space-between;
  width: 100%;
  padding: 1.5625vw 2.3438vw 0;
  overflow: auto;
`;

export const ProductItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 25vw;
  margin-bottom: 1.5vw;
  overflow: hidden;

  border: 1px solid red;
  border-radius: 0.7813vw;
`;

export const ProductItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 7vw;

  & div {
    align-self: center;
    height: 3vw;
    margin: 5px 0;
    padding-inline: 0.2vw;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 20px 20px;
`;
