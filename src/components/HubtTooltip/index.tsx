import { colors } from '@styles/colors';
import { type TooltipOptions } from '@components/@shared/Tooltip/useTooltip';
import { Tooltip } from '@components/@shared/Tooltip';
import * as S from './styles';
import React, { useMemo, type PropsWithChildren } from 'react';

const TooltipColors = {
  light: { bgColor: colors.white_100, textColor: '#242424' },
  dark: { bgColor: colors.navy_900, textColor: colors.white_100 },
};
type HubtTooltipProps = {
  theme?: 'light' | 'dark';
  message: string;
};
export default function HubtTooltip({
  children: triggerElement,
  initialOpen,
  placement = 'top',
  theme = 'light',
  message,
  open,
  onOpenChange,
}: PropsWithChildren<HubtTooltipProps & TooltipOptions>) {
  const bgColor = useMemo(() => TooltipColors[theme].bgColor, [theme]);
  const textColor = useMemo(() => TooltipColors[theme].textColor, [theme]);

  return (
    <Tooltip initialOpen={initialOpen} placement={placement} offset={11} open={open} onOpenChange={onOpenChange}>
      <Tooltip.Trigger asChild>{triggerElement}</Tooltip.Trigger>
      <Tooltip.Content hasArrow arrowWidth={10} arrowHeight={6} arrowOffset={8} arrowColor={bgColor}>
        <S.TooltipMessageWrap bgColor={bgColor} color={textColor}>
          {message}
        </S.TooltipMessageWrap>
      </Tooltip.Content>
    </Tooltip>
  );
}
