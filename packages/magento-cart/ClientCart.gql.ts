// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const ClientCartDocument: DocumentNode<ClientCartQuery, ClientCartQueryVariables> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ClientCart' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cart' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cart_id' },
                value: { kind: 'StringValue', value: '', block: false },
              },
            ],
            directives: [{ kind: 'Directive', name: { kind: 'Name', value: 'client' } }],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } },
                { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'product' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'url_key' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'thumbnail' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'prices' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
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
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'row_total' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'row_total_including_tax' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'total_item_discount' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ConfigurableCartItem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'configurable_options' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'option_label' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value_id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value_label' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'DownloadableCartItem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'samples' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'sample_url' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'BundleCartItem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'bundle_options' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'values' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'quantity' },
                                        },
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
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prices' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'applied_taxes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
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
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
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
                            { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subtotal_excluding_tax' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subtotal_including_tax' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subtotal_with_discount_excluding_tax' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'shipping_addresses' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'selected_shipping_method' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'method_title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'carrier_title' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'method_code' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'carrier_code' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'postcode' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'country' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'region' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'region_id' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'telephone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'customer_notes' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'available_shipping_methods' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'available' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'carrier_code' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'carrier_title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'error_message' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'method_code' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'method_title' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'applied_coupons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'available_payment_methods' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'selected_payment_method' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
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
export type ClientCartQueryVariables = Types.Exact<{ [key: string]: never }>

export type ClientCartQuery = {
  cart?: Types.Maybe<
    { __typename: 'Cart' } & Pick<Types.Cart, 'id' | 'email' | 'total_quantity' | 'is_virtual'> & {
        items?: Types.Maybe<
          Array<
            Types.Maybe<
              | ({ __typename: 'SimpleCartItem' } & Pick<
                  Types.SimpleCartItem,
                  'id' | 'quantity'
                > & {
                    product:
                      | ({ __typename: 'VirtualProduct' } & Pick<
                          Types.VirtualProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'SimpleProduct' } & Pick<
                          Types.SimpleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'DownloadableProduct' } & Pick<
                          Types.DownloadableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'BundleProduct' } & Pick<
                          Types.BundleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'GroupedProduct' } & Pick<
                          Types.GroupedProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'ConfigurableProduct' } & Pick<
                          Types.ConfigurableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
              | ({ __typename: 'VirtualCartItem' } & Pick<
                  Types.VirtualCartItem,
                  'id' | 'quantity'
                > & {
                    product:
                      | ({ __typename: 'VirtualProduct' } & Pick<
                          Types.VirtualProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'SimpleProduct' } & Pick<
                          Types.SimpleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'DownloadableProduct' } & Pick<
                          Types.DownloadableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'BundleProduct' } & Pick<
                          Types.BundleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'GroupedProduct' } & Pick<
                          Types.GroupedProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'ConfigurableProduct' } & Pick<
                          Types.ConfigurableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
              | ({ __typename: 'DownloadableCartItem' } & Pick<
                  Types.DownloadableCartItem,
                  'id' | 'quantity'
                > & {
                    samples?: Types.Maybe<
                      Array<
                        Types.Maybe<Pick<Types.DownloadableProductSamples, 'sample_url' | 'title'>>
                      >
                    >
                    product:
                      | ({ __typename: 'VirtualProduct' } & Pick<
                          Types.VirtualProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'SimpleProduct' } & Pick<
                          Types.SimpleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'DownloadableProduct' } & Pick<
                          Types.DownloadableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'BundleProduct' } & Pick<
                          Types.BundleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'GroupedProduct' } & Pick<
                          Types.GroupedProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'ConfigurableProduct' } & Pick<
                          Types.ConfigurableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
              | ({ __typename: 'BundleCartItem' } & Pick<
                  Types.BundleCartItem,
                  'id' | 'quantity'
                > & {
                    bundle_options: Array<
                      Types.Maybe<
                        Pick<Types.SelectedBundleOption, 'id' | 'label' | 'type'> & {
                          values: Array<
                            Types.Maybe<
                              Pick<
                                Types.SelectedBundleOptionValue,
                                'id' | 'label' | 'price' | 'quantity'
                              >
                            >
                          >
                        }
                      >
                    >
                    product:
                      | ({ __typename: 'VirtualProduct' } & Pick<
                          Types.VirtualProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'SimpleProduct' } & Pick<
                          Types.SimpleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'DownloadableProduct' } & Pick<
                          Types.DownloadableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'BundleProduct' } & Pick<
                          Types.BundleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'GroupedProduct' } & Pick<
                          Types.GroupedProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'ConfigurableProduct' } & Pick<
                          Types.ConfigurableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
              | ({ __typename: 'ConfigurableCartItem' } & Pick<
                  Types.ConfigurableCartItem,
                  'id' | 'quantity'
                > & {
                    configurable_options: Array<
                      Types.Maybe<
                        Pick<
                          Types.SelectedConfigurableOption,
                          'id' | 'option_label' | 'value_id' | 'value_label'
                        >
                      >
                    >
                    product:
                      | ({ __typename: 'VirtualProduct' } & Pick<
                          Types.VirtualProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'SimpleProduct' } & Pick<
                          Types.SimpleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'DownloadableProduct' } & Pick<
                          Types.DownloadableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'BundleProduct' } & Pick<
                          Types.BundleProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'GroupedProduct' } & Pick<
                          Types.GroupedProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                      | ({ __typename: 'ConfigurableProduct' } & Pick<
                          Types.ConfigurableProduct,
                          'url_key' | 'name'
                        > & { thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>> })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
            >
          >
        >
        prices?: Types.Maybe<{
          applied_taxes?: Types.Maybe<
            Array<
              Types.Maybe<
                Pick<Types.CartTaxItem, 'label'> & {
                  amount: Pick<Types.Money, 'currency' | 'value'>
                }
              >
            >
          >
          discounts?: Types.Maybe<
            Array<
              Types.Maybe<
                Pick<Types.Discount, 'label'> & { amount: Pick<Types.Money, 'currency' | 'value'> }
              >
            >
          >
          grand_total?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
          subtotal_excluding_tax?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
          subtotal_including_tax?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
          subtotal_with_discount_excluding_tax?: Types.Maybe<
            Pick<Types.Money, 'currency' | 'value'>
          >
        }>
        shipping_addresses: Array<
          Types.Maybe<
            Pick<
              Types.ShippingCartAddress,
              | 'firstname'
              | 'lastname'
              | 'company'
              | 'city'
              | 'postcode'
              | 'street'
              | 'telephone'
              | 'customer_notes'
            > & {
              selected_shipping_method?: Types.Maybe<
                Pick<
                  Types.SelectedShippingMethod,
                  'method_title' | 'carrier_title' | 'method_code' | 'carrier_code'
                > & { amount: Pick<Types.Money, 'currency' | 'value'> }
              >
              country: Pick<Types.CartAddressCountry, 'code' | 'label'>
              region?: Types.Maybe<Pick<Types.CartAddressRegion, 'code' | 'label' | 'region_id'>>
              available_shipping_methods?: Types.Maybe<
                Array<
                  Types.Maybe<
                    Pick<
                      Types.AvailableShippingMethod,
                      | 'available'
                      | 'carrier_code'
                      | 'carrier_title'
                      | 'error_message'
                      | 'method_code'
                      | 'method_title'
                    > & { amount: Pick<Types.Money, 'currency' | 'value'> }
                  >
                >
              >
            }
          >
        >
        applied_coupons?: Types.Maybe<Array<Types.Maybe<Pick<Types.AppliedCoupon, 'code'>>>>
        available_payment_methods?: Types.Maybe<
          Array<Types.Maybe<Pick<Types.AvailablePaymentMethod, 'code' | 'title'>>>
        >
        selected_payment_method?: Types.Maybe<Pick<Types.SelectedPaymentMethod, 'code' | 'title'>>
      }
  >
}
