import { useEffect, useState } from 'react';

import { Layout, Menu, theme } from 'antd';
import { ItemType } from 'rc-menu/lib/interface';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR } from '@/data';
import { menuList } from '@/data/constant/navs';
import { useThemeStore } from '@/hooks';
import { getArrayWithPathCode, getFirstPathCode } from '@/utils';

const { Sider } = Layout;

const MenuComponent = () => {
  const token = theme.useToken();
  const location = useLocation();
  const themeStore = useThemeStore((state) => state.theme);

  const [openKey, setOpenkey] = useState<string>();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  useEffect(() => {
    const code = getFirstPathCode(location.pathname);

    setOpenkey(code);
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const onMenuClick = (path: string) => {
    setSelectedKey(path);
  };

  const onOpenChange = (keys: string[]) => {
    const key = keys.pop();
    setOpenkey(key as string);
  };

  const StyleSider = styled(Sider)`
    .ant-layout-sider-children {
      overflow: auto;
    }
    .ant-layout-sider-trigger {
      background-color: ${themeStore === 'dark'
        ? COLOR.DARK_PRIMARY
        : COLOR.LIGHT_PRIMARY};
    }
  `;

  return (
    <StyleSider
      collapsible
      collapsedWidth={80}
      style={{
        backgroundColor: token.token.colorBgContainer,
      }}
    >
      <Menu
        mode="inline"
        items={menuList as ItemType[]}
        selectedKeys={openKey ? getArrayWithPathCode(selectedKey) : []}
        openKeys={openKey ? [openKey] : []}
        onOpenChange={onOpenChange}
        onSelect={(k) => onMenuClick(k.key)}
      />
    </StyleSider>
  );
};

export default MenuComponent;
