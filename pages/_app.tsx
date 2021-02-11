import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import DarkTheme from '../styles/Theme/Dark';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <Head>
          <meta charSet="utf-8" />
          <title>BHSDev - Portifolio</title>
          <meta
            name="description"
            content="Apenas mais um programador apaixonado pela tecnologia de desenvolvimento!!"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="content-language" content="pt-br" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
