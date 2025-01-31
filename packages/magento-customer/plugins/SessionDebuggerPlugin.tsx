import type { PagesProps } from '@graphcommerce/framer-next-pages'
import { useApolloClient } from '@graphcommerce/graphql/apollo'
import type { IfConfig, PluginProps } from '@graphcommerce/next-config'
import { Button } from '@mui/material'
import { CustomerTokenDocument } from '../hooks/CustomerToken.gql'

export const component = 'FramerNextPages'
export const exported = '@graphcommerce/framer-next-pages'
export const ifConfig: IfConfig = 'debug.sessions'

const SessionDebuggerPlugin = (props: PluginProps<PagesProps>) => {
  const { Prev, ...rest } = props
  const client = useApolloClient()

  return (
    <>
      <Prev {...rest} />
      <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 1, opacity: 0.3 }}>
        <Button
          type='button'
          variant='text'
          size='small'
          onClick={() => {
            const currentToken = client.readQuery({ query: CustomerTokenDocument })
            if (!currentToken?.customerToken?.token) {
              console.log('No customerToken available, nothing to break')
            } else {
              console.log(`Changing current token to a random one`)

              client.writeQuery({
                query: CustomerTokenDocument,
                data: {
                  customerToken: {
                    ...currentToken?.customerToken,
                    token: 'hihaho',
                  },
                },
                broadcast: true,
              })
            }
          }}
        >
          Invalidate session token
        </Button>
      </div>
    </>
  )
}

export const Plugin = SessionDebuggerPlugin
