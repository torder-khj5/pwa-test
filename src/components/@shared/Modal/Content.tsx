import { useModalContext } from '@components/@shared/Modal/useModal.ts';
import { forwardRef, type HTMLProps } from 'react';
import { FloatingFocusManager, FloatingOverlay, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import './style.css';

export const ModalContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function ModalContent(
  props,
  propRef
) {
  const { context: floatingContext, ...context } = useModalContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingOverlay className="modal-overlay" lockScroll>
        <FloatingFocusManager context={floatingContext}>
          <div
            ref={ref}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            {...context.getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
});
