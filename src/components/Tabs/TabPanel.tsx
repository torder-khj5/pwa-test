import { type Tab } from '@components/Tabs/index.tsx';
import * as S from './styles.tsx';

interface TabPanelProps {
  tabs: Tab[];
  activeTab: string;
}

export default function TabPanel({ tabs, activeTab }: TabPanelProps) {
  const activeTabContent = tabs.find(({ id }) => id === activeTab)?.contents;
  return <S.TabPanel role={'tabpanel'}>{activeTabContent}</S.TabPanel>;
}
