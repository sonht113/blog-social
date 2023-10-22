import { DataUser } from '@/features/user';

export type DataBlog = {
  id: string;
  title: string;
  category: number;
  shortDesc: string;
  content: string;
  thumbnail: string;
  creator: DataUser;
  like: string[];
  isLiked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DataComment = {
  id: string;
  content: string;
  blog: string;
  creator: DataUser;
  createdAt: string;
  updatedAt: string;
};

export type InputBlog = Partial<
  Pick<DataBlog, 'title' | 'shortDesc' | 'content' | 'thumbnail'> & {
    category: number;
    creator: string;
  }
>;

export type QueryOption = Partial<{
  page: number;
  limit: number;
  category: number;
  creator: string;
}>;

export type ResPaginationBlogData = {
  page: number;
  limit: number;
  totalPage: number;
  data: DataBlog[];
};
