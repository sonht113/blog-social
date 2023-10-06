import { FC, ReactNode } from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

type Props = {
  children: ReactNode;
};

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

export const ApolloClientProvider: FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
