import { ToggleMenuContext, type ToggleMenuOption, useToggleMenu } from './useToggleMenu';
import ToggleMenuTrigger from './Trigger';
import ToggleMenuContent from './Content';
import { type PropsWithChildren } from 'react';

interface ControlledProps extends Omit<ToggleMenuOption, 'open' | 'onOpenChange' | 'initialOpen'> {
  initialOpen?: undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
interface UnControlledProps extends Omit<ToggleMenuOption, 'open' | 'onOpenChange' | 'initialOpen'> {
  initialOpen?: boolean;
  open?: undefined;
  onOpenChange?: (open?: boolean) => void;
}

export default function ToggleMenu({ children, ...options }: PropsWithChildren<ControlledProps | UnControlledProps>) {
  const tooltip = useToggleMenu(options);
  return <ToggleMenuContext.Provider value={tooltip}>{children}</ToggleMenuContext.Provider>;
}

ToggleMenu.Trigger = ToggleMenuTrigger;
ToggleMenu.Content = ToggleMenuContent;
