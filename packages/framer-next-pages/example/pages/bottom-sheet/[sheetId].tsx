/* eslint-disable @typescript-eslint/require-await */
import { PageOptions } from '@reachdigital/framer-next-pages'
import SheetContext from '@reachdigital/framer-next-pages/Sheet/SheetContext'
import SheetPanel from '@reachdigital/framer-next-pages/Sheet/SheetPanel'
import { useIsPresent } from 'framer-motion'
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import React from 'react'
import { data } from '../../components/Grid'
import StackDebug from '../../components/StackedDebugger'

function SheetPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { sheetId } = props
  const isPresent = useIsPresent()

  return (
    <SheetContext snapPoints={[300, 40, -100]}>
      <SheetPanel open={isPresent}>
        <StackDebug />
        <div style={{ height: 3000 }}>{sheetId}</div>
      </SheetPanel>
    </SheetContext>
  )
}

SheetPage.pageOptions = { overlay: 'sheet' } as PageOptions

export default SheetPage

type ParsedUrlQuery = { sheetId: string }
export async function getStaticPaths(): Promise<GetStaticPathsResult<ParsedUrlQuery>> {
  return {
    paths: data.map((articleId) => ({ params: { sheetId: articleId.toString() } })),
    fallback: false,
  }
}

export async function getStaticProps(ctx: GetStaticPropsContext<ParsedUrlQuery>) {
  return {
    props: ctx.params,
  }
}
