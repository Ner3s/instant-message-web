import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from 'styled-components';

import { AppProvider } from '@/contexts';

import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Instant Message</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project for sending messages between employees of a company"
        />
      </Head>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
