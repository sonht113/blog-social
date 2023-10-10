import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App as AppProvider } from 'antd';
import ReactDOM from 'react-dom/client';

import './index.css';
import './styles/index.less';
import { ApolloClientProvider } from './provider/apollo-client-provider.tsx';
import QueryProvider from './provider/query-provider.tsx';
import LayoutConfigProvider from './provider/theme-config-provider.tsx';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutConfigProvider>
      <ApolloClientProvider>
        <AppProvider>
          <QueryProvider>
            <ToasterConfig />
            <Routes />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryProvider>
        </AppProvider>
      </ApolloClientProvider>
    </LayoutConfigProvider>
  </React.StrictMode>,
);
