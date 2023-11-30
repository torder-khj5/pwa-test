import Typography from '@components/Typography';
import Icon from '@components/@shared/Icon';
import { CloseButton } from '@components/@headless/Modal/CloseButton.tsx';
import * as S from './styles';
import toast from 'react-hot-toast';

export type ToastType = 'dark' | 'light';

type CustomToastProps = {
  message?: string;
  type: ToastType;
  iconName?: '토스트_체크_초록색';
  hasClose?: boolean;
  onClick?: () => void;
  visible: boolean;
  toastId: string;
};

export function CustomToast({ message, type, hasClose = false, onClick, visible, toastId }: CustomToastProps) {
  const closeIconTheme = type === 'dark' ? '토스트_닫기_다크' : '토스트_닫기_라이트';

  const handleButtonClick = () => {
    toast.dismiss(toastId);
    if (!onClick) return;
    onClick();
  };

  return (
    <S.CustomToastLayout type={type} visible={visible}>
      <Typography tag="h6" color={type}>
        {message}
      </Typography>

      {hasClose && (
        <button type="button" onClick={handleButtonClick}>
          {/* <Icon name={closeIconTheme} size={24} /> */}
          <CloseButton />
        </button>
      )}
    </S.CustomToastLayout>
  );
}
