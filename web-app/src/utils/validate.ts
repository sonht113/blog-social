const validate = {
  required: {
    value: true,
    message: 'This field is required',
  },
};

const validateFn = {
  minLength: (number: number) => ({
    value: number,
    message: `This field must have ${number} or more characters`,
  }),
  maxLength: (number: number) => ({
    value: number,
    message: `This field can only have a maximum of ${number} characters`,
  }),
  min: (number: number) => ({
    value: number,
    message: `This field value must be greater than or equal ${number}`,
  }),
  max: (number: number) => ({
    value: number,
    message: `This field value must be less than or equal than ${number}`,
  }),
};

type ValidatorKey = keyof typeof validate;

export const validator = (
  key: ValidatorKey[] | ValidatorKey,
): {
  [k in ValidatorKey as string]: {
    value?: unknown;
    message: string;
  };
} => {
  if (Array.isArray(key)) {
    return key.reduce(
      (
        result: {
          [k in ValidatorKey as string]: {
            value?: unknown;
            message: string;
          };
        },
        item,
      ) => ({ ...result, [item]: validate[item] }),
      {},
    );
  }

  return { [key]: validate[key] };
};

export const getValueValidatorFn = (key: keyof typeof validateFn) => {
  return validateFn[key] as (_: unknown) => {
    value: unknown;
    message: string;
  };
};

export const validatorFn = (
  key: keyof typeof validateFn,
  v: {
    value: unknown;
    message: string;
  },
) => {
  return {
    [key]: v,
  };
};
