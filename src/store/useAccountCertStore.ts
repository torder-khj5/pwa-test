import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

type AccountCertState = {
  id: string;
};

interface AccountCertAction {
  setId: (id: string) => void;
}

const AccountCertStore = () => ({ id: '' });
export const useAccountCertStore = create(devtools<AccountCertState>(AccountCertStore, { name: 'certStore' }));

export const useAccountCertAction = (): AccountCertAction => ({
  setId: (id: string) => useAccountCertStore.setState({ id }),
});
