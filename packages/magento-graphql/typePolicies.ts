import { FieldFunctionOptions, FieldPolicy, FieldReadFunction, Reference } from '@apollo/client'
import { TypedTypePolicies, Query, QueryCartArgs } from './index'

/**
 * By default we don't need to do anything for types with an `id` or without anything to identify.
 *
 * - https://www.apollographql.com/docs/react/caching/cache-configuration/#default-identifier-generation
 */
const typePolicies: TypedTypePolicies = {
  // AddBundleProductsToCartOutput: { keyFields: false },
  // AddConfigurableProductsToCartOutput: { keyFields: false },
  // AddDownloadableProductsToCartOutput: { keyFields: false },
  // AddProductsToCartOutput: { keyFields: false },
  // AddProductsToWishlistOutput: { keyFields: false },
  // AddSimpleProductsToCartOutput: { keyFields: false },
  // AddVirtualProductsToCartOutput: { keyFields: false },
  // Aggregate: { keyFields: false },
  // Aggregation: { keyFields: false },
  // AggregationOption: { keyFields: false },
  // AggregationOptionInterface: { keyFields: false },
  // AbortController: { keyFields: false },
  // AppliedCoupon: { keyFields: false },
  // ApplyCouponToCartOutput: { keyFields: false },
  // Assets: { keyFields: false },
  // AssignCompareListToCustomerOutput: { keyFields: false },
  // Attribute: { keyFields: false },
  // AttributeOption: { keyFields: false },
  AvailablePaymentMethod: { keyFields: ['code'] },
  AvailableShippingMethod: { keyFields: ['carrier_code', 'method_code'] },
  // BillingCartAddress: { keyFields: false },
  Breadcrumb: { keyFields: ['category_uid'] },
  BundleCartItem: { keyFields: ['uid'] },
  // BundleCreditMemoItem: { keyFields: ['id'] },
  // BundleInvoiceItem: { keyFields: ['id'] },
  BundleItem: { keyFields: ['uid'] },
  BundleItemOption: { keyFields: ['uid'] },
  // BundleOrderItem: { keyFields: ['id'] },
  BundleProduct: { keyFields: ['uid'] },
  // BundleShipmentItem: { keyFields: ['id'] },
  // BundleWishlistItem: { keyFields: ['id'] },
  // Cart: { keyFields: ['id'] },
  CartAddressCountry: { keyFields: ['code'] },
  // CartAddressInterface: { keyFields: false },
  // CartAddressRegion: { keyFields: false },
  // CartDiscount: { keyFields: false },
  CartItemInterface: { keyFields: ['uid'] },
  // CartItemPrices: { keyFields: false },
  CartItemQuantity: { keyFields: ['cart_item_id'] },
  // CartItemSelectedOptionValuePrice: { keyFields: false },
  // CartPrices: { keyFields: false },
  // CartTaxItem: { keyFields: false },
  // CartUserInputError: { keyFields: false },
  Categories: { keyFields: ['identifier'] },
  CategoryInterface: { keyFields: ['uid'] },
  // CategoryProducts: { keyFields: false },
  // CategoryResult: { keyFields: false },
  CategoryTree: { keyFields: ['uid'] },
  CheckoutAgreement: { keyFields: ['agreement_id'] },
  // CheckoutUserInputError: { keyFields: false },
  CmsBlock: { keyFields: ['identifier'] },
  // CmsBlocks: { keyFields: false },
  CmsPage: { keyFields: ['identifier'] },
  // ColorSwatchData: { keyFields: false },
  // ComparableAttribute: { keyFields: false },
  ComparableItem: { keyFields: ['uid'] },
  CompareList: { keyFields: ['uid'] },
  // ComplexTextValue: { keyFields: false },
  ConfigurableAttributeOption: { keyFields: ['uid'] },
  ConfigurableCartItem: { keyFields: ['uid'] },
  // ConfigurableOptionAvailableForSelection: { keyFields: false },
  ConfigurableProduct: { keyFields: ['uid'] },
  ConfigurableProductOptions: { keyFields: ['uid'] },
  // ConfigurableProductOptionsSelection: { keyFields: false },
  ConfigurableProductOptionsValues: { keyFields: ['uid'] },
  // ConfigurableVariant: { keyFields: false },
  // ConfigurableWishlistItem: { keyFields: ['id'] },
  // Country: { keyFields: ['id'] },
  // CreatePayflowProTokenOutput: { keyFields: false },
  // CreateProductReviewOutput: { keyFields: false },
  // CreditMemo: { keyFields: ['id'] },
  // CreditMemoItem: { keyFields: ['id'] },
  // CreditMemoItemInterface: { keyFields: ['id'] },
  // CreditMemoTotal: { keyFields: false },
  Currency: { keyFields: [] },
  CustomAttributeMetadata: { keyFields: [] },
  Customer: { keyFields: [] },
  // CustomerAddress: { keyFields: ['id'] },
  // CustomerAddressAttribute: { keyFields: false },
  // CustomerAddressRegion: { keyFields: false },
  // CustomerDownloadableProduct: { keyFields: false },
  // CustomerDownloadableProducts: { keyFields: false },
  // CustomerOrder: { keyFields: ['id'] },
  CustomerOrders: { keyFields: [] },
  // CustomerOutput: { keyFields: false },
  // CustomerPaymentTokens: { keyFields: false },
  CustomerToken: { keyFields: [] },
  CustomizableAreaOption: { keyFields: ['uid'] },
  CustomizableAreaValue: { keyFields: ['uid'] },
  CustomizableCheckboxOption: { keyFields: ['uid'] },
  CustomizableCheckboxValue: { keyFields: ['uid'] },
  CustomizableDateOption: { keyFields: ['uid'] },
  CustomizableDateValue: { keyFields: ['uid'] },
  CustomizableDropDownOption: { keyFields: ['uid'] },
  CustomizableDropDownValue: { keyFields: ['uid'] },
  CustomizableFieldOption: { keyFields: ['uid'] },
  CustomizableFieldValue: { keyFields: ['uid'] },
  CustomizableFileOption: { keyFields: ['uid'] },
  CustomizableFileValue: { keyFields: ['uid'] },
  CustomizableMultipleOption: { keyFields: ['uid'] },
  CustomizableMultipleValue: { keyFields: ['uid'] },
  CustomizableOptionInterface: { keyFields: ['uid'] },
  // CustomizableProductInterface: { keyFields: false },
  CustomizableRadioOption: { keyFields: ['uid'] },
  CustomizableRadioValue: { keyFields: ['uid'] },
  // DeleteCompareListOutput: { keyFields: false },
  // DeletePaymentTokenOutput: { keyFields: false },
  // Discount: { keyFields: false },
  DownloadableCartItem: { keyFields: ['uid'] },
  // DownloadableCreditMemoItem: { keyFields: ['id'] },
  // DownloadableInvoiceItem: { keyFields: ['id'] },
  DownloadableItemsLinks: { keyFields: ['uid'] },
  // DownloadableOrderItem: { keyFields: ['id'] },
  DownloadableProduct: { keyFields: ['uid'] },
  DownloadableProductLinks: { keyFields: ['uid'] },
  // DownloadableProductSamples: { keyFields: ['id'] },
  // DownloadableWishlistItem: { keyFields: ['id'] },
  // EntityUrl: { keyFields: ['id'] },
  // ExchangeRate: { keyFields: false },
  // FixedProductTax: { keyFields: false },
  // GenerateCustomerTokenAsAdminOutput: { keyFields: false },
  // GiftMessage: { keyFields: false },
  GroupedProduct: { keyFields: ['uid'] },
  // GroupedProductItem: { keyFields: false },
  // GroupedProductWishlistItem: { keyFields: ['id'] },
  // HostedProUrl: { keyFields: false },
  // HttpQueryParameter: { keyFields: false },
  // ImageSwatchData: { keyFields: false },
  // Invoice: { keyFields: ['id'] },
  // InvoiceItem: { keyFields: ['id'] },
  // InvoiceItemInterface: { keyFields: ['id'] },
  // InvoiceTotal: { keyFields: false },
  // IsEmailAvailableOutput: { keyFields: false },
  ItemSelectedBundleOption: { keyFields: ['uid'] },
  ItemSelectedBundleOptionValue: { keyFields: ['uid'] },
  // KeyValue: { keyFields: false },
  // LayerFilter: { keyFields: false },
  // LayerFilterItem: { keyFields: false },
  // LayerFilterItemInterface: { keyFields: false },
  MediaGalleryEntry: { keyFields: ['uid'] },
  // MediaGalleryInterface: { keyFields: false },
  MollieIssuer: { keyFields: ['code'] },
  // MolliePaymentMethodMeta: { keyFields: false },
  // MollieTransactionOutput: { keyFields: false },
  // Money: { keyFields: false },
  Order: { keyFields: ['order_number'] },
  // OrderAddress: { keyFields: false },
  // OrderItem: { keyFields: ['id'] },
  // OrderItemInterface: { keyFields: ['id'] },
  // OrderItemOption: { keyFields: false },
  // OrderPaymentMethod: { keyFields: false },
  // OrderShipment: { keyFields: ['id'] },
  // OrderTotal: { keyFields: false },
  // PayflowLinkToken: { keyFields: false },
  // PayflowProResponseOutput: { keyFields: false },
  // PayflowProToken: { keyFields: false },
  // PaymentToken: { keyFields: false },
  // PaypalExpressToken: { keyFields: false },
  // PaypalExpressTokenOutput: { keyFields: false },
  // PaypalExpressUrlList: { keyFields: false },
  // PhysicalProductInterface: { keyFields: false },
  // PickupLocation: { keyFields: false },
  // PickupLocations: { keyFields: false },
  // PlaceOrderOutput: { keyFields: false },
  // Price: { keyFields: false },
  // PriceAdjustment: { keyFields: false },
  // PriceRange: { keyFields: false },
  // ProductAttribute: { keyFields: false },
  // ProductDiscount: { keyFields: false },
  // ProductImage: { keyFields: false },
  ProductInterface: { keyFields: ['uid'] },
  // ProductLinks: { keyFields: false },
  // ProductLinksInterface: { keyFields: false },
  // ProductMediaGalleryEntriesContent: { keyFields: false },
  // ProductMediaGalleryEntriesVideoContent: { keyFields: false },
  // ProductPrice: { keyFields: false },
  // ProductPrices: { keyFields: false },
  // ProductReview: { keyFields: false },
  // ProductReviewRating: { keyFields: false },
  // ProductReviewRatingMetadata: { keyFields: ['id'] },
  // ProductReviewRatingValueMetadata: { keyFields: false },
  // ProductReviewRatingsMetadata: { keyFields: false },
  ProductReviews: { keyFields: [] },
  // ProductTierPrices: { keyFields: false },
  // ProductVideo: { keyFields: false },
  // Products: { keyFields: false },
  // Region: { keyFields: false },
  // RemoveCouponFromCartOutput: { keyFields: false },
  // RemoveItemFromCartOutput: { keyFields: false },
  // RemoveProductsFromWishlistOutput: { keyFields: false },
  // ReorderItemsOutput: { keyFields: false },
  // RevokeCustomerTokenOutput: { keyFields: false },
  // SalesCommentItem: { keyFields: false },
  // SalesItemInterface: { keyFields: false },
  // SearchResultPageInfo: { keyFields: false },
  // SelectedBundleOption: { keyFields: ['id'] },
  SelectedBundleOptionValue: { keyFields: ['uid'] },
  SelectedConfigurableOption: { keyFields: ['value_id'] },
  // SelectedCustomizableOption: { keyFields: ['id'] },
  // SelectedCustomizableOptionValue: { keyFields: ['id'] },
  // SelectedPaymentMethod: { keyFields: false },
  SelectedShippingMethod: { keyFields: ['carrier_code', 'method_code'] },
  // SendEmailToFriendOutput: { keyFields: false },
  // SendEmailToFriendRecipient: { keyFields: false },
  // SendEmailToFriendSender: { keyFields: false },
  // SendFriendConfiguration: { keyFields: false },
  // SetBillingAddressOnCartOutput: { keyFields: false },
  // SetGuestEmailOnCartOutput: { keyFields: false },
  // SetPaymentMethodOnCartOutput: { keyFields: false },
  // SetShippingAddressesOnCartOutput: { keyFields: false },
  // SetShippingMethodsOnCartOutput: { keyFields: false },
  // ShipmentItem: { keyFields: ['id'] },
  // ShipmentItemInterface: { keyFields: ['id'] },
  // ShipmentTracking: { keyFields: false },
  // ShippingCartAddress: { keyFields: false },
  // ShippingDiscount: { keyFields: false },
  // ShippingHandling: { keyFields: false },
  // SimpleCartItem: { keyFields: ['id'] },
  SimpleProduct: { keyFields: ['uid'] },
  // SimpleWishlistItem: { keyFields: ['id'] },
  // SortField: { keyFields: false },
  // SortFields: { keyFields: false },
  StoreConfig: { keyFields: ['store_code'] },
  // SubscribeEmailToNewsletterOutput: { keyFields: false },
  // SwatchData: { keyFields: false },
  // SwatchDataInterface: { keyFields: false },
  // SwatchLayerFilterItem: { keyFields: false },
  // SwatchLayerFilterItemInterface: { keyFields: false },
  // TaxItem: { keyFields: false },
  // TextSwatchData: { keyFields: false },
  // TierPrice: { keyFields: false },
  // UpdateCartItemsOutput: { keyFields: false },
  // UpdateProductsInWishlistOutput: { keyFields: false },
  // UrlRewrite: { keyFields: false },
  VirtualCartItem: { keyFields: ['uid'] },
  VirtualProduct: { keyFields: ['uid'] },
  // VirtualWishlistItem: { keyFields: ['id'] },
  // Website: { keyFields: ['id'] },
  // WishListUserInputError: { keyFields: false },
  // Wishlist: { keyFields: ['id'] },
  // WishlistItem: { keyFields: ['id'] },
  // WishlistItemInterface: { keyFields: ['id'] },
  // WishlistItems: { keyFields: false },
  // WishlistOutput: { keyFields: false },
  // createKlarnaPaymentsSessionOutput: { keyFields: false },
  // Mutation: { keyFields: false },
}

export default typePolicies
