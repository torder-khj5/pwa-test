import * as S from './styles';
import { type Ref, forwardRef } from 'react';

type RadioProps = {
  id: string;
  type: 'checkbox' | 'radio';
  checked: boolean;
  size?: number;
  handler?: () => void;
  disabled?: boolean;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, checked, handler, size, disabled, type = 'radio' }: RadioProps, ref: Ref<HTMLInputElement>) => {
    return (
      <>
        <S.Radio
          id={id}
          onClick={handler}
          checked={checked}
          type={type}
          size={size}
          disabled={disabled}
          ref={ref}
          className={type}
          readOnly
        />
      </>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
