import { isEmpty } from 'lodash';

export const checkValueEmpty = (val: unknown): boolean => {
  return isEmpty(val);
};
