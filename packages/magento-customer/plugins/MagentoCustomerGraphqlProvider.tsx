/* eslint-disable import/no-mutable-exports */
import { GraphQLProviderProps } from '@graphcommerce/graphql'
import type { PluginProps } from '@graphcommerce/next-config'
import { customerTokenLink } from '../link/createCustomerTokenLink'
import { customerTypePolicies, migrateCustomer } from '../typePolicies'

export const component = 'GraphQLProvider'
export const exported = '@graphcommerce/graphql'

function MagentoCustomerGraphqlProvider(props: PluginProps<GraphQLProviderProps>) {
  const { Prev, links = [], policies = [], migrations = [], ...prev } = props
  return (
    <Prev
      {...prev}
      links={[...links, customerTokenLink]}
      policies={[...policies, customerTypePolicies]}
      migrations={[...migrations, migrateCustomer]}
    />
  )
}

export const Plugin = MagentoCustomerGraphqlProvider
