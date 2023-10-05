import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App as AppProvider } from 'antd';
import ReactDOM from 'react-dom/client';

import './index.css';
import QueryProvider from './provider/query-provider.tsx';
import LayoutConfigProvider from './provider/theme-config-provider.tsx';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutConfigProvider>
      <AppProvider>
        <QueryProvider>
          <ToasterConfig />
          <Routes />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryProvider>
      </AppProvider>
    </LayoutConfigProvider>
  </React.StrictMode>,
);
