import * as S from '@components/Tabs/styles.tsx';
import TabPanel from '@components/Tabs/TabPanel.tsx';
import TabList from '@components/Tabs/TabList.tsx';
import { type ReactNode, useState } from 'react';

export type Tab = {
  id: string;
  label: string;
  contents: ReactNode;
};

interface TabsProps {
  tabs: Tab[];
  tabChangeHandler?: () => void;
}

export function Tabs({ tabs, tabChangeHandler }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    tabChangeHandler?.();
  };

  return (
    <S.TabsContainer>
      <TabList tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <TabPanel tabs={tabs} activeTab={activeTab} />
    </S.TabsContainer>
  );
}
