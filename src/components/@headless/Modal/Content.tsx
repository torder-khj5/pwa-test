import { useModalContext } from './useModalContext';
import * as S from './styles';
import * as React from 'react';
import { useMergeRefs, FloatingPortal, FloatingFocusManager, FloatingOverlay } from '@floating-ui/react';

const ModalContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function DialogContent(
  props,
  propRef
) {
  const { context: floatingContext, ...context } = useModalContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingOverlay className="Dialog-overlay" lockScroll>
        <FloatingFocusManager context={floatingContext}>
          <S.ModalBgWrapper>
            <S.ModalContentWrapper
              ref={ref}
              aria-labelledby={context.labelId}
              aria-describedby={context.descriptionId}
              {...context.getFloatingProps(props)}
            >
              {props.children}
            </S.ModalContentWrapper>
          </S.ModalBgWrapper>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
});

export default ModalContent;
