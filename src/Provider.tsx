import { themeVariableSets } from '@styles/themes';
import { useThemeSelector } from '@store/useThemeStore';
import React, { type PropsWithChildren } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError(err) {
        console.log({ err });
      },
    },
    mutations: {
      onError(err) {
        console.log({ err }, '전체 포괄 오류');
      },
    },
  },
});

export default function Provider({ children }: PropsWithChildren) {
  const { mode } = useThemeSelector(['mode']);
  const theme = themeVariableSets[mode];

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
