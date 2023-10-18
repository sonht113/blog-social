import { ReactNode, useMemo } from 'react';

import { Breadcrumb } from 'antd';
import { BreadcrumbProps } from 'antd/es/breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

import { BreadcrumbsType } from '@/ts/types';

type Props = {
  routes?: BreadcrumbsType[];
  children: ReactNode;
};

const itemRender = (
  route: BreadcrumbsType,
  _: unknown,
  routes: BreadcrumbsType[],
) => {
  const isRouterLast = routes.indexOf(route) === routes.length - 1;
  return isRouterLast ? (
    <span>{route.title}</span>
  ) : (
    <Link to={route.link || ''}>{route.title}</Link>
  );
};

const BreadcrumbCustom = ({ routes = [], children }: Props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initRouters = useMemo(
    () => [{ link: '/dashboard', title: 'Trang chủ' }, ...routes],
    [routes],
  );
  return (
    <div className="relative">
      <Breadcrumb
        className="sticky z-20 h-[40px] bg-[#f5f5f5] top-0 left-0 w-full"
        items={initRouters}
        itemRender={itemRender as BreadcrumbProps['itemRender']}
      />
      {children}
    </div>
  );
};

export default BreadcrumbCustom;
