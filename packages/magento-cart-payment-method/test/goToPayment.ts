import { ApolloClient, NormalizedCacheObject } from '@graphcommerce/graphql'
import { fillShippingAddressForm } from '@graphcommerce/magento-cart-shipping-address/test/fillShippingAddressForm'
import { fillCartAgreementsForm } from '@graphcommerce/magento-cart/test/fillCartAgreementsForm'
import { Page } from '@playwright/test'

export const goToPayment = async (
  page: Page,
  apolloClient: ApolloClient<NormalizedCacheObject>,
) => {
  await page.locator('a:has-text("View shopping cart")').click()

  await page.locator('text=Start Checkout').click()

  const email = page.locator('input[name="email"]')
  await email.click()
  await email.fill('test@test.com')

  await fillShippingAddressForm(page)

  await page.click('button[value=flatrate-flatrate]')
  await page.click('#next')

  // Fill in the agreements
  await fillCartAgreementsForm(page, apolloClient)
}
