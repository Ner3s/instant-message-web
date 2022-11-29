import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';
import { render, RenderResult } from '@testing-library/react';

const customRender = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
