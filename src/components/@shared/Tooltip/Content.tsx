/* eslint-disable react/prop-types */

import { useTooltipContext } from './useTooltip';
import React, { Children } from 'react';
import { useMergeRefs, FloatingPortal, FloatingArrow } from '@floating-ui/react';

type ArrowProps = {
  hasArrow?: boolean;
  arrowColor?: string;
  arrowWidth?: number;
  arrowHeight?: number;
  arrowOffset?: number;
};
const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement> & ArrowProps>(
  function TooltipContent(
    { style, hasArrow = false, arrowColor = 'blue', arrowWidth = 14, arrowHeight = 7, arrowOffset = 0, ...props },
    propRef
  ) {
    const { arrowRef, ...context } = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!context.open) return null;

    const isEdgeAlignedAndSmaller = context.placement.includes('-');

    return (
      <FloatingPortal>
        <div
          ref={ref}
          style={{
            ...context.floatingStyles,
            ...style,
          }}
          {...context.getFloatingProps(props)}
        >
          {props.children}
          {hasArrow && (
            <FloatingArrow
              fill={arrowColor}
              width={arrowWidth}
              height={arrowHeight}
              staticOffset={isEdgeAlignedAndSmaller ? arrowOffset : null}
              ref={arrowRef}
              context={context.context}
            />
          )}
        </div>
      </FloatingPortal>
    );
  }
);

export default TooltipContent;
