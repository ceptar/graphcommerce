// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const ProductStaticPathsDocument: DocumentNode<
  ProductStaticPathsQuery,
  ProductStaticPathsQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProductStaticPaths' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'ObjectValue', fields: [] },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pageSize' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'currentPage' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page_info' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'current_page' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'total_pages' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total_count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url_key' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type ProductStaticPathsQueryVariables = Types.Exact<{
  currentPage: Types.Scalars['Int']
  pageSize: Types.Scalars['Int']
}>

export type ProductStaticPathsQuery = {
  products?: Types.Maybe<
    Pick<Types.Products, 'total_count'> & {
      page_info?: Types.Maybe<Pick<Types.SearchResultPageInfo, 'current_page' | 'total_pages'>>
      items?: Types.Maybe<
        Array<
          Types.Maybe<
            | ({ __typename: 'VirtualProduct' } & Pick<Types.VirtualProduct, 'url_key'>)
            | ({ __typename: 'SimpleProduct' } & Pick<Types.SimpleProduct, 'url_key'>)
            | ({ __typename: 'DownloadableProduct' } & Pick<Types.DownloadableProduct, 'url_key'>)
            | ({ __typename: 'BundleProduct' } & Pick<Types.BundleProduct, 'url_key'>)
            | ({ __typename: 'GroupedProduct' } & Pick<Types.GroupedProduct, 'url_key'>)
            | ({ __typename: 'ConfigurableProduct' } & Pick<Types.ConfigurableProduct, 'url_key'>)
          >
        >
      >
    }
  >
}
