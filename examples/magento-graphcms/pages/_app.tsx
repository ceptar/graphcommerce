import { ApolloProvider, useQuery } from '@apollo/client'
import { FramerNextPages } from '@graphcommerce/framer-next-pages'
// import { GoogleAnalyticsScript } from '@graphcommerce/googleanalytics'
// import { GoogleRecaptchaV3Script } from '@graphcommerce/googlerecaptcha'
// import { GoogleTagManagerScript } from '@graphcommerce/googletagmanager'
import { LinguiProvider } from '@graphcommerce/lingui-next'
import { StoreConfigDocument } from '@graphcommerce/magento-store'
import { AppProps, GlobalHead, PageLoadIndicator } from '@graphcommerce/next-ui'
import { CssBaseline, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material'
import { LazyMotion } from 'framer-motion'
import { AppPropsType } from 'next/dist/shared/lib/utils'
import React, { useEffect, useState } from 'react'
import { lightTheme, darkTheme } from '../components/Theme/ThemedProvider'
import apolloClient from '../lib/apolloClientBrowser'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export type PageRendererProps = Omit<AppPropsType, 'router'> & {
  Layout: React.ComponentType<AppPropsType>
  layoutProps: any
}

const Head = () => (
  <GlobalHead name={useQuery(StoreConfigDocument).data?.storeConfig?.website_name ?? ''} />
)

export default function ThemedApp(props: Omit<AppPropsType, 'pageProps'> & AppProps) {
  const { pageProps, router } = props
  const { locale, asPath } = router

  useEffect(() => document.getElementById('jss-server-side')?.remove(), [])

  // Hack for the demo to allow using darkmode without any fancy darkmode toggles
  const [darkMode, setDarkMode] = useState(asPath.includes('dark'))
  useEffect(() => {
    setDarkMode(asPath.includes('dark'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const client = apolloClient(locale, true, pageProps.apolloState)

  return (
    <LazyMotion
      features={async () => (await import('@graphcommerce/next-ui/Page/framerFeatures')).default}
      strict
    >
      {/* <GoogleAnalyticsScript /> */}
      {/* <GoogleRecaptchaV3Script /> */}
      {/* <GoogleTagManagerScript /> */}
      <LinguiProvider
        key={locale}
        locale={locale}
        loader={(l) => import(`../locales/${l}.po`)}
        ssrLoader={(l) =>
          typeof window === 'undefined' ? require(`../locales/${l}.po`) : { messages: {} }
        }
      >
        <ApolloProvider client={client}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
              <Head />
              <CssBaseline />
              <PageLoadIndicator />
              <FramerNextPages {...props} />
            </ThemeProvider>
          </StyledEngineProvider>
        </ApolloProvider>
      </LinguiProvider>
    </LazyMotion>
  )
}
