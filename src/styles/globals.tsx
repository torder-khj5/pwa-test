import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Pretendard, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
