import React from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Head from 'next/head'
import { LayoutPage } from 'components/LayoutPage'
import ThemedProvider, { defaultTheme } from 'components/Theme'
import PageLoadIndicator from 'components/PageLoadIndicator'
import Error from 'next/error'
import Header from 'components/Header'
import { GetHeaderProps } from 'components/Header/getHeaderProps'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { GetUrlResolveProps } from './getUrlResolveProps'

export type ShopLayoutProps = GetHeaderProps & GetUrlResolveProps & { error?: string }

export type PageWithShopLayout<T = Record<string, unknown>> = LayoutPage<T, ShopLayoutProps>

const useStyles = makeStyles({
  animationDiv: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
})

const ShopLayout: PageWithShopLayout['layout'] = ({
  children,
  menu,
  error,
  urlResolver,
  pageTransition,
}) => {
  const classes = useStyles()
  if (!urlResolver || !urlResolver.id) return <Error statusCode={404}>{error}</Error>

  return (
    <ThemedProvider>
      <Head>
        <meta name='theme-color' content={defaultTheme.palette.primary.main} />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <meta name='application-name' content='Reach Digital' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Reach Digital' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <link rel='apple-touch-icon' href='/manifest/icon-512-512.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='shortcut icon' href='/manifest/favicon.ico' />
      </Head>
      <CssBaseline />
      <PageLoadIndicator />

      <Header menu={menu} urlResolver={urlResolver} />

      <AnimateSharedLayout type='crossfade' transition={{ duration: 1 }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={`${urlResolver.type}-${urlResolver.id}`}
            variants={pageTransition}
            initial='initial'
            animate='enter'
            exit='exit'
            className={classes.animationDiv}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </AnimateSharedLayout>
      <script src='https://polyfill.io/v3/polyfill.min.js?features=ResizeObserver' />
    </ThemedProvider>
  )
}

export default ShopLayout
