// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const OrderCardItemFragmentDoc: DocumentNode<OrderCardItemFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'OrderCardItem' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderItemInterface' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'product_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'product_sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'product_url_key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity_ordered' } },
        ],
      },
    },
  ],
}
export type OrderCardItem_DownloadableOrderItem_Fragment = Pick<
  Types.DownloadableOrderItem,
  'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'
>

export type OrderCardItem_BundleOrderItem_Fragment = Pick<
  Types.BundleOrderItem,
  'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'
>

export type OrderCardItem_OrderItem_Fragment = Pick<
  Types.OrderItem,
  'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'
>

export type OrderCardItemFragment =
  | OrderCardItem_DownloadableOrderItem_Fragment
  | OrderCardItem_BundleOrderItem_Fragment
  | OrderCardItem_OrderItem_Fragment
