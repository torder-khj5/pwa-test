import { useAuthAction } from '@store/useAuthStore';
import { useInput } from '@hooks/useInput';
import { APPLE_LOGIN_URL, GOOGLE_LOGIN_URL, KAKAO_LOGIN_URL, NAVER_LOGIN_URL } from '@constants/url';
import RadioWithLabel from '@components/RadioWithLabel';
import CustomTextInput from '@components/CustomTextInput';
import { CommonButton } from '@components/CommonButton';
import Icon from '@components/@shared/Icon';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function bytesToGB(bytes: number): number {
  return bytes / (1024 * 1024 * 1024);
}

export default function LoginView() {
  const { value: idInputValue, onChange: idInputHandler } = useInput('');
  const { value: passwordInput, onChange: passwordInputHandler } = useInput('');
  const [isCheckSaveId, setIsCheckSaveId] = useState(false);
  const [isError, setIsError] = useState<string>('');

  // private page 전환을 위해 편의상 추가 했습니다.
  const { signIn } = useAuthAction();
  const navigate = useNavigate();

  const onLoginClickHandler = () => {
    isValidPassword(passwordInput);
    signIn();
    navigate('/notice');
  };

  const toggleRadioClick = () => {
    setIsCheckSaveId(!isCheckSaveId);
  };

  function isValidPassword(password: string) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?~-])[a-z0-9!@#$%^&*()_+{}|:<>?~-]{8,16}$/;
    if (!passwordRegex.test(password)) {
      setIsError('에러메세지 노출.');
    }
  }

  const onClickBtn = () => {
    console.log('click!!');
    const androidInterface = (window as any).Android;
    if (androidInterface) {
      console.log('android click!!');
      getStorageInfo().then(({ remain }) => {
        console.log(remain);
        window.Android.showToast(`앞으로 ${remain} GB 사용할 수 있습니다.`);
        window.Android.showToast('Hello Native Callback');
      });
    }
  };

  const getStorageInfo = async () => {
    if (navigator?.storage && navigator.storage.estimate) {
      const quota = await navigator.storage.estimate();
      if (quota?.usage !== undefined && quota?.quota !== undefined) {
        const percentageUsed = (quota.usage / quota.quota) * 100;
        console.log(`사용할 수 있는 용량의 ${percentageUsed.toFixed(2)}%를 사용하고 있습니다.`);

        const remaining = quota.quota - quota.usage;
        const gb = bytesToGB(remaining);
        console.log(`앞으로 ${remaining} 바이트 / ${gb.toFixed(2)} GB 사용할 수 있습니다.`);
        return {
          remain: gb.toFixed(2),
        };
      } else {
        console.log('no storage');
        return {
          remain: '0',
        };
      }
    } else {
      console.log('no navigaator.storage');
      return {
        remain: '0',
      };
    }
  };

  return (
    <>
      <S.LoginWrapper>
        <S.LogoWrapper>
          <Icon name="로고_허브티_검정색" size={107}></Icon>
        </S.LogoWrapper>
        <S.InputWrapper>
          <CustomTextInput
            errorMessage={'에러 메세지 노출.'}
            inputValue={idInputValue}
            inputChangeEvent={idInputHandler}
            isShowDeleteIcon={idInputValue.length > 0}
            placeholder="아이디(영문 소문자/숫자 조합 5~2자, 휴대폰 번호, 이메일)"
          />
          <CustomTextInput
            inputType="password"
            inputValue={passwordInput}
            inputChangeEvent={passwordInputHandler}
            placeholder="비밀번호(영문 소문자/숫자/특수문자 조합 8~16자)"
            isShowHideIcon={true}
            isError={isError?.length > 0}
            errorMessage={isError}
          />
          <RadioWithLabel
            id="1"
            type="checkbox"
            label="아이디 저장"
            checked={isCheckSaveId}
            handler={toggleRadioClick}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <CommonButton label="로그인" onButtonClick={onLoginClickHandler} btnSize="lg" className="button-resize" />
        </S.ButtonWrapper>
        <S.ExternalWrapper>
          <S.ExternalSpan>아이디 찾기</S.ExternalSpan>
          <S.ExternalSpanDivider>|</S.ExternalSpanDivider>
          <S.ExternalSpan>비밀번호 찾기</S.ExternalSpan>
          <S.ExternalSpanDivider>|</S.ExternalSpanDivider>
          <S.ExternalSpan onClick={onClickBtn}>회원가입</S.ExternalSpan>
        </S.ExternalWrapper>
        <S.SocialLoginWrapper>
          <S.SocialLoginTitle>
            <S.SocialLoginTitleSpan>SNS 계정으로 로그인할 수 있어요</S.SocialLoginTitleSpan>
            <S.HorizontalBar />
          </S.SocialLoginTitle>
          <S.SocialLoginIconWrapper>
            <S.SocialLoginLink href={KAKAO_LOGIN_URL}>
              <Icon name="로고_카카오톡" size={48} />
            </S.SocialLoginLink>
            <S.SocialLoginLink href={NAVER_LOGIN_URL}>
              <Icon name="로고_네이버" size={48} />
            </S.SocialLoginLink>
            <S.SocialLoginLink href={GOOGLE_LOGIN_URL}>
              <Icon name="로고_구글" size={48} />
            </S.SocialLoginLink>
            <S.SocialLoginLink href={APPLE_LOGIN_URL}>
              <Icon name="로고_애플" size={48} />
            </S.SocialLoginLink>
          </S.SocialLoginIconWrapper>
        </S.SocialLoginWrapper>
      </S.LoginWrapper>
    </>
  );
}
