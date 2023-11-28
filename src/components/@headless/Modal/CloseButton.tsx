import { useModalContext } from '@components/@headless/Modal/useModalContext.ts';
import icon from '@assets/icons/icon-x-mono.svg';

export function CloseButton() {
  const { setOpen } = useModalContext();

  return (
    <button onClick={() => setOpen(false)}>
      <img src={icon} alt={'icon-close'} />
    </button>
  );
}
