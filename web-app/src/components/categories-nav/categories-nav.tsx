import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import SectionTag from '../section-tag';
import { useQueryCategories } from '@/hooks';

export const CategoriesNav = () => {
  const { data } = useQueryCategories();
  return (
    <Box>
      <SectionTag sectionTagName="categories" />
      <Box className="flex flex-col text-gray-400 ">
        {data?.getCategories.map((el) => (
          <Link to={el.link} key={el.id} className="hover:text-red-600">
            {el.name}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
