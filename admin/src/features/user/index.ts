import withLazy from '@/hoc/with-lazy';

export * from './services/type';

export * from './constant';

const ListWrapper = withLazy(() => import('./components/list-wrapper'));
const UserForm = withLazy(() => import('./components/user-form'));

export { ListWrapper, UserForm };
