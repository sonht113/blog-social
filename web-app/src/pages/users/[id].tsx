import { FC, SetStateAction, useMemo, useState } from 'react';

import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Box,
  Container,
  Typography,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import { BlogCard, EmptyData } from '@/components';
import { useGetBlogsQuery, useLikeBlogMutation } from '@/features/blog';
import { useGetUserDetailQuery } from '@/features/user';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const UserProfile: FC = () => {
  const [value, setValue] = useState('1');

  const handleChange = (_: unknown, newValue: SetStateAction<string>) => {
    setValue(newValue);
  };
  const { id } = useParams();

  const { data: userData } = useGetUserDetailQuery(id!);
  const { data: blogData, refetch } = useGetBlogsQuery({ creator: id! });

  const [likeBlog] = useLikeBlogMutation();

  const handleLikeBlog = (id: string) => {
    void likeBlog({
      variables: { id },
      onCompleted: () => {
        void refetch();
      },
      onError: () => {
        toast.error('Something went wrong!');
      },
    });
  };

  const infoUser = useMemo(
    () => [
      {
        id: 1,
        icon: <EmailOutlinedIcon color="info" />,
        text: userData?.getUserById.email || 'Not have email',
      },
      {
        id: 2,
        icon: <ContactPhoneOutlinedIcon color="info" />,
        text: userData?.getUserById.phoneNumber || 'Not have phone number',
      },
      {
        id: 3,
        icon: <HomeOutlinedIcon color="info" />,
        text: userData?.getUserById.address || 'Not have address',
      },
      {
        id: 4,
        icon: <DescriptionOutlinedIcon color="info" />,
        text: userData?.getUserById.desc || 'Not have description',
      },
    ],
    [userData],
  );

  return (
    <Box>
      <Container className="flex flex-col items-center justify-center">
        <img
          src={userData?.getUserById.avatar}
          alt={userData?.getUserById.fullname}
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full mx-auto md:mx-0"
        />
        <Typography
          variant="h4"
          fontWeight={700}
          className="text-center md:text-left"
        >
          {userData?.getUserById.fullname}
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Information" value="1" />
              <Tab label="My blog" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Demo>
              <List>
                {infoUser.map((i) => (
                  <ListItem key={i.id}>
                    <ListItemAvatar>
                      <Avatar>{i.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <Typography>{i.text}</Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Demo>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={2}>
              {!blogData ||
                (blogData.getBlogs.data.length === 0 && (
                  <Grid item xs={12}>
                    <EmptyData />
                  </Grid>
                ))}
              {blogData?.getBlogs.data.map((blog) => (
                <Grid key={blog.id} item xs={12} md={6} lg={4}>
                  <BlogCard
                    id={blog.id}
                    position="vertical"
                    title={blog.title}
                    thumbnail={blog.thumbnail}
                    shortDesc={blog.shortDesc}
                    time={dayjs(blog.createdAt).format('DD/MM/YYYY')}
                    isLiked={blog.isLiked}
                    like={blog.like}
                    quantityLike={blog.like.length}
                    onLike={() => handleLikeBlog(blog.id)}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
};

export default UserProfile;
