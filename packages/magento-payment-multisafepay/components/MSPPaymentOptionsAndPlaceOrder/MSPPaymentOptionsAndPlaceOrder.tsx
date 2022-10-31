import {
  useFormCompose,
  useFormPersist,
  useFormValidFields,
  SelectElement,
} from '@graphcommerce/ecommerce-ui'
import { useFormGqlMutationCart } from '@graphcommerce/magento-cart'
import {
  PaymentOptionsProps,
  usePaymentMethodContext,
} from '@graphcommerce/magento-cart-payment-method'
import { filterNonNullableKeys, FormRow } from '@graphcommerce/next-ui'
import { useRouter } from 'next/router'
import { useMSPCartLock } from '../../hooks/useMSPCartLock'
import {
  MSPPaymentOptionsAndPlaceOrderMutation,
  MSPPaymentOptionsAndPlaceOrderMutationVariables,
  MSPPaymentOptionsAndPlaceOrderDocument,
} from './MSPPaymentOptionsAndPlaceOrder.gql'

/** It sets the selected payment method on the cart. */
export function MSPPaymentOptionsAndPlaceOrder(props: PaymentOptionsProps) {
  const { code, step, multisafepay_available_issuers } = props

  const [, lock] = useMSPCartLock()
  const { selectedMethod } = usePaymentMethodContext()
  const { push } = useRouter()

  /**
   * In the this folder you'll also find a PaymentMethodOptionsNoop.graphql document that is
   * imported here and used as the basis for the form below.
   */
  const form = useFormGqlMutationCart<
    MSPPaymentOptionsAndPlaceOrderMutation,
    MSPPaymentOptionsAndPlaceOrderMutationVariables
  >(MSPPaymentOptionsAndPlaceOrderDocument, {
    onComplete: async (result) => {
      const url = result.data?.placeOrder?.order.multisafepay_payment_url

      if (result.errors || !selectedMethod?.code || url?.error || !url?.payment_url) return

      lock({ method: selectedMethod.code })
      await push(url.payment_url)
    },
  })

  const { handleSubmit, muiRegister, formState, required, register, control } = form

  const submit = handleSubmit(() => {})

  const key = `PaymentMethodOptions_${code}`
  useFormPersist({
    form,
    name: key,
    persist: ['paymentMethod.multisafepay_ideal.issuer_id'],
    storage: 'localStorage',
  })

  const valid = useFormValidFields(form, required)

  /** To use an external Pay button we register the current form to be handled there as well. */
  useFormCompose({ form, step, submit, key })

  const issuers = filterNonNullableKeys(multisafepay_available_issuers, ['code', 'description'])

  /** This is the form that the user can fill in. In this case we don't wat the user to fill in anything. */
  return (
    <form key={key} onSubmit={submit} noValidate>
      <input type='hidden' value={code} {...register('paymentMethod.code')} />

      {code === 'multisafepay_ideal' && issuers.length && (
        <FormRow>
          <SelectElement
            control={control}
            name='paymentMethod.multisafepay_ideal.issuer_id'
            required
            validation={{ required: { message: 'Please provide an issuer', value: true } }}
            variant='outlined'
            color='secondary'
            select
            label='Select your bank'
            options={issuers.map(({ code: id, description: label }) => ({ id, label }))}
          />
        </FormRow>
      )}
    </form>
  )
}
