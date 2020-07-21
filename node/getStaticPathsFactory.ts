import { GetStaticPaths } from 'next'
import { GetStaticPathsDocument } from 'generated/apollo'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

const getStaticPathsFactory: (
  baseUrl: string,
  locale: GQLLocale,
  client: ApolloClient<NormalizedCacheObject>,
) => GetStaticPaths = (baseUrl, locale, client) => async () => {
  const queryResult = await client.query<GQLGetStaticPathsQuery, GQLGetStaticPathsQueryVariables>({
    query: GetStaticPathsDocument,
    variables: { startsWith: `${baseUrl}`, locale },
  })

  const paths = queryResult.data?.pages.map((page) => page.url) ?? []
  return {
    paths,
    fallback: false,
  }
}

export default getStaticPathsFactory
