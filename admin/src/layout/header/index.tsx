import { Button, Image, Layout, Space, Typography } from 'antd';
import { BsSun } from 'react-icons/bs';
import { FaRegMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import UserInfo from './user-info';
import { COLOR, DASHBOARD_PATH } from '@/data';
import { useThemeStore } from '@/hooks';

const { Header } = Layout;

const HeaderComponent = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    setTheme({
      theme: newTheme,
    });
  };

  return (
    <Header className="bg-inherit">
      <div
        className="fixed inset-x-0 z-30 flex items-center justify-between h-16 px-4"
        style={{
          backgroundColor:
            theme === 'dark' ? COLOR.DARK_PRIMARY : COLOR.LIGHT_PRIMARY,
        }}
      >
        <Link to={DASHBOARD_PATH} className="flex items-center">
          <Image
            className="mr-8"
            width={68}
            preview={false}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="Brand logo"
          />
          <Typography className="text-lg font-bold">ADMIN PANEL</Typography>
        </Link>
        <Space>
          <Button
            onClick={onChangeTheme}
            icon={
              theme === 'dark' ? <BsSun size={20} /> : <FaRegMoon size={20} />
            }
          />
          <UserInfo />
        </Space>
      </div>
    </Header>
  );
};

export default HeaderComponent;
