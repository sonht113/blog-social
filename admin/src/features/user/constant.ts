export const USER_PATH = '/users';
export const USER_NAME = 'thành viên';

const LIST_USER_BREADCRUMBS = {
  title: `Danh sách ${USER_NAME}`,
  link: USER_PATH,
};

export const USER_BREADCRUMBS = {
  default: [
    {
      title: `Danh sách ${USER_NAME}`,
    },
  ],
  detail: () => [
    { ...LIST_USER_BREADCRUMBS },
    {
      title: `Chi tiết ${USER_NAME}`,
    },
  ],
  add: () => [
    { ...LIST_USER_BREADCRUMBS },
    {
      title: `Thêm ${USER_NAME}`,
    },
  ],
};
