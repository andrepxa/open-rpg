import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../styles/createEmotionCache'
import Head from 'next/head'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import theme from '../styles/theme'

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>MUI5 Nextjs</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
