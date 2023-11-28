import { Global, css } from '@emotion/react';

const globalStyles = css`
  :root {
    --z-index-lower: -1;
    --z-index-stable: 1;
    --z-index-upper: 2;
    --z-index-dropdown: 1000;
    --z-index-sticky: 1020;
    --z-index-fixed: 1030;
    --z-index-modal-backdrop: 1040;
    --z-index-modal: 1050;
    --z-index-popover: 1060;
    --z-index-tooltip: 1070;
    --max-width: 390px;

    /* font-size  */
    --font-size-caption: 11px;
    --font-size-p: 13px;
    --font-size-h7: 15px;
    --font-size-h6: 17px;
    --font-size-h5: 21px;
    --font-size-h4: 24px;
    --font-size-h3: 32px;
    --font-size-h2: 40px;
    --font-size-h1: 48px;

    /* line-height */
    --line-height-base: 160%;
    --line-height-adjust: 130%;

    /* letter-spacing  */
    --letter-spacing-base: -1.5%;
    --letter-spacing-adjust: -2%;

    /* border-radius */
    --border-radius-s: 4px;
    --border-radius-m: 8px;
    --border-radius-l: 16px;
    --border-radius-xl: 24px;
    --border-radius-infinite: 9999px;

    /* box-shadow */
    --shadow-s: 0px 4px 12px 0px rgb(48 54 68 / 5%);
    --shadow-m: 0px 6px 14px 0px rgb(0 0 0 / 4%);
    --shadow-l: 0px 8px 30px 0px rgb(0 0 0 / 10%);

    /* spacing */
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 10px;
    --spacing-4: 12px;
    --spacing-5: 14px;
    --spacing-6: 20px;
    --spacing-7: 24px;
    --spacing-8: 28px;
    --spacing-9: 36px;
    --spacing-10: 44px;
    --spacing-11: 48px;
    --spacing-12: 56px;
    --spacing-13: 64px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body,
  button,
  span {
    font-family: Pretendard, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
