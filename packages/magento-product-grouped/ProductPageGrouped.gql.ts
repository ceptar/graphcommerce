// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import {
  ProductListItem_VirtualProduct_Fragment,
  ProductListItem_SimpleProduct_Fragment,
  ProductListItem_DownloadableProduct_Fragment,
  ProductListItem_BundleProduct_Fragment,
  ProductListItem_GroupedProduct_Fragment,
  ProductListItem_ConfigurableProduct_Fragment,
  ProductListItemFragmentDoc,
} from '../magento-product/ProductListItem.gql'

export const ProductPageGroupedFragmentDoc: DocumentNode<ProductPageGroupedFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductPageGrouped' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'GroupedProduct' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductListItem' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'position' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'qty' } },
              ],
            },
          },
        ],
      },
    },
    ...ProductListItemFragmentDoc.definitions,
  ],
}
export type ProductPageGroupedFragment = {
  items?: Types.Maybe<
    Array<
      Types.Maybe<
        Pick<Types.GroupedProductItem, 'position' | 'qty'> & {
          product?: Types.Maybe<
            | Pick<Types.VirtualProduct, 'name'>
            | Pick<Types.SimpleProduct, 'name'>
            | Pick<Types.DownloadableProduct, 'name'>
            | Pick<Types.BundleProduct, 'name'>
            | Pick<Types.GroupedProduct, 'name'>
            | Pick<Types.ConfigurableProduct, 'name'>
          >
        }
      >
    >
  >
} & ProductListItem_GroupedProduct_Fragment
