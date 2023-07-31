import * as S from '././styles.tsx';

export type Priority = 'primary' | 'secondary';
export type BtnSize = 'xs' | 'sm' | 'md' | 'lg';
export type BtnType = 'default' | 'line' | 'bg';

interface CommonButtonProps {
  label: string;
  onButtonClick: () => void | Promise<void>;
  isDisabled?: boolean;
  priority?: Priority;
  btnSize?: BtnSize;
  btnType?: BtnType;
  className?: string;
}

export const CommonButton = ({
  label,
  onButtonClick,
  isDisabled,
  className,
  priority = 'primary',
  btnSize = 'md',
  btnType = 'default',
}: CommonButtonProps) => {
  const clickHandler = () => {
    onButtonClick();
  };

  return (
    <S.CommonButton
      type={'button'}
      onClick={clickHandler}
      disabled={isDisabled}
      priority={priority}
      btnSize={btnSize}
      btnType={btnType}
      className={className}
    >
      {label}
    </S.CommonButton>
  );
};
