/// <reference types="@graphcommerce/next-ui/types" />

import { responsiveVal } from '@graphcommerce/next-ui'
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from '@mui/material'
import { LazyMotion, domMax } from 'framer-motion'
import { AppPropsType } from 'next/dist/shared/lib/utils'
import { Router } from 'next/router'
import React, { useEffect } from 'react'

const theme = createTheme(
  adaptV4Theme({
    spacings: {
      xxs: responsiveVal(10, 16),
      xs: responsiveVal(12, 20),
      sm: responsiveVal(14, 30),
      md: responsiveVal(16, 50),
      lg: responsiveVal(24, 80),
      xl: responsiveVal(80, 160),
      xxl: responsiveVal(100, 220),
    },
    page: {
      horizontal: responsiveVal(10, 30),
      vertical: responsiveVal(10, 30),
    },
    appShell: {
      headerHeightSm: '46px',
      headerHeightMd: '110px',
      appBarHeightMd: '80px',
      appBarInnerHeightMd: '46px',
    },
  }),
)

export default function MyApp({ Component, pageProps }: AppPropsType<Router>) {
  useEffect(() => document.getElementById('jss-server-side')?.remove())
  return (
    <LazyMotion features={domMax} strict>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </LazyMotion>
  )
}
