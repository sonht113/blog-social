import { FC, useMemo } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { CommonButton } from '../common/button/common-button';
import { useAuthStore } from '@/features/auth';

type Props = {
  id?: string;
  position?: 'vertical' | 'above' | 'horizontal';
  className?: string;
  thumbnail: string;
  title: string;
  shortDesc: string;
  time: string;
  like?: string[];
  quantityLike?: number;
  isLiked?: boolean;
  onLike: () => void;
};

type CardActionProps = Partial<Pick<Props, 'className' | 'position' | 'id'>>;

export const BlogCard: FC<Props> = ({
  id,
  position = 'vertical',
  thumbnail,
  title,
  shortDesc,
  time,
  like,
  quantityLike = 0,
  isLiked = false,
  onLike,
}) => {
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);

  const cardMediaStyle = useMemo(
    () => ({
      vertical: {
        height: 260,
      },
      above: {
        height: 280,
      },
      horizontal: { height: 150, width: 120 },
    }),
    [],
  );

  const cardInfo = useMemo(() => {
    const data = [
      {
        id: '1',
        icon: <CalendarMonthIcon fontSize="small" />,
        title: time,
      },
      {
        id: '2',
        icon: (
          <Link to={`/blog/${id}`}>
            <Tooltip title="Comment">
              <ChatIcon fontSize="small" />
            </Tooltip>
          </Link>
        ),
      },
      {
        id: '3',
        icon: (
          <IconButton onClick={onLike}>
            <ThumbUpIcon
              fontSize="small"
              color={
                isLiked && like?.includes(user?.id as string) && token
                  ? 'info'
                  : 'action'
              }
            />
          </IconButton>
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
            key={d.id}
            display="flex"
            alignItems="center"
            gap={1}
            className="cursor-pointer"
          >
            {d.icon}
            {d.title && <Typography>{d.title}</Typography>}
          </Box>
        ))}
      </Box>
    );
  }, [
    time,
    id,
    onLike,
    isLiked,
    like,
    user?.id,
    token,
    quantityLike,
    position,
  ]);

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
              : 'w-[75%] flex flex-col justify-between !py-0'
          }
        >
          {position === 'above' && <CardAction id={id} className="p-0" />}
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
            id={id}
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

const CardAction: FC<CardActionProps> = ({ className, position, id }) => {
  return (
    <CardActions className={`!pl-0 ${className}`}>
      {position === 'horizontal' ? (
        ''
      ) : (
        <Button size="small" variant="contained" color="inherit">
          <FolderCopyIcon />
        </Button>
      )}
      <CommonButton
        actionBtn="redirect"
        href={`/blog/${id}`}
        size="small"
        color="error"
        variant="contained"
      >
        See more
      </CommonButton>
    </CardActions>
  );
};
