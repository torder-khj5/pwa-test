import { withSelector } from '@store/middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

type CertificationType = 'email' | 'phone';

type CertificationState = {
  authType: CertificationType;
  email: string;
  phone: string;
};

interface CertAction {
  setAuthType: (type: CertificationType) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
}
const CertificationStore = () => ({
  authType: 'email' as CertificationType,
  email: '',
  phone: '',
});
export const useCertificationStore = create(
  persist(devtools<CertificationState>(CertificationStore, { name: 'certificationStore' }), { name: 'certification' })
);

export const useCertAction = (): CertAction => ({
  setAuthType: (type: CertificationType) => {
    useCertificationStore.setState(() => ({ authType: type }));
  },
  setPhone: (phone) => useCertificationStore.setState({ phone }),
  setEmail: (email) => useCertificationStore.setState({ email }),
});

export const useCertSelector = withSelector(useCertificationStore);
