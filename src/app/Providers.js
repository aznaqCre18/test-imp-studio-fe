'use client'

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

function Providers({children }) {
  return (
    <QueryClientProvider client={queryClient}>
        <CacheProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
        <ReactQueryDevtools initialIsOpen={true} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default Providers
