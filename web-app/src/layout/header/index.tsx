import { InputAdornment, OutlinedInput } from '@mui/material';
import { FiSearch } from 'react-icons/fi';

import ButtonCus from './components/button';
import InfProfile from './components/inf-profile';
import MenuButton from './components/menu-button';
import ThemeButton from './components/theme-button';
import { headerDatas } from './utiil';
// import { useActiveMenu } from '@/hooks';

const HeaderComponent = () => {
  // const { checkActive } = useActiveMenu();
  // const isActive = checkActive(['/computer', '/technology']);
  return (
    <header className="bg-secondary block fixed w-full inset-x-0 z-30 h-16  shadow-">
      <div className="w-full bg-black flex justify-center items-center gap-10 py-[10px]">
        <img
          src="https://seeklogo.com/images/W/web-dev-logo-E60991AA99-seeklogo.com.png"
          alt=""
          className="w-[80px]"
        />
        <span className="text-[50px] font-bold text-white">Blog Dev</span>
      </div>
      <div className="w-full bg-red-600">
        <center>
          <div className="w-full justify-around flex items-center py-[10px] xl:w-[3/5]">
            <MenuButton className=" xl:hidden" />
            <div className="hidden xl:block">
              {headerDatas &&
                headerDatas.map((el) => (
                  <span key={el.id}>
                    <ButtonCus text={el.text} path={el.path} />
                  </span>
                ))}
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <OutlinedInput
                id="outlined-adornment-text"
                endAdornment={
                  <InputAdornment position="end">
                    <FiSearch />
                  </InputAdornment>
                }
              />
              <ThemeButton />
              <InfProfile />
            </div>
          </div>
        </center>
      </div>
    </header>
  );
};

export default HeaderComponent;
