import { colors } from '@styles/colors';
import { type SkeletonFormProps } from '.';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const reactLoadingSkeletonAnimation = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

type SkeletonContainerProps = {
  width?: number | string;
  height?: number | string;
};

export const SkeletonContainer = styled.div<SkeletonContainerProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  margin: 0 auto;
`;

export const SkeletonBase = styled.div<SkeletonFormProps>`
  --base-color: #ebebeb;
  --highlight-color: #f5f5f5;
  --animation-duration: 1s;
  --animation-direction: normal;
  --pseudo-element-display: block;
  position: relative;
  z-index: 1;
  display: inline-flex;
  flex: 1;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  overflow: hidden;
  line-height: 1;
  user-select: none;
  background-color: var(--base-color);
  border-radius: 4px;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: var(--pseudo-element-display);
    height: 100%;
    content: ' ';
    background-image: linear-gradient(90deg, var(--base-color), var(--highlight-color), var(--base-color));
    background-repeat: no-repeat;
    transform: translateX(-100%);
    animation-name: ${reactLoadingSkeletonAnimation};
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: var(--animation-direction);
  }
`;

export const ArticleUIContainer = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 0.1fr 0.3fr 0.1fr 0.3fr 0.1fr 0.3fr 0.1fr 0.3fr;
  grid-template-columns: 0fr 0.1fr 1fr 0.1fr 1fr 0.4fr repeat(5, 1fr);
  grid-gap: 2px;
  align-items: center;
  width: 100%;
  height: 100%;

  .div1 {
    grid-area: 1 / 1 / 6 / 6;
  }

  .div2 {
    grid-area: 1 / 7 / 2 / 12;
  }

  .div3 {
    grid-area: 3 / 7 / 4 / 11;
  }

  .div4 {
    grid-area: 5 / 7 / 6 / 11;
  }

  .div5 {
    grid-area: 7 / 1 / 8 / 12;
  }

  .div6 {
    grid-area: 9 / 1 / 10 / 12;
  }
`;

export const ImgUIContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px;
  border: 1px solid ${colors.line};
  border-radius: 4px;
`;

export const ListUIContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 0.5fr) repeat(2, 1fr) repeat(2, 0.5fr) repeat(2, 1fr) repeat(2, 0.5fr);
  grid-template-columns: 0.5fr 0.3fr repeat(2, 1fr) 0.3fr repeat(2, 1fr) 0.3fr repeat(2, 1fr);
  grid-gap: 0;
  align-items: center;
  width: 100%;
  height: 100%;

  .div1 {
    grid-area: 1 / 1 / 3 / 2;
    border-radius: 4px;
  }

  .div2 {
    grid-area: 1 / 3 / 3 / 5;
  }

  .div3 {
    grid-area: 1 / 6 / 3 / 8;
  }

  .div4 {
    grid-area: 1 / 9 / 3 / 11;
  }

  .div5 {
    grid-area: 5 / 1 / 7 / 2;
    border-radius: 4px;
  }

  .div6 {
    grid-area: 5 / 3 / 7 / 5;
  }

  .div7 {
    grid-area: 5 / 6 / 7 / 8;
  }

  .div8 {
    grid-area: 5 / 9 / 7 / 11;
  }

  .div9 {
    grid-area: 9 / 1 / 11 / 2;
    border-radius: 4px;
  }

  .div10 {
    grid-area: 9 / 3 / 11 / 5;
  }

  .div11 {
    grid-area: 9 / 6 / 11 / 8;
  }

  .div12 {
    grid-area: 9 / 9 / 11 / 11;
  }
`;

export const ProfileUIContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 8px;
  border: 1px solid ${colors.line};
  border-radius: 4px;

  .div1 {
    grid-area: 1 / 1 / 8 / 5;
  }

  .div2 {
    grid-area: 1 / 6 / 2 / 13;
  }

  .div3 {
    grid-area: 3 / 6 / 4 / 12;
  }

  .div4 {
    grid-area: 5 / 6 / 6 / 12;
  }

  .div5 {
    grid-area: 7 / 6 / 8 / 10;
  }
`;

export const ContentsUIContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0 50px;
  align-items: center;

  width: 100%;
  height: 100%;

  .div1 {
    grid-area: 1 / 1 / 4 / 3;
  }

  .div2 {
    grid-area: 1 / 3 / 2 / 6;
  }

  .div3 {
    grid-area: 3 / 3 / 4 / 5;
  }
`;
