import { GraphCommerceConfig } from '../../src/generated/config'
import { findPlugins } from '../../src/interceptors/findPlugins'

const projectRoot = `${process.cwd()}/examples/magento-graphcms`

it('finds plugins', () => {
  const fakeconfig = {
    googleRecaptchaKey: '123',
    googleAnalyticsId: '123',
    // demoMode: true,
    debug: {
      pluginStatus: true,
    },
  } as GraphCommerceConfig

  const [plugins, errors] = findPlugins(fakeconfig, projectRoot)
  const disabled = plugins.filter((p) => !p.enabled)
  const enabled = plugins.filter((p) => p.enabled)

  expect(errors).toMatchInlineSnapshot(`[]`)

  expect(enabled).toMatchInlineSnapshot(`
    [
      {
        "enabled": true,
        "ifConfig": "googleAnalyticsId",
        "sourceExport": "plugin",
        "sourceModule": "./@graphcommerce/googleanalytics/plugins/gtagEvent",
        "targetExport": "sendEvent",
        "targetModule": "@graphcommerce/google-datalayer/api/sendEvent",
        "type": "function",
      },
      {
        "enabled": true,
        "ifConfig": "googleAnalyticsId",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/googleanalytics/plugins/GaFramerNextPages",
        "targetExport": "FramerNextPages",
        "targetModule": "@graphcommerce/framer-next-pages",
        "type": "component",
      },
      {
        "enabled": true,
        "ifConfig": "googleRecaptchaKey",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/googlerecaptcha/plugins/GrecaptchaGraphQLProvider",
        "targetExport": "GraphQLProvider",
        "targetModule": "@graphcommerce/graphql",
        "type": "component",
      },
      {
        "enabled": true,
        "ifConfig": "googleRecaptchaKey",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/googlerecaptcha/plugins/GrecaptchaApolloErrorSnackbar",
        "targetExport": "ApolloErrorSnackbar",
        "targetModule": "@graphcommerce/ecommerce-ui",
        "type": "component",
      },
      {
        "enabled": true,
        "ifConfig": "googleRecaptchaKey",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/googlerecaptcha/plugins/GrecaptchaApolloErrorFullPage",
        "targetExport": "ApolloErrorFullPage",
        "targetModule": "@graphcommerce/ecommerce-ui",
        "type": "component",
      },
      {
        "enabled": true,
        "ifConfig": "googleRecaptchaKey",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/googlerecaptcha/plugins/GrecaptchaApolloErrorAlert",
        "targetExport": "ApolloErrorAlert",
        "targetModule": "@graphcommerce/ecommerce-ui",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerViewItem",
        "targetExport": "ProductPageMeta",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerUpdateItemQuantity",
        "targetExport": "UpdateItemQuantity",
        "targetModule": "@graphcommerce/magento-cart-items/components/UpdateItemQuantity/UpdateItemQuantity",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerShippingMethodForm",
        "targetExport": "ShippingMethodForm",
        "targetModule": "@graphcommerce/magento-cart-shipping-method",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerShippingMethodForm",
        "targetExport": "ShippingMethodForm",
        "targetModule": "@graphcommerce/magento-cart-shipping-method",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerRemoveItemFromCartFab",
        "targetExport": "RemoveItemFromCartFab",
        "targetModule": "@graphcommerce/magento-cart-items/components/RemoveItemFromCart/RemoveItemFromCartFab",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerRemoveItemFromCartFab",
        "targetExport": "RemoveItemFromCartFab",
        "targetModule": "@graphcommerce/magento-cart-items/components/RemoveItemFromCart/RemoveItemFromCartFab",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerRemoveItemFromCart",
        "targetExport": "RemoveItemFromCart",
        "targetModule": "@graphcommerce/magento-cart-items/components/RemoveItemFromCart/RemoveItemFromCart",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerRemoveItemFromCart",
        "targetExport": "RemoveItemFromCart",
        "targetModule": "@graphcommerce/magento-cart-items/components/RemoveItemFromCart/RemoveItemFromCart",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerProductListItemsBase",
        "targetExport": "ProductListItemsBase",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerProductListItemsBase",
        "targetExport": "ProductListItemsBase",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerProductListItem",
        "targetExport": "ProductListItem",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerPaymentMethodContextProvider",
        "targetExport": "PaymentMethodContextProvider",
        "targetModule": "@graphcommerce/magento-cart-payment-method",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerPaymentMethodButton",
        "targetExport": "PaymentMethodButton",
        "targetModule": "@graphcommerce/magento-cart-payment-method",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerCartStartCheckoutLinkOrButton",
        "targetExport": "CartStartCheckoutLinkOrButton",
        "targetModule": "@graphcommerce/magento-cart",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerCartStartCheckoutLinkOrButton",
        "targetExport": "CartStartCheckoutLinkOrButton",
        "targetModule": "@graphcommerce/magento-cart",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerCartStartCheckout",
        "targetExport": "CartStartCheckout",
        "targetModule": "@graphcommerce/magento-cart",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerCartStartCheckout",
        "targetExport": "CartStartCheckout",
        "targetModule": "@graphcommerce/magento-cart",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerAddProductsToCartForm",
        "targetExport": "AddProductsToCartForm",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "plugin",
        "sourceModule": "./@graphcommerce/graphcms-ui/plugins/hygraphGraphqlConfig",
        "targetExport": "graphqlConfig",
        "targetModule": "@graphcommerce/graphql",
        "type": "function",
      },
      {
        "enabled": true,
        "sourceExport": "plugin",
        "sourceModule": "./@graphcommerce/hygraph-dynamic-rows/plugins/hygraphDynamicRowsPageContent",
        "targetExport": "hygraphPageContent",
        "targetModule": "@graphcommerce/graphcms-ui",
        "type": "function",
      },
      {
        "enabled": true,
        "sourceExport": "plugin",
        "sourceModule": "./@graphcommerce/magento-cart/plugins/useSignInFormMergeCart",
        "targetExport": "useSignInForm",
        "targetModule": "@graphcommerce/magento-customer",
        "type": "function",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-cart/plugins/MagentoCartGraphqlProvider",
        "targetExport": "GraphQLProvider",
        "targetModule": "@graphcommerce/graphql",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-customer/plugins/MagentoCustomerGraphqlProvider",
        "targetExport": "GraphQLProvider",
        "targetModule": "@graphcommerce/graphql",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "plugin",
        "sourceModule": "./@graphcommerce/magento-graphql/plugins/magentoGraphqlConfig",
        "targetExport": "graphqlConfig",
        "targetModule": "@graphcommerce/graphql/config",
        "type": "function",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-payment-included/plugins/AddIncludedMethods",
        "targetExport": "PaymentMethodContextProvider",
        "targetModule": "@graphcommerce/magento-cart-payment-method",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-bundle/plugins/BundleCartItemActionCard",
        "targetExport": "CartItemActionCard",
        "targetModule": "@graphcommerce/magento-cart-items",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-bundle/plugins/BundleCartItemActionCard",
        "targetExport": "CartItemActionCard",
        "targetModule": "@graphcommerce/magento-cart-items",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableCartItemActionCard",
        "targetExport": "CartItemActionCard",
        "targetModule": "@graphcommerce/magento-cart-items",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableCartItemActionCard",
        "targetExport": "CartItemActionCard",
        "targetModule": "@graphcommerce/magento-cart-items",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductPagePriceTiers",
        "targetExport": "ProductPagePriceTiers",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductPagePrice",
        "targetExport": "ProductPagePrice",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductPageGallery",
        "targetExport": "ProductPageGallery",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-simple/plugins/SimpleCartItemActionCard",
        "targetExport": "CartItemActionCard",
        "targetModule": "@graphcommerce/magento-cart-items",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-simple/plugins/SimpleCartItemActionCard",
        "targetExport": "CartItemActionCard",
        "targetModule": "@graphcommerce/magento-cart-items",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-virtual/plugins/VirtualCartItemActionCard",
        "targetExport": "CartItemActionCard",
        "targetModule": "@graphcommerce/magento-cart-items",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-virtual/plugins/VirtualCartItemActionCard",
        "targetExport": "CartItemActionCard",
        "targetModule": "@graphcommerce/magento-cart-items",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "graphqlConfig",
        "sourceModule": "./@graphcommerce/magento-store/plugins/magentoStoreGraphqlConfig",
        "targetExport": "graphqlConfig",
        "targetModule": "@graphcommerce/graphql",
        "type": "function",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-wishlist/plugins/WishlistProductAddToCartFormPlugin",
        "targetExport": "AddProductsToCartForm",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-wishlist/plugins/ConfigurableWishlistItemActionCard",
        "targetExport": "WishlistItemActionCard",
        "targetModule": "@graphcommerce/magento-wishlist",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-wishlist/plugins/BundleWishlistItemActionCard",
        "targetExport": "WishlistItemActionCard",
        "targetModule": "@graphcommerce/magento-wishlist",
        "type": "component",
      },
      {
        "enabled": true,
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-wishlist/plugins/BundleWishlistItemActionCard",
        "targetExport": "WishlistItemActionCard",
        "targetModule": "@graphcommerce/magento-wishlist",
        "type": "component",
      },
    ]
  `)
  expect(disabled).toMatchInlineSnapshot(`
    [
      {
        "enabled": false,
        "ifConfig": "demoMode",
        "sourceExport": "AddProductsToCartForm",
        "sourceModule": "././plugins/EnableCrosssellsPlugin",
        "targetExport": "AddProductsToCartForm",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "demoMode",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoRowLinks",
        "targetExport": "RowLinks",
        "targetModule": "@graphcommerce/next-ui",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "demoMode",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoRecentlyViewedProducts",
        "targetExport": "RecentlyViewedProducts",
        "targetModule": "@graphcommerce/magento-recently-viewed-products",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "demoMode",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoProductListItemsBase",
        "targetExport": "ProductListItemsBase",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "demoMode",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoProductListItemsBase",
        "targetExport": "ProductListItemsBase",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "demoMode",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoProductListItemConfigurable",
        "targetExport": "ProductListItemConfigurable",
        "targetModule": "@graphcommerce/magento-product-configurable",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "demoMode",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/demo-magento-graphcommerce/plugins/demo/DemoProductListItem",
        "targetExport": "ProductListItem",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "googleTagmanagerId",
        "sourceExport": "plugin",
        "sourceModule": "./@graphcommerce/googletagmanager/plugins/tagmanagerEvent",
        "targetExport": "sendEvent",
        "targetModule": "@graphcommerce/google-datalayer/api/sendEvent",
        "type": "function",
      },
      {
        "enabled": false,
        "ifConfig": "googleTagmanagerId",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/googletagmanager/plugins/GtagFramerNextPages",
        "targetExport": "FramerNextPages",
        "targetModule": "@graphcommerce/framer-next-pages",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "dataLayer.coreWebVitals",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/google-datalayer/plugins/GoogleDatalayerWebVitals",
        "targetExport": "FramerNextPages",
        "targetModule": "@graphcommerce/framer-next-pages",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "compare",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-compare/plugins/CompareAbleProductListItem",
        "targetExport": "ProductListItem",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "compare",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-compare/plugins/AddCompareTypePolicies",
        "targetExport": "GraphQLProvider",
        "targetModule": "@graphcommerce/graphql",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "compare",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-compare/plugins/AddCompareToProductPage",
        "targetExport": "ProductPageAddToCartActionsRow",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "compare",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-compare/plugins/AddCompareFabNextToCart",
        "targetExport": "CartFab",
        "targetModule": "@graphcommerce/magento-cart",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "debug.sessions",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-customer/plugins/SessionDebuggerPlugin",
        "targetExport": "FramerNextPages",
        "targetModule": "@graphcommerce/framer-next-pages",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "configurableVariantValues.content",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductShortDescription",
        "targetExport": "ProductShortDescription",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "configurableVariantValues.content",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductPageName",
        "targetExport": "ProductPageName",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "configurableVariantValues.url",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductPageMeta",
        "targetExport": "ProductPageMeta",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "configurableVariantValues.content",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductPageJsonLd",
        "targetExport": "ProductPageJsonLd",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "configurableVariantValues.content",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductPageDescription",
        "targetExport": "ProductPageDescription",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "configurableVariantValues.content",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-product-configurable/plugins/ConfigurableProductPage/ConfigurableProductPageDescription",
        "targetExport": "ProductPageDescription",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
      {
        "enabled": false,
        "ifConfig": "recentlyViewedProducts.enabled",
        "sourceExport": "Plugin",
        "sourceModule": "./@graphcommerce/magento-recently-viewed-products/plugins/RegisterProductAsRecentlyViewed",
        "targetExport": "ProductPageMeta",
        "targetModule": "@graphcommerce/magento-product",
        "type": "component",
      },
    ]
  `)
})
