import { colors } from '@styles/colors';
import { useControllableState } from '@hooks/useControllableState';
import * as S from './styles';
import { useCallback, useMemo } from 'react';

type SwitchProps = {
  checked?: boolean;
  onChange?: (on?: boolean) => void;
  defaultValue?: boolean;
};
export default function Switch({ checked, onChange: onChangeProp, defaultValue }: SwitchProps) {
  const [on, setOn] = useControllableState({
    value: checked,
    onChange: onChangeProp,
    defaultValue,
  });

  const handleOnClick = useCallback(() => {
    setOn(!on);
  }, [setOn, on]);

  const buttonPosition = useMemo(() => (on ? 'flex-end' : 'flex-start'), [on]);
  const backgroundColor = useMemo(() => (on ? colors.blue_900 : '#e1e1e1'), [on]);

  return (
    <S.SwitchWrap justifyContent={buttonPosition} backgroundColor={backgroundColor} onClick={handleOnClick}>
      <S.SwitchButton />
    </S.SwitchWrap>
  );
}
