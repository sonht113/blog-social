import { EnumCategory } from '.';

const CATEGORY_LIST = {
  [EnumCategory['COMPUTER']]: {
    label: 'Computer',
    value: EnumCategory['COMPUTER'],
  },
  [EnumCategory['SOCIAL']]: {
    label: 'Social',
    value: EnumCategory['SOCIAL'],
  },
  [EnumCategory['SOFTWARE']]: {
    label: 'Software',
    value: EnumCategory['SOFTWARE'],
  },
};

export const CATEGORY_OPTION = Object.values(CATEGORY_LIST);
