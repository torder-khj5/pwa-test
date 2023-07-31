import * as S from '@pages/IDCertificationPage/styles.tsx';
import { useTimer } from '@hooks/useTimer.tsx';
import CustomTextInput from '@components/CustomTextInput';
import { CommonButton } from '@components/CommonButton';
import { requestEmailCert } from '@api/cert.ts';
import { type ChangeEvent, useCallback, useState } from 'react';

interface CertState {
  isSend: boolean;
  reSendCount: number;
  certCode: string;
  modalMessage: string;
  email: string;
}

export default function EmailAuth() {
  const { remainTime, startTimer, reStartTimer, resetTimer } = useTimer({ initTime: 5 * 60 });

  const [certState, setCertState] = useState<CertState>({
    isSend: false,
    reSendCount: 0,
    certCode: '',
    modalMessage: '',
    email: '',
  });

  const onClickSendRequest = useCallback(async () => {
    setCertState((prevState: CertState) => ({
      ...prevState,
      isSend: true,
    }));

    try {
      await requestEmailCert(certState.email);
      startTimer();
    } catch (err) {
      console.error('Error: ', err);
      resetTimer();
    }
  }, [certState.email, setCertState, startTimer, resetTimer]);

  const onClickReSendRequest = useCallback(async () => {
    try {
      await requestEmailCert(certState.email);
      setCertState((prevState) => ({
        ...prevState,
        modalMessage: '인증 메일이 재전송 되었습니다.',
        reSendCount: prevState.reSendCount + 1,
      }));
      reStartTimer();
    } catch (err) {
      console.error('Error: ', err);
    }
  }, [certState.email, setCertState, reStartTimer]);

  const changeCertCode = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCertState((prevState) => ({
        ...prevState,
        certCode: e.target.value,
      }));
    },
    [setCertState]
  );

  const emailButtonLabel = certState.isSend ? '인증 재요청' : '인증요청';

  return (
    <S.InputContainer>
      <CustomTextInput
        textLabel={'이메일'}
        inputChangeEvent={(e) =>
          setCertState((prevState) => ({
            ...prevState,
            email: e.target.value,
          }))
        }
        inputValue={certState.email}
        placeholder={'이메일'}
        innerComponent={
          <CommonButton
            onButtonClick={certState.isSend ? onClickReSendRequest : onClickSendRequest}
            label={emailButtonLabel}
            btnSize={'xs'}
            btnType={'line'}
            priority={'secondary'}
          />
        }
      />
      {certState.isSend && (
        <S.InputContainer>
          <CustomTextInput
            textLabel={'인증번호'}
            inputChangeEvent={changeCertCode}
            inputValue={certState.certCode}
            placeholder={'인증번호'}
            innerComponent={<div style={{ color: 'red' }}>{remainTime}</div>}
          />
        </S.InputContainer>
      )}
      <CommonButton
        onButtonClick={() => console.log('next')}
        label={'다음'}
        btnSize={'lg'}
        btnType={'line'}
        priority={'secondary'}
        isDisabled={true}
      />
      {/* <ModalWrapper label={certState.modalMessage} sizeType={'md'} /> */}
    </S.InputContainer>
  );
}
