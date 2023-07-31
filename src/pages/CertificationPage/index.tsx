import IDCertificationPage from '@pages/IDCertificationPage';
import { useState } from 'react';

type Certification_Type = '본인인증' | '계정설정' | '정보입력';
export default function CertificationPage() {
  const [step, setStep] = useState<Certification_Type>('본인인증');
  return <main>{step === '본인인증' && <IDCertificationPage />}</main>;
}
