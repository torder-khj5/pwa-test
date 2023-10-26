import { ListBoxContext, type ListBoxOptions, useListBox } from './useListBox';
import Options from './Options';
import OptionGroup from './OptionGroup';
import Option from './Option';
import Button from './Button';
import { type PropsWithChildren } from 'react';

export default function ListBox({ children, ...options }: PropsWithChildren<ListBoxOptions>) {
  const listBox = useListBox(options);
  return <ListBoxContext.Provider value={listBox}>{children}</ListBoxContext.Provider>;
}

ListBox.Button = Button;
ListBox.Options = Options;
ListBox.OptionGroup = OptionGroup;
ListBox.Option = Option;
