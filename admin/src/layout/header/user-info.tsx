import { Avatar, Dropdown, Space, Typography } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { AiOutlineDown, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';

const items: ItemType[] = [
  {
    key: '1',
    icon: <AiOutlineUser />,
    label: 'Tài khoản',
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    danger: true,
    icon: <AiOutlineLogout />,
    label: 'Đăng xuất',
  },
];

const UserInfo = () => {
  //const { data: user, isError } = useInfoQuery();

  // Instant logout when unidentified
  // useEffect(() => {
  //   if (isError) {
  //     localStorage.removeItem('token');
  //     window.location.replace(LOGIN_PATH);
  //   }
  // }, [isError]);

  // const { mutate } = useLogoutMutation();

  // const handleClick: MenuClickEventHandler = useCallback(
  //   ({ key }) => {
  //     if (key === '2') {
  //       mutate(undefined);
  //     } else if (key === '1') {
  //       navigate(`${USER_PATH}/${user?.id ?? ''}`);
  //     }
  //   },
  //   [mutate, navigate, user],
  // );

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      placement="bottomRight"
      arrow
    >
      <Space className="cursor-pointer">
        <Avatar size="small" icon={<AiOutlineUser />} className="block" />
        <Typography.Text>hello</Typography.Text>
        <AiOutlineDown className="block" />
      </Space>
    </Dropdown>
  );
};

export default UserInfo;
