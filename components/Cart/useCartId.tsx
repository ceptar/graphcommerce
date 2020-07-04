import { useState, useEffect } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import useIsLoggedIn from 'components/Customer/useIsLoggedIn'
import { GetCustomerCartDocument, CreateEmptyCartDocument } from 'generated/apollo'

function generateId(len = 32) {
  const arr = new Uint8Array(len / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, (dec) => (dec < 10 ? `0${String(dec)}` : dec.toString(16))).join('')
}

export default function useCartId() {
  const [cartId, setCartId] = useState<string | null>(null)
  const client = useApolloClient()
  const isLoggedIn = useIsLoggedIn()

  useEffect(() => {
    const newCartId = window.localStorage.getItem('cart_id')
    if (newCartId) setCartId(newCartId)
  }, [])

  return async (): Promise<string> => {
    if (!cartId && isLoggedIn) {
      const customerCartQuery = await client.query<
        GQLGetCustomerCartQuery,
        GQLGetCustomerCartQueryVariables
      >({ query: GetCustomerCartDocument })

      if (customerCartQuery.data.customerCart.id) {
        setCartId(customerCartQuery.data.customerCart.id)
        return customerCartQuery.data.customerCart.id
      }
    }

    if (!cartId) {
      const createEmptyCart = await client.mutate<
        GQLCreateEmptyCartMutation,
        GQLCreateEmptyCartMutationVariables
      >({ mutation: CreateEmptyCartDocument, variables: { cartId: generateId() } })

      if (createEmptyCart.data?.createEmptyCart) {
        setCartId(createEmptyCart.data.createEmptyCart)
        return createEmptyCart.data.createEmptyCart
      }
      throw new Error('Could not create a cart')
    }

    return cartId
  }
}
