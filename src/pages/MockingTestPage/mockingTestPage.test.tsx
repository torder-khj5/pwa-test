import MockingTestPage from '@pages/MockingTestPage/index.tsx';
import { server } from '../../__mocks__/server.ts';
import { render, screen, waitFor } from '@testing-library/react';

describe('mockingTestPage test tsx', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('mocking server 구동 확인', () => {
    console.log('msw mocking!');
    render(<MockingTestPage />);
    waitFor(() => expect(screen.getAllByText('title is')).toBe(3));
  });
});
