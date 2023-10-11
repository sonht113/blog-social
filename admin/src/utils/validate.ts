import { Rule } from 'antd/es/form';

const validate = {
  number: [
    {
      pattern: new RegExp(/^\d+$/),
      message: 'Chỉ chấp nhận kiểu số',
    },
  ],
  color: [
    {
      pattern: new RegExp(/^#([A-Fa-f\d]{8}|[A-Fa-f\d]{6}|[A-Fa-f\d]{3})$/),
      message: 'Nhập đúng ký tự mã màu',
    },
  ],
  email: [
    {
      type: 'email',
      message: 'Định dạng này không phải là Email!',
    },
  ],
  required: [
    {
      required: true,
      message: 'Trường này là bắt buộc!',
    },
  ],
  name: [
    {
      // pattern: new RegExp(/^\b\D+\b$/), //pattern: Englsih
      pattern: new RegExp(/^(?! )[\p{L} ]*(?<! )$/u), // Vietnamese
      message:
        'Tên không đươc chứa chữ số, kí tự đặc biệt, khoảng trắng ở đầu hoặc cuối',
    },
  ],
  noWhiteSpace: [
    {
      pattern: new RegExp(/^[^\s]+$/),
      message: 'Không chứa khoảng trắng',
    },
  ],
  linkYoutube: [
    {
      pattern: new RegExp(
        'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)',
      ),
      message: 'Đường dẫn này không hợp lệ theo định dạng: http(s)://www.*',
    },
  ],
  coordinate: [
    {
      pattern: new RegExp(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/),
      message: 'Vui lòng nhập đúng dịnh dạng tọa độ (x,y)',
    },
  ],
};

const validateFn = {
  min: (number: number) => [
    {
      min: number,
      message: `Trường này phải có tối thiểu ${number} ký tự`,
    },
  ],
  max: (number: number) => [
    {
      max: number,
      message: `Trường này được giới hạn tối đa ${number} ký tự`,
    },
  ],
  minAndMax: (min: number, max: number) => [
    {
      min,
      max,
      message: `Trường này phải có độ dài từ ${min} đến ${max} ký tự`,
    },
  ],
  len: (number: number) => [
    {
      len: number,
      message: `Trường này phải có đúng ${number} ký tự`,
    },
  ],
};

type TypeValidateKey = keyof typeof validate;
const validator = (key: TypeValidateKey | TypeValidateKey[]): Rule[] => {
  if (Array.isArray(key)) {
    return key.reduce(
      (result: Rule[], item) => result.concat(validate[item] as Rule[]),
      [],
    );
  }
  return validate[key] as Rule[];
};

export const validatorFn = (key: keyof typeof validateFn) => {
  return validateFn[key] as (_: unknown, __?: unknown) => Rule[];
};

export default validator;
