import IDCertificationPage from '@pages/IDCertificationPage/index.tsx';
import { render, screen } from '@testing-library/react';

describe('본인인증 페이지 test', () => {
  it('이메일 인증, 휴대폰 인증 label이 적힌 탭이 렌더링된다.', async () => {
    render(<IDCertificationPage />);

    await screen.findByRole('tablist');

    const tabs = await screen.findAllByRole('tab');
    expect(tabs[0].innerHTML).toBe('이메일 인증');
    expect(tabs[1].innerHTML).toBe('휴대폰 인증');
  });
});
