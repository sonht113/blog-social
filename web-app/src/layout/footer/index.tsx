import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import bloglogo from '../../assets/blog-logo.png';
import { HEADER_LOGO_TEXT } from '../header/constant';
import { CommonButton } from '@/components';
import { useQueryCategories } from '@/hooks';

const quickLinkDatas = [
  {
    quickLinkName: 'Blog',
  },
  {
    quickLinkName: 'Code of Product',
  },
  {
    quickLinkName: 'Private Policy',
  },
  {
    quickLinkName: 'Terms and Conditions',
  },
];

const FooterComponent = () => {
  const { data } = useQueryCategories();
  return (
    <Box className="w-full bg-gray-900">
      <Box className="w-full md:w-3/5 px-2 mx-auto py-10 ">
        <Grid container spacing={2} className="mb-12">
          <Grid item xs={6} md={6} lg={3}>
            <img src={bloglogo} alt="logo" className="w-28 mb-10" />
            <Typography className="text-9xl text-white">
              {HEADER_LOGO_TEXT}
            </Typography>
          </Grid>
          <Grid item container xs={6} md={6} lg={3}>
            <Grid item className="text-xl text-white">
              Quick Link
            </Grid>
            <Grid item container>
              <Box className="flex flex-col text-gray-400">
                {quickLinkDatas.map((el) => (
                  <Link
                    to=""
                    key={el.quickLinkName}
                    className="hover:text-red-600"
                  >
                    {el.quickLinkName}
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Grid item container xs={6} md={6} lg={3}>
            <Grid item className="text-xl text-white ">
              Categories
            </Grid>
            <Grid item container>
              <Box className="flex flex-col text-gray-400">
                {data?.getCategories.map((el) => (
                  <Link to={el.link} key={el.id} className="hover:text-red-600">
                    {el.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Grid item container xs={6} md={6} lg={3} spacing={2}>
            <Grid item md={12} className="text-xl text-white">
              Subscribe
            </Grid>
            <Grid item md={12} lg={12}>
              <TextField
                fullWidth
                label="Enter your email"
                id="email"
                inputProps={{
                  style: {
                    color: 'white',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: 'white',
                  },
                }}
              />
            </Grid>
            <Grid item md={12} lg={12}>
              <CommonButton
                actionBtn="redirect"
                size="small"
                color="error"
                variant="contained"
              >
                Submit
              </CommonButton>
            </Grid>
          </Grid>
        </Grid>
        <Typography className="flex justify-center items-center text-white">
          <CopyrightOutlinedIcon />
          2023 Blog Social - Built with <FavoriteOutlinedIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterComponent;
