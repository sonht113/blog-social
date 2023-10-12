import { PROFILE_PATH } from '@/data';

export const HEADER_LOGO_TEXT = 'BLOG DEV';

export const HEADER_LIST_ITEM = [
  {
    id: 1,
    text: 'Computer',
    path: '/computer',
  },
  {
    id: 2,
    text: 'Digital product',
    path: '/digital-product',
  },
  {
    id: 3,
    text: 'Electronics',
    path: '/electronics',
  },
  {
    id: 4,
    text: 'Cadgets',
    path: '/cadgets',
  },
  {
    id: 5,
    text: 'Mobiles',
    path: '/mobiles',
  },
  {
    id: 6,
    text: 'Social media',
    path: '/social-media',
  },
  {
    id: 7,
    text: 'Technology',
    path: '/technology',
  },
] as const;

export const PROFILE_LIST_ITEM = [
  { id: 1, name: 'View Profile', path: PROFILE_PATH },
  { id: 2, name: 'Logout' },
];
