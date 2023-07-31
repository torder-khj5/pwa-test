import Radio from '@components/@shared/Radio';
import * as S from './styles';
import React, { type Ref, forwardRef } from 'react';

type RadioWithLabelProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  checked: boolean;
  handler: () => void;
  type: 'checkbox' | 'radio';
};

const RadioWithLabel = forwardRef<HTMLInputElement, RadioWithLabelProps>(
  ({ label, checked, id, handler, type, ...rest }, forwardedRef: Ref<HTMLInputElement>) => {
    return (
      <S.RadioWrapper>
        <Radio id={id} type={type} ref={forwardedRef} checked={checked} handler={handler} {...rest} />
        <S.RadioLabel htmlFor={id}>{label}</S.RadioLabel>
      </S.RadioWrapper>
    );
  }
);

RadioWithLabel.displayName = 'RadioWithLabel';

export default RadioWithLabel;
