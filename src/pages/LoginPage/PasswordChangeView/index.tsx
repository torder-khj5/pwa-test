import { useAuthAction } from '@store/useAuthStore';
import { useInput } from '@hooks/useInput';
import CustomTextInput from '@components/CustomTextInput';
import { CommonButton } from '@components/CommonButton';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PasswordChange() {
  const { value: currentPasswordInputValue, onChange: currentPasswordInputHandler } = useInput('');
  const { value: newPasswordInput, onChange: newPasswordInputHandler } = useInput('');
  const { value: newPasswordConfirmInput, onChange: newPasswordConfirmInputHandler } = useInput('');

  const [isError, setIsError] = useState<string>('에러메세지 노출.');
  // private page 전환을 위해 편의상 추가 했습니다.
  const { signIn } = useAuthAction();
  const navigate = useNavigate();

  const onLoginClickHandler = () => {
    signIn();
    navigate('/notice');
  };

  return (
    <>
      <S.PasswordChangeWrapper>
        <S.TitleWrapper>
          <S.PasswordChangeTitle>비밀번호 변경</S.PasswordChangeTitle>
        </S.TitleWrapper>
        <S.InputWrapper>
          <CustomTextInput
            inputType="password"
            inputValue={currentPasswordInputValue}
            inputChangeEvent={currentPasswordInputHandler}
            isShowHideIcon={true}
            placeholder="현재 비밀번호"
            isError={isError?.length > 0}
            errorMessage={isError}
          />
          <CustomTextInput
            inputType="password"
            inputValue={newPasswordInput}
            inputChangeEvent={newPasswordInputHandler}
            placeholder="새 비밀번호(영문 소문자/숫자/특수문자 조합 8~16자)"
            isShowHideIcon={true}
            isError={isError?.length > 0}
            errorMessage={isError}
          />
          <CustomTextInput
            inputType="password"
            inputValue={newPasswordConfirmInput}
            inputChangeEvent={newPasswordConfirmInputHandler}
            placeholder="새 비밀번호 확인"
            isShowHideIcon={true}
            isError={isError?.length > 0}
            errorMessage={isError}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <CommonButton
            label="비밀번호 변경"
            onButtonClick={onLoginClickHandler}
            priority="secondary"
            btnType="default"
            btnSize="lg"
            className="button-resize"
          />
        </S.ButtonWrapper>
        <S.Caption>다음에 변경 (3개월 뒤 알림)</S.Caption>
      </S.PasswordChangeWrapper>
    </>
  );
}
