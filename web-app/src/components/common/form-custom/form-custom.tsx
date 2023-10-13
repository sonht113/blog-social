/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Controller } from 'react-hook-form';

import { DataFieldInputType } from '@/ts/types';
import { validator } from '@/utils';

type Props = {
  data: DataFieldInputType<any>[];
};

export function FormCustom({ data }: Props) {
  return (
    <React.Fragment>
      {data.map((i) => (
        <Controller
          rules={i.isRequired ? validator('required') : {}}
          key={i.name}
          control={i.control}
          render={i.element}
          name={i.name}
        />
      ))}
    </React.Fragment>
  );
}
