import { useModalContext } from './useModalContext';
import * as React from 'react';
import { useMergeRefs } from '@floating-ui/react';

interface TriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const Trigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & TriggerProps>(function DialogTrigger(
  { children, asChild = false, ...props },
  propRef
) {
  const context = useModalContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      })
    );
  }

  return (
    <button ref={ref} data-state={context.open ? 'open' : 'closed'} {...context.getReferenceProps(props)}>
      {children}
    </button>
  );
});

export default Trigger;
