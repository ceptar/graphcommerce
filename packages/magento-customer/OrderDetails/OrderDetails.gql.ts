// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import { MoneyFragment, MoneyFragmentDoc } from '../../magento-store/Money.gql'

export const OrderDetailsFragmentDoc: DocumentNode<OrderDetailsFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'OrderDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerOrder' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order_date' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoices' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shipments' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tracking' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'carrier' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'payment_methods' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'additional_data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'postcode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country_code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'region_id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shipping_address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'postcode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country_code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'region_id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'total' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subtotal' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total_shipping' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'discounts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'amount' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'grand_total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total_tax' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'taxes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'amount' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total_shipping' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MoneyFragmentDoc.definitions,
  ],
}
export type OrderDetailsFragment = Pick<Types.CustomerOrder, 'number' | 'order_date'> & {
  invoices: Array<Types.Maybe<Pick<Types.Invoice, 'id' | 'number'>>>
  shipments?: Types.Maybe<
    Array<
      Types.Maybe<
        Pick<Types.OrderShipment, 'id'> & {
          tracking?: Types.Maybe<
            Array<Types.Maybe<Pick<Types.ShipmentTracking, 'title' | 'carrier' | 'number'>>>
          >
        }
      >
    >
  >
  payment_methods?: Types.Maybe<
    Array<
      Types.Maybe<{
        additional_data?: Types.Maybe<Array<Types.Maybe<Pick<Types.KeyValue, 'name' | 'value'>>>>
      }>
    >
  >
  billing_address?: Types.Maybe<
    Pick<
      Types.OrderAddress,
      'city' | 'postcode' | 'firstname' | 'lastname' | 'street' | 'country_code' | 'region_id'
    >
  >
  shipping_address?: Types.Maybe<
    Pick<
      Types.OrderAddress,
      'city' | 'postcode' | 'firstname' | 'lastname' | 'street' | 'country_code' | 'region_id'
    >
  >
  total?: Types.Maybe<{
    subtotal: MoneyFragment
    total_shipping: MoneyFragment & MoneyFragment
    discounts?: Types.Maybe<
      Array<Types.Maybe<Pick<Types.Discount, 'label'> & { amount: MoneyFragment }>>
    >
    grand_total: MoneyFragment
    total_tax: MoneyFragment
    taxes?: Types.Maybe<
      Array<Types.Maybe<Pick<Types.TaxItem, 'rate' | 'title'> & { amount: MoneyFragment }>>
    >
  }>
}
