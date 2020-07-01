import React from 'react'
import ShopLayout, { PageWithShopLayout, ShopLayoutProps } from 'components/ShopLayout'
import getNavigationProps from 'components/ShopLayout/getNavigationProps'
import { GetStaticProps, GetStaticPaths } from 'next'
import getUrlResolveProps from 'components/ShopLayout/getUrlResolveProps'
import getCmsPageProps, { GetCmsPageProps } from 'components/CmsPage/getCmsPageProps'
import NextError from 'next/error'
import CmsPageMeta from 'components/CmsPageMeta'
import CmsPageContent from 'components/CmsPageContent'

const PageWithLayout: PageWithShopLayout<GetCmsPageProps> = ({ cmsPage, storeConfig }) => {
  if (!cmsPage) return <NextError statusCode={404} />

  return (
    <>
      <CmsPageMeta {...cmsPage} {...storeConfig} />
      <CmsPageContent {...cmsPage} />
    </>
  )
}

PageWithLayout.layout = ShopLayout

export default PageWithLayout

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { url: 'home' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  ShopLayoutProps & GetCmsPageProps,
  { url: string }
> = async (ctx) => {
  if (!ctx.params) throw Error('No params')
  const urlResolve = getUrlResolveProps({ urlKey: ctx.params.url })
  const navigationProps = getNavigationProps()
  const cmsPageProps = getCmsPageProps(urlResolve)

  return {
    props: {
      ...(await urlResolve),
      ...(await navigationProps),
      ...(await cmsPageProps),
    },
  }
}
