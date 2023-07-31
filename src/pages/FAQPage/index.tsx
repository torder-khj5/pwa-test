import { colors } from '@styles/colors';
import PageWrapper from '@components/PageWrapper';
import HubtTooltip from '@components/HubtTooltip';
import Switch from '@components/@shared/Switch';
import { useState } from 'react';
import { css } from '@emotion/react';

export default function FAQPage() {
  const [allOpen, setAllOpen] = useState(false);

  return (
    <PageWrapper bgColor={colors.navy_30}>
      <h1>FAQPage</h1>
      <Switch checked={allOpen} onChange={() => setAllOpen(!allOpen)} />
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: max-content;
          margin-top: 80px;
        `}
      >
        <HubtTooltip placement="top-start" initialOpen={true} message="툴팁" theme="dark">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="top" initialOpen={true} message="툴팁" theme="dark">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="top-end" initialOpen={true} message="툴팁" theme="dark">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="left" initialOpen={true} message="툴팁" theme="dark">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <div></div>
        <HubtTooltip placement="right" initialOpen={true} message="툴팁" theme="dark">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="bottom-start" initialOpen={true} message="툴팁" theme="dark">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="bottom" initialOpen={true} message="툴팁" theme="dark">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="bottom-end" initialOpen={true} message="툴팁" theme="dark">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: max-content;
          margin-top: 80px;
        `}
      >
        <HubtTooltip placement="top-start" initialOpen={true} message="툴팁" theme="light">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="top" initialOpen={true} message="툴팁" theme="light">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="top-end" initialOpen={true} message="툴팁" theme="light">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="left" initialOpen={true} message="툴팁" theme="light">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <div></div>
        <HubtTooltip placement="right" initialOpen={true} message="툴팁" theme="light">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="bottom-start" initialOpen={true} message="툴팁" theme="light">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="bottom" initialOpen={true} message="툴팁" theme="light">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
        <HubtTooltip placement="bottom-end" initialOpen={true} message="툴팁" theme="light">
          <button css={example}>호버 시 툴팁 노출</button>
        </HubtTooltip>
      </div>
    </PageWrapper>
  );
}

const example = css`
  padding: 10px;
  background-color: aqua;
  border-radius: 8px;
`;
