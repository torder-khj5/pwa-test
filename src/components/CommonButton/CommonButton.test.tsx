import { themes } from '@styles/theme.ts';
import { CommonButton } from '@components/CommonButton/index.tsx';
import { render, screen, waitFor } from '@testing-library/react';

describe('common button test', () => {
  const clickHandler = jest.fn();
  describe('버튼 사이즈 테스트 ', () => {
    it('버튼 사이즈를 lg로 입력하면 lg 사이즈의 버튼이 렌더링된다.', async () => {
      render(<CommonButton label={'다음'} onButtonClick={clickHandler} btnSize={'lg'} />);

      await waitFor(async () => {
        const btn = await screen.findByRole('button');
        expect(btn.innerHTML).toBe('다음');
        const styles = {
          width: getComputedStyle(btn).width,
          height: getComputedStyle(btn).height,
          fontSize: getComputedStyle(btn).fontSize,
          lineHeight: getComputedStyle(btn).lineHeight,
        };
        expect(styles).toEqual(themes.buttons.size.lg);
      });
    });
    it('버튼 사이즈를 md로 입력하면 md 사이즈의 버튼이 렌더링된다.', async () => {
      render(<CommonButton label={'다음'} onButtonClick={clickHandler} btnSize={'md'} />);

      await waitFor(async () => {
        const btn = await screen.findByRole('button');
        expect(btn.innerHTML).toBe('다음');
        const styles = {
          width: getComputedStyle(btn).width,
          height: getComputedStyle(btn).height,
          fontSize: getComputedStyle(btn).fontSize,
          lineHeight: getComputedStyle(btn).lineHeight,
        };
        expect(styles).toEqual(themes.buttons.size.md);
      });
    });
    it('버튼 사이즈를 sm로 입력하면 sm 사이즈의 버튼이 렌더링된다.', async () => {
      render(<CommonButton label={'다음'} onButtonClick={clickHandler} btnSize={'sm'} />);

      await waitFor(async () => {
        const btn = await screen.findByRole('button');
        expect(btn.innerHTML).toBe('다음');
        const styles = {
          width: getComputedStyle(btn).width,
          height: getComputedStyle(btn).height,
          fontSize: getComputedStyle(btn).fontSize,
          lineHeight: getComputedStyle(btn).lineHeight,
        };
        expect(styles).toEqual(themes.buttons.size.sm);
      });
    });
    it('버튼 사이즈를 xs로 입력하면 xs 사이즈의 버튼이 렌더링된다.', async () => {
      render(<CommonButton label={'다음'} onButtonClick={clickHandler} btnSize={'xs'} />);

      await waitFor(async () => {
        const btn = await screen.findByRole('button');
        expect(btn.innerHTML).toBe('다음');
        const styles = {
          width: getComputedStyle(btn).width,
          height: getComputedStyle(btn).height,
          fontSize: getComputedStyle(btn).fontSize,
          lineHeight: getComputedStyle(btn).lineHeight,
        };
        expect(styles).toEqual(themes.buttons.size.xs);
      });
    });
  });
});
