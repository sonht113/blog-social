/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { create } from 'zustand';

import { ResponseLogin } from '../services/type';

type AuthStore = {
  token?: string;
  user?: ResponseLogin['user'];
  loginUser: (_: ResponseLogin) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()((set) => ({
  token: localStorage.getItem('token') || undefined,
  loginUser: (dataLogin) => {
    localStorage.setItem('token', dataLogin.access_token);
    set({
      token: dataLogin.access_token,
      user: dataLogin.user,
    });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: undefined, user: undefined });
  },
}));

export default useAuthStore;
