import { useCertAction, useCertSelector } from '@store/useCertificationStore.ts';
import * as S from '@pages/IDCertificationPage/styles.tsx';
import CustomTextInput from '@components/CustomTextInput';

export default function PhoneAuth() {
  const { phone } = useCertSelector(['phone']);
  const { setPhone } = useCertAction();

  return (
    <S.InputContainer>
      <CustomTextInput
        textLabel={'휴대폰번호'}
        inputChangeEvent={(e) => setPhone(e.target.value)}
        inputValue={phone}
        placeholder={'휴대폰 번호("-")없이 입력'}
      />
    </S.InputContainer>
  );
}
