import { useModalContext } from '@components/@shared/Modal/useModal.ts';
import { cloneElement, forwardRef, type HTMLProps, isValidElement, type ReactNode } from 'react';
import { useMergeRefs } from '@floating-ui/react';

interface ModalTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export const ModalTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement> & ModalTriggerProps>(function ModalTrigger(
  { children, asChild = false, ...props },
  propRef
) {
  const context = useModalContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  if (asChild && isValidElement(children)) {
    return cloneElement(
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
