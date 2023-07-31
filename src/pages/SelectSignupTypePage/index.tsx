import SelectIcon from '@assets/svg/icon_select.svg';
import * as S from './styles.tsx';
import { useCallback, useState } from 'react';

type TMemberItem = {
  src: string;
  label: string;
  desc: string;
  href: string;
};

const OPTION_ITEMS: TMemberItem[] = [
  { label: '개인회원', desc: '만 14세 이상 개인 회원가입', src: 'img-src', href: 'individual' },
  { label: '사업자회원', desc: '개인/법인 사업자 또는 사업자 직원 회원가입', src: 'img-src', href: 'business' },
  { label: '임직원·협력업체 회원', desc: '임직원 또는 협력업체 회원가입', src: 'img-src', href: 'employees' },
];

function SelectSignupTypePage() {
  const [selectType, setSelectType] = useState('');

  const onClickHandler = useCallback((href: string, value: string) => {
    console.log(`history.push(${href})`);
    setSelectType(value);
  }, []);

  return (
    <S.Wrapper>
      <S.Title>가입할 회원 유형을 선택해 주세요.</S.Title>
      <S.TypeContainer>
        {OPTION_ITEMS.map(({ label, desc, src, href }) => {
          return (
            <S.TypeItem key={'type-' + label} onClick={() => onClickHandler(href, label)} active={selectType === label}>
              <S.TypeItemIcon src={src}></S.TypeItemIcon>
              <S.TypeItemContent>
                <S.TypeItemLabel>{label}</S.TypeItemLabel>
                <S.TypeItemDesc>{desc}</S.TypeItemDesc>
              </S.TypeItemContent>
              {selectType === label && <S.SelectIcon name="체크_흰색_바탕_빨간색"></S.SelectIcon>}
            </S.TypeItem>
          );
        })}
      </S.TypeContainer>
    </S.Wrapper>
  );
}

export default SelectSignupTypePage;
