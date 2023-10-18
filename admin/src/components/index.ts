import withLazy from '@/hoc/with-lazy';

export * from './common/toaster/toaster-config';

const TableCustom = withLazy(() => import('./table-custom/table-custom'));
const BreadcrumbCustom = withLazy(
  () => import('./breadcrumb-custom/breadcrumb-custom'),
);

export { TableCustom, BreadcrumbCustom };
