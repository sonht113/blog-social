import { gql } from '@apollo/client';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

import { useThemeStore } from '@/hooks';

const QUERY_USERS = gql(`
    query getUsers($query: OptionsQueryType!){
        getUsers(query: $query){
          page
          limit
          totalPage
          data {
            fullname
            email
          }
        }
    }
  `);

const Home = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: async () =>
      request('http://localhost:3000/graphql', QUERY_USERS, { query: {} }),
  });

  return (
    <div>
      <span>Home</span>
      <button
        onClick={() => {
          theme === 'dark'
            ? setTheme({ theme: 'light' })
            : setTheme({ theme: 'dark' });
        }}
      >
        Change theme
      </button>
    </div>
  );
};

export default Home;
