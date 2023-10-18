import { FC } from 'react';

import { BreadcrumbCustom } from '@/components';
import { ListWrapper, USER_BREADCRUMBS } from '@/features/user';

const Users: FC = () => {
  return (
    <BreadcrumbCustom routes={USER_BREADCRUMBS.default}>
      <ListWrapper />
    </BreadcrumbCustom>
  );
};

export default Users;
