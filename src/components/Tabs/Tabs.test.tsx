import { Tabs } from '@components/Tabs/index.tsx';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

describe('Tabs test tsx', () => {
  const FIRST_TAB_CONTENTS = <p>first tab</p>;
  const SECOND_TAB_CONTENTS = <p>second tab</p>;
  const TAB_ITEMS = [
    { id: 'email', label: '이메일 인증', contents: FIRST_TAB_CONTENTS },
    { id: 'phone', label: '휴대폰 인증', contents: SECOND_TAB_CONTENTS },
  ];

  test('Tabs.tsx가 랜더링되고 넘긴 item 값으로 출력된다.', async () => {
    render(<Tabs tabs={TAB_ITEMS} />);

    await screen.findByRole('tablist');

    const tabs = await screen.findAllByRole('tab');
    expect(tabs[0].innerHTML).toBe('이메일 인증');
    expect(tabs[1].innerHTML).toBe('휴대폰 인증');
  });

  it('item 클릭시 tab contents 바뀐다.', async () => {
    render(<Tabs tabs={TAB_ITEMS} />);

    await screen.findByRole('tablist');
    await screen.findAllByRole('tab');

    const tabs = await screen.findAllByRole('tab');
    await userEvent.click(tabs[0]);

    const tabContents = await waitFor(() => screen.getByRole('tabpanel'));
    expect(tabContents).not.toBeUndefined();
    expect(tabContents.textContent).toBe(FIRST_TAB_CONTENTS.props.children);
  });
});
