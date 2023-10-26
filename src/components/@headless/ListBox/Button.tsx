import { useListBoxContext } from './useListBox';
import React, { useId } from 'react';
import { type PropsWithChildren, forwardRef, type ReactElement, cloneElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';

type Props = {
  placeholder?: string;
  asChild?: boolean;
};

// interface Props extends React.HTMLProps<HTMLElement> {
//   asChild?: boolean;
//   placeholder?: string;
//   children?: any;
// }

type ButtonSlotState = {
  open: boolean;
};

const Button = forwardRef<HTMLElement, PropsWithChildren<Props>>(function Button(
  { placeholder = 'Select...', asChild = false, children, ...props },
  propRef
) {
  const { refs, getReferenceProps, selectedLabel, open } = useListBoxContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([refs.setReference, propRef, childrenRef]);

  console.log(children);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': open ? 'open' : 'closed',
      })
    );
  }

  return (
    <button ref={ref} tabIndex={0} {...getReferenceProps(props)} data-state={open ? 'open' : 'closed'}>
      {selectedLabel ?? placeholder}
    </button>
  );
});
export default Button;
