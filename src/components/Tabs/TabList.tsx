import * as S from '@components/Tabs/styles.tsx';
import { type Tab } from '@components/Tabs/index.tsx';

interface TabListProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabList({ tabs, activeTab, onTabChange }: TabListProps) {
  return (
    <S.TabHeader role={'tablist'}>
      {tabs.map(({ id, label }) => (
        <S.TabButton key={'tab-Btn-' + id} onClick={() => onTabChange(id)} role={'tab'} active={activeTab === id}>
          {label}
        </S.TabButton>
      ))}
    </S.TabHeader>
  );
}
