export type Pagination<T> = {
  page: number;
  limit: number;
  data: T[];
  totalPage: number;
};

export type QueryOptions<T> = Partial<T> & {
  page?: number;
  limit?: number;
};

export type ResponseMutation<T> = {
  status: string;
  data?: T;
};
