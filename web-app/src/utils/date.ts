import dayjs, { Dayjs } from 'dayjs';

export const formatDateToString = (
  date: Dayjs | string,
  formatType = 'DD/MM/YYYY',
) => {
  if (!date) return '';

  return dayjs(date).format(formatType);
};
