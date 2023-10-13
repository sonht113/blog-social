import { FC } from 'react';

import { InputAdornment, OutlinedInput } from '@mui/material';
import { FiSearch } from 'react-icons/fi';

import { InfoProfile, MenuItem, MenuMobile, ThemeButton } from './components';
import { HEADER_LOGO_TEXT } from './constant';
import { CommonButton } from '@/components';
import { LOGIN_PATH } from '@/data';
import { useAuthStore } from '@/features/auth';
import { useQueryCategories } from '@/hooks';
// import { useActiveMenu } from '@/hooks';

const HeaderComponent: FC = () => {
  // const { checkActive } = useActiveMenu();
  // const isActive = checkActive(['/computer', '/technology']);

  const { data } = useQueryCategories();

  const token = useAuthStore((state) => state.token);
  return (
    <header className="bg-secondary block fixed w-full inset-x-0 z-30 h-16 shadow-md">
      <div className="w-full bg-black flex justify-center items-center gap-10 py-1.5">
        <img
          src="https://seeklogo.com/images/W/web-dev-logo-E60991AA99-seeklogo.com.png"
          alt="logo"
          className="w-10"
        />
        <span className="text-3xl font-bold text-white xl:text-5xl">
          {HEADER_LOGO_TEXT}
        </span>
      </div>
      <div className="w-full bg-red-600">
        <center>
          <div className="w-full justify-around flex items-center py-2.5 xl:w-4.5/5">
            <MenuMobile className="block xl:hidden" />
            <div className="hidden xl:block">
              {data?.getCategories.map((el) => (
                <MenuItem text={el.name} path={el.link} key={el.id} />
              ))}
            </div>
            <div className="flex justify-center items-center xl:gap-5 ">
              <OutlinedInput
                className="mr-3"
                id="outlined-adornment-text"
                endAdornment={
                  <InputAdornment position="end">
                    <FiSearch />
                  </InputAdornment>
                }
              />
              <ThemeButton />
              {token ? (
                <InfoProfile />
              ) : (
                <CommonButton actionBtn="redirect" href={LOGIN_PATH}>
                  Login
                </CommonButton>
              )}
            </div>
          </div>
        </center>
      </div>
    </header>
  );
};

export default HeaderComponent;
