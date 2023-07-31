import { TooltipContext, type TooltipOptions, useTooltip } from './useTooltip';
import TooltipTrigger from './Trigger';
import TooltipContent from './Content';

export function Tooltip({ children, ...options }: { children: React.ReactNode } & TooltipOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
}

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;
