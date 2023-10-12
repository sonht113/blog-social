import { DataUser } from '@/features/user';

export type LoginValues = {
  username: string;
  password: string;
};

export type ResponseLogin = {
  access_token: string;
  user: DataUser;
};
