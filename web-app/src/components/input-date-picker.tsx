import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

type Props = DatePickerProps<Dayjs>;

export function InputDatePicker({ ...props }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker {...props} views={['day', 'month', 'year']} />
    </LocalizationProvider>
  );
}
