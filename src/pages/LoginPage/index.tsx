import * as S from './styles';
import PasswordChange from './PasswordChangeView';
import LoginView from './LoginView';
import { useState } from 'react';

type countryList = { countryCode: string; countryName: string };

export default function LoginPage() {
  const [isPasswordChangeRequired, setIsPasswordChangeRequired] = useState<boolean>(false);
  const [lastLoginChannel, setLastLoginChannel] = useState<string>('');

  return <S.LoginContainer>{isPasswordChangeRequired ? <PasswordChange /> : <LoginView />}</S.LoginContainer>;
}
