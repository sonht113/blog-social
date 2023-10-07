import { FC } from 'react';
import { ReactNode } from 'react';

type Props = {
  text?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  path?: string;
};

const ButtonCus: FC<Props> = ({
  text,
  iconLeft,
  iconRight,
  className,
  path,
}) => {
  return (
    <button
      className={`border-2 border-transparent py-[5px] px-[10px] rounded-[10px] hover:border-2 hover:border-cyan-500 ${className}`}
    >
      <span>{iconLeft}</span>
      <span className="text-white text-[20px]">{text}</span>
      <link rel="stylesheet" href={path} />
      <span>{iconRight}</span>
    </button>
  );
};

export default ButtonCus;
