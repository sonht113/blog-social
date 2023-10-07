import { FC } from 'react';
import { ReactNode } from 'react';

import { Link } from 'react-router-dom';

type Props = {
  text?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  path?: string;
};

const MenuItem: FC<Props> = ({
  text,
  iconLeft,
  iconRight,
  className,
  path,
}) => {
  return (
    <Link to={path as string}>
      <button
        className={`ease-in duration-300 border-2 border-transparent py-1.5 px-2.5 rounded-xl hover:border-2 hover:border-cyan-500 ${className}`}
      >
        <span>{iconLeft}</span>
        <span className="text-white text-xl">{text}</span>
        <span>{iconRight}</span>
      </button>
    </Link>
  );
};

export default MenuItem;