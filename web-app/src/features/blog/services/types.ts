import { Category } from '@/features/category';
import { DataUser } from '@/features/user';

export type DataBlog = {
  id: string;
  title: string;
  category: Category;
  shortDesc: string;
  content: string;
  thumbnail: string;
  creator: DataUser;
  like: string[];
  createdAt: string;
  updatedAt: string;
};

export type InputBlog = Partial<
  Pick<DataBlog, 'title' | 'shortDesc' | 'content' | 'thumbnail'> & {
    category: string;
    creator: string;
  }
>;
