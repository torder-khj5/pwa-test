import { Tabs } from 'src/components/Tabs';
import CustomModal from 'src/components/CustomModal';
import PhoneAuth from '@pages/IDCertificationPage/PhoneAuth';
import EmailAuth from '@pages/IDCertificationPage/EmailAuth';
import * as S from './styles.tsx';
import React from 'react';

const TAB_ITEMS = [
  { id: 'email', label: '이메일 인증', contents: <EmailAuth /> },
  { id: 'phone', label: '휴대폰 인증', contents: <PhoneAuth /> },
];

function IDCertificationPage() {
  return (
    <S.Wrapper>
      <S.Title>
        이메일 인증 또는 휴대폰 인증을 선택하여
        <br /> 본인확인을 진행해 주세요.
      </S.Title>
      <Tabs tabs={TAB_ITEMS} />
      <CustomModal>
        <button>modal open</button>
      </CustomModal>
    </S.Wrapper>
  );
}

export default IDCertificationPage;
