import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import {
  autoUpdate,
  flip,
  useFloating,
  useInteractions,
  useListNavigation,
  useTypeahead,
  useClick,
  useListItem,
  useDismiss,
  useRole,
  FloatingFocusManager,
  FloatingList,
  type Placement,
} from '@floating-ui/react';

export interface ListBoxOptions {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onChange?: (open: boolean) => void;
  offset?: number;
}

export function useListBox({
  initialOpen = false,
  placement = 'bottom-start',
  open: controlledOpen,
  onChange: setControlledOpen,
  offset: offsetSize = 5,
}: ListBoxOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      // offset(offsetSize),
      flip(),
      // shift({ padding: 5 }),
      // size({
      //   apply({ rects, elements, availableHeight }) {
      //     Object.assign(elements.floating.style, {
      //       maxHeight: `${availableHeight}px`,
      //       minWidth: `${rects.reference.width}px`,
      //     });
      //   },
      //   padding: 10,
      // }),
    ],
  });

  const context = data.context;

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const handleSelect = useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
      setOpen(false);
      if (index !== null) {
        setSelectedLabel(labelsRef.current[index]);
      }
    },
    [setOpen]
  );

  function handleTypeaheadMatch(index: number | null) {
    if (open) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });

  const interactions = useInteractions([listNav, typeahead, click, dismiss, role]);

  return useMemo(
    () => ({
      open,
      setOpen,
      activeIndex,
      selectedIndex,
      selectedLabel,
      ...data,
      ...interactions,
      handleSelect,
    }),
    [open, setOpen, activeIndex, selectedIndex, selectedLabel, data, interactions, handleSelect]
  );
}

type ContextType = ReturnType<typeof useListBox> | null;

export const ListBoxContext = createContext<ContextType>(null);

export const useListBoxContext = () => {
  const context = useContext(ListBoxContext);

  if (context == null) {
    throw new Error('ListBox components must be wrapped in <ListBox />');
  }

  return context;
};
