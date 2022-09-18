import Layout from '../component/Layout'
import '../styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import { appWithTranslation } from "next-i18next"
import { ReactQueryDevtools } from 'react-query/devtools'
import "../styles/globals.css"


function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
