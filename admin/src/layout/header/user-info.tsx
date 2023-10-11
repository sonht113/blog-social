import { useCallback, useEffect } from 'react';

import { Avatar, Dropdown, Space, Typography } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import toast from 'react-hot-toast';
import { AiOutlineDown, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { LOGIN_PATH, USER_PATH } from '@/data';
import { useLogoutMutation } from '@/features/auth';
import { useQueryInfoUser } from '@/hooks';

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
  const navigate = useNavigate();
  const { data, error } = useQueryInfoUser();

  // Instant logout when unidentified
  useEffect(() => {
    if (error) {
      localStorage.removeItem('token');
      window.location.replace(LOGIN_PATH);
    }
  }, [error]);

  const { logout } = useLogoutMutation();

  const handleClick: MenuClickEventHandler = useCallback(
    ({ key }) => {
      if (key === '2') {
        logout();
        toast.success('Đăng xuất thành công');
      } else if (key === '1') {
        navigate(`${USER_PATH}/${data?.getInfo.id ?? ''}`);
      }
    },
    [logout, navigate, data?.getInfo.id],
  );

  return (
    <Dropdown
      menu={{ items, onClick: handleClick }}
      trigger={['click']}
      placement="bottomRight"
      arrow
    >
      <Space className="cursor-pointer">
        {data?.getInfo.avatar ? (
          <Avatar size="small" src={data?.getInfo.avatar} className="block" />
        ) : (
          <Avatar
            size="small"
            icon={<AiOutlineUser />}
            className="flex justify-center items-center"
          />
        )}
        <Typography.Text>{data?.getInfo.fullname}</Typography.Text>
        <AiOutlineDown className="block" />
      </Space>
    </Dropdown>
  );
};

export default UserInfo;
