import { FC } from 'react';

import { Link } from 'react-router-dom';

type Props = {
  isActive: boolean;
  text?: string;
  className?: string;
  path: string;
};

const MenuItem: FC<Props> = ({ isActive, text, className, path }) => {
  return (
    <Link to={path}>
      <button
        className={`ease-in duration-300 border-2 border-transparent py-1.5 px-2.5 rounded-xl ${
          isActive && 'border-white'
        } hover:border-2 hover:border-white ${className}`}
      >
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default MenuItem;
