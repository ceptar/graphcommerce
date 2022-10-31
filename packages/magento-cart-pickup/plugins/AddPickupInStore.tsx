import { ShippingMethodFormProps } from '@graphcommerce/magento-cart-shipping-method'
import type { PluginProps } from '@graphcommerce/next-config'
import { PickupLocationSelector } from '../components/PickupLocationSelector'

export const component = 'ShippingMethodForm'
export const exported = '@graphcommerce/magento-cart-shipping-method'

function AddPickupInStore(props: PluginProps<ShippingMethodFormProps>) {
  const { Prev, children, step } = props
  return (
    <Prev {...props}>
      <PickupLocationSelector step={step + 1} />
      {children}
    </Prev>
  )
}

export const Plugin = AddPickupInStore
