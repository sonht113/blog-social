import { Suspense } from 'react';

import { Layout, Spin } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import fallbackRender from './error-boundary/fallbackRender';
import HeaderComponent from './header';
import MenuComponent from './menu';

const { Content } = Layout;

const LayoutComponent = () => {
  return (
    <Layout className="h-full">
      <HeaderComponent />
      <Layout>
        <MenuComponent />
        <Content className="px-4 py-20 flex flex-col">
          <ErrorBoundary fallbackRender={fallbackRender}>
            <Suspense
              fallback={
                <div className="w-full h-full flex">
                  <Spin spinning className="m-auto" />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
