import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ApolloClientProvider } from './provider/apollo-client-provider.tsx';
import QueryProvider from './provider/query-provider.tsx';
import LayoutConfigProvider from './provider/theme-config-provider.tsx';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutConfigProvider>
      <ApolloClientProvider>
        <QueryProvider>
          <ToasterConfig />
          <Routes />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryProvider>
      </ApolloClientProvider>
    </LayoutConfigProvider>
  </React.StrictMode>,
);
