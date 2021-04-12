import { TypedDocumentNode, useQuery } from '@apollo/client'
import { CustomerTokenDocument } from '@reachdigital/magento-customer/CustomerToken.gql'
import { ProductInterface } from '@reachdigital/magento-graphql'
import Button, { ButtonProps } from '@reachdigital/next-ui/Button'
import ApolloErrorAlert from '@reachdigital/next-ui/Form/ApolloErrorAlert'
import AddToCartSnackbar from '@reachdigital/next-ui/Snackbar/AddToCartSnackbar'
import MessageSnackbarLoader from '@reachdigital/next-ui/Snackbar/MessageSnackbarLoader'
import { DeepPartial, UnpackNestedValue, useFormGqlMutation } from '@reachdigital/react-hook-form'
import React from 'react'
import useRequestCartId from './useRequestCartId'

export default function AddToCartButton<Q, V extends { cartId: string; [index: string]: unknown }>(
  props: Pick<ProductInterface, 'name'> & {
    mutation: TypedDocumentNode<Q, V>
    variables: Omit<V, 'cartId'>
    product: string
  } & Omit<ButtonProps, 'type' | 'name'>,
) {
  const { name, product, mutation, variables, ...buttonProps } = props

  const requestCartId = useRequestCartId()
  const form = useFormGqlMutation<Q, V>(mutation, {
    defaultValues: { ...variables } as UnpackNestedValue<DeepPartial<V>>,
    onBeforeSubmit: async (vars) => ({ ...vars, cartId: await requestCartId() }),
  })
  const { handleSubmit, formState, error } = form
  const submitHandler = handleSubmit(() => {})

  const { data: tokenQuery } = useQuery(CustomerTokenDocument)
  const requireAuth = Boolean(tokenQuery?.customerToken && !tokenQuery?.customerToken.valid)

  return (
    <form onSubmit={submitHandler} noValidate>
      <Button
        type='submit'
        loading={formState.isSubmitting}
        color='primary'
        variant='contained'
        {...buttonProps}
      >
        Add to Cart
      </Button>

      <MessageSnackbarLoader
        open={formState.isSubmitSuccessful && !error?.message}
        color='primary'
        variant='rounded'
        size='large'
      >
        <AddToCartSnackbar message={product} />
      </MessageSnackbarLoader>

      <ApolloErrorAlert error={error} />
    </form>
  )
}
