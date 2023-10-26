import { withSelector } from '@store/middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

type AppEnvState = {
  isMobile: boolean;
  openMenuId: string;
  language: string;
  companyInfo: string | null;
  deploymentVersion: string | null;
};

interface AppEnvActions {
  setIsMobile: (isMobile: boolean) => void;
  setOpenMenu: (openMenuId: string) => void;
  setLanguage: (language: string) => void;
  setCompanyInfo: (info: string) => void;
  setDeploymentVersion: (version: string) => void;
}

const AppEnvStore = () => ({
  isMobile: false,
  openMenuId: '',
  language: 'ko',
  companyInfo: null,
  deploymentVersion: null,
});

export const useAppEnvStore = create(
  persist(devtools<AppEnvState>(AppEnvStore, { name: 'appEnvStore' }), { name: 'appEnv' })
);

export const useAppEnvActions = (): AppEnvActions => ({
  setIsMobile: (isMobile: boolean) => useAppEnvStore.setState({ isMobile }),
  setOpenMenu: (openMenuId: string) => useAppEnvStore.setState({ openMenuId }),
  setLanguage: (language: string) => useAppEnvStore.setState({ language }),
  setCompanyInfo: (info: string) => useAppEnvStore.setState({ companyInfo: info }),
  setDeploymentVersion: (version: string) => useAppEnvStore.setState({ deploymentVersion: version }),
});

export const useAppEnvSelector = withSelector(useAppEnvStore);
