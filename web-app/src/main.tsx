import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import { ApolloClientProvider } from './provider/apollo-client-provider.tsx';
import LayoutConfigProvider from './provider/theme-config-provider.tsx';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutConfigProvider>
      <ApolloClientProvider>
        <ToasterConfig />
        <Routes />
      </ApolloClientProvider>
    </LayoutConfigProvider>
  </React.StrictMode>,
);
