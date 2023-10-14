import { FC, useMemo, useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { CommonButton } from '../common/button/common-button';

type Props = {
  position?: 'vertical' | 'above' | 'horizontal';
  className?: string;
  thumbnail: string;
  title: string;
  shortDesc: string;
  time: string;
  comments?: number;
  quantityLike?: number;
  isLiked?: boolean;
};

type CardActionProps = Partial<Pick<Props, 'className' | 'position'>>;

export const BlogCard: FC<Props> = ({
  position = 'vertical',
  thumbnail,
  title,
  shortDesc,
  time,
  comments = 0,
  quantityLike = 0,
  isLiked = false,
}) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLike = () => {
    setLiked((prevState) => !prevState);
  };

  const cardMediaStyle = useMemo(
    () => ({
      vertical: {
        height: 260,
      },
      above: {
        height: 340,
      },
      horizontal: { height: 200, width: 300 },
    }),
    [],
  );

  const cardInfo = useMemo(() => {
    const data = [
      {
        icon: <CalendarMonthIcon fontSize="small" />,
        title: time,
      },
      {
        icon: (
          <Link to={'/blog/123'}>
            <ChatIcon fontSize="small" />
          </Link>
        ),
        title: comments,
      },
      {
        icon: liked ? (
          <ThumbUpIcon fontSize="small" onClick={handleLike} />
        ) : (
          <ThumbUpAltOutlinedIcon fontSize="small" onClick={handleLike} />
        ),
        title: quantityLike,
      },
    ];

    return (
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        className={`mb-4 text-xs ${position === 'vertical' && 'ml-3'}`}
      >
        {data.map((d) => (
          <Box
            key={d.title}
            display="flex"
            alignItems="center"
            gap={1}
            className="cursor-pointer"
          >
            {d.icon}
            <Typography>{d.title}</Typography>
          </Box>
        ))}
      </Box>
    );
  }, [time, comments, liked, quantityLike, position]);

  return (
    <Card
      className={`relative ${
        position === 'vertical' ? 'max-h-[400px]' : ''
      } h-full`}
    >
      <Box
        display={position === 'horizontal' ? 'flex' : ''}
        justifyContent="space-between"
        className={`h-full ${position === 'vertical' ? 'flex flex-col' : ''}`}
      >
        <Box className="relative">
          <CardMedia
            sx={{ ...cardMediaStyle[position] }}
            image={thumbnail}
            title="green iguana"
          />
          <Box className="w-full h-full absolute top-0 left-0 bg-white dark:bg-black opacity-20 dark:opacity-50"></Box>
        </Box>
        <CardContent
          className={
            position === 'above'
              ? 'absolute bottom-0'
              : 'w-[60%] flex flex-col justify-between !py-0'
          }
        >
          {position === 'above' && <CardAction className="p-0" />}
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-clip line-clamp-1"
            >
              {title}
            </Typography>
            <Typography variant="body1" className="text-clip line-clamp-2 mb-2">
              {shortDesc}
            </Typography>
          </Box>
          {position !== 'vertical' && cardInfo}
        </CardContent>
        {position !== 'above' && (
          <CardAction
            className={`absolute ${
              position === 'vertical'
                ? 'top-40 translate-y-full'
                : 'top-[60%] left-1  lg:top-3/4'
            }`}
            position={position}
          />
        )}
        {position === 'vertical' && cardInfo}
      </Box>
    </Card>
  );
};

const CardAction: FC<CardActionProps> = ({ className, position }) => {
  return (
    <CardActions className={`${className}`}>
      {position === 'horizontal' ? (
        ''
      ) : (
        <Button size="small" variant="contained" color="inherit">
          <FolderCopyIcon />
        </Button>
      )}
      <CommonButton
        actionBtn="redirect"
        href="/login"
        size="small"
        color="error"
        variant="contained"
      >
        Learn More
      </CommonButton>
    </CardActions>
  );
};
