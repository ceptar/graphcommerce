import { Container, makeStyles, Theme } from '@material-ui/core'
import { PageOptions } from '@reachdigital/framer-next-pages'
import { SheetVariant } from '@reachdigital/framer-sheet'
import { StoreConfigDocument } from '@reachdigital/magento-store'
import ContentHeader from '@reachdigital/next-ui/AppShell/ContentHeader'
import ContentHeaderPrimaryAction from '@reachdigital/next-ui/AppShell/ContentHeaderPrimaryAction'
import IconHeader from '@reachdigital/next-ui/IconHeader'
import { GetStaticProps } from '@reachdigital/next-ui/Page/types'
import { iconPersonAlt } from '@reachdigital/next-ui/icons'
import { GetStaticPaths } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import SheetShell, { SheetShellProps } from '../../../components/AppShell/SheetShell'
import { DefaultPageDocument, DefaultPageQuery } from '../../../components/GraphQL/DefaultPage.gql'
import apolloClient from '../../../lib/apolloClient'

type Props = { url: string } & DefaultPageQuery
type RouteProps = { url: string[] }
type GetPageStaticPaths = GetStaticPaths<RouteProps>
type GetPageStaticProps = GetStaticProps<SheetShellProps, Props, RouteProps>

// TODO: throw away. for testing only
const useStyles = makeStyles((theme: Theme) => ({
  hoi: {
    height: '2000px',
  },
}))

function AppShellTextOverlay({ url, pages }: Props) {
  const title = `Overlay ${url?.charAt(0).toUpperCase() + url?.slice(1)}`
  const classes = useStyles()

  // TODO: in sheet context as 'sheetTitle' ??
  // or: useContentHeaderAnimation() hook?
  const titleRefInternal = useRef<HTMLDivElement>()
  const [titleRef, setTitleRef] = useState<React.MutableRefObject<HTMLDivElement | undefined>>()
  const titleRefCallback: React.RefCallback<HTMLDivElement> = (node) => {
    titleRefInternal.current = node ?? undefined
    setTitleRef(titleRefInternal)
  }
  const [animateStart, setAnimateStart] = useState<number | undefined>(undefined)

  useEffect(() => {
    setAnimateStart(
      ((titleRef?.current?.offsetTop ?? 0) + (titleRef?.current?.clientHeight ?? 0)) * 0.5,
    )
  }, [titleRef])

  return (
    <div>
      <ContentHeader
        primary={<ContentHeaderPrimaryAction href='/test/overlay/bottom/2' text='Next' />}
        // logo={<Logo />}
        title={
          <IconHeader
            src={iconPersonAlt}
            title={title}
            alt={title}
            size='medium'
            iconSize={32}
            iconSizeMobile={24}
            stayInline
            noMargin
          />
        }
        animateStart={animateStart}
        // divider={<ContentHeaderStepper steps={3} currentStep={1} />}
      />
      <>
        <div ref={titleRefCallback}>
          <IconHeader src={iconPersonAlt} title={title} alt={title} size='large' />
        </div>
        <Container maxWidth='md'>
          <p className={classes.hoi}>Content here</p>
        </Container>
      </>
    </div>
  )
}

const pageOptions: PageOptions<SheetShellProps> = {
  overlayGroup: 'test',
  SharedComponent: SheetShell,
  sharedProps: { size: 'max' },
}
AppShellTextOverlay.pageOptions = pageOptions

export default AppShellTextOverlay

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetPageStaticPaths = async ({ locales = [] }) => {
  if (process.env.NODE_ENV === 'development') return { paths: [], fallback: 'blocking' }

  const urls = ['1']

  const paths = locales
    .map((locale) => urls.map((url) => ({ params: { url: [url] }, locale })))
    .flat(1)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetPageStaticProps = async ({ params, locale }) => {
  const [variant] = params?.url ?? 'bottom'
  const url = params?.url.join('/') ?? ''

  const client = apolloClient(locale, true)
  const staticClient = apolloClient(locale)

  const conf = client.query({ query: StoreConfigDocument })
  const page = staticClient.query({
    query: DefaultPageDocument,
    variables: {
      url,
      rootCategory: (await conf).data.storeConfig?.root_category_uid ?? '',
    },
  })

  const variants = ['top', 'bottom', 'left', 'right']

  return {
    props: {
      url,
      ...(await page).data,
      apolloState: await conf.then(() => client.cache.extract()),
      variant: variants.includes(variant) ? (variant as SheetVariant) : 'bottom',
    },
  }
}
