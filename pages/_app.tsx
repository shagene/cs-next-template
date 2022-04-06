import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utility/createEmotionCache';
import discoThemeOptions from '../styles/theme/discoThemeOptions';
import genoaThemeOptions from "../styles/theme/genoaThemeOptions";
import '../styles/globals.css';
import Layout from "../components/layouts/Layout";


interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const discoTheme = createTheme(discoThemeOptions);
const genoaTheme = createTheme(genoaThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={discoTheme}>
          <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>

            {/*<Component {...pageProps} />*/}
        </ThemeProvider>
      </CacheProvider>
  );
};

export default MyApp;