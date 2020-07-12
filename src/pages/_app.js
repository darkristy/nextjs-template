import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/GlobalStyles';

const theme = {};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
