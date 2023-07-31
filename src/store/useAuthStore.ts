import { withSelector } from './middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

type AuthState = {
  auth: boolean;
};
interface AuthAction {
  signIn: () => void;
  signOut: () => void;
}

const authStore = () => ({
  auth: false,
});

export const useAuthStore = create(persist(devtools<AuthState>(authStore, { name: 'authStore' }), { name: 'auth' }));

export const useAuthAction = (): AuthAction => ({
  signIn: () => {
    useAuthStore.setState(() => ({ auth: true }));
  },
  signOut: () => {
    useAuthStore.setState(() => ({ auth: false }));
  },
});

export const useAuthSelector = withSelector(useAuthStore);
