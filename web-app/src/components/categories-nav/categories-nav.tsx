import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import SectionTag from '../section-tag';
import { useActiveMenu, useQueryCategories } from '@/hooks';

export const CategoriesNav = () => {
  const { checkActive } = useActiveMenu();
  const { data } = useQueryCategories();
  return (
    <Box>
      <SectionTag sectionTagName="categories" />
      <Box className="flex flex-col text-gray-400 gap-10">
        {data?.getCategories.map((el) => (
          <Link
            to={el.link}
            key={el.id}
            className={`${
              checkActive(el.link) ? 'text-red-600' : ''
            } hover:text-red-600`}
          >
            {el.name}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
