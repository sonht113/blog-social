import { FC, useMemo } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';

import { CommonButton } from '../common/button/common-button';

type Props = {
  position?: 'vertical' | 'inside' | 'horizontal';
  className?: string;
  image: string;
  title: string;
  content: string;
  time: string;
  comments?: number;
};

type CardActionProps = Partial<Pick<Props, 'className' | 'position'>>;

export const BlogCard: FC<Props> = ({
  position = 'vertical',
  image,
  title,
  content,
  time,
  comments = 0,
}) => {
  const cardMediaStyle = useMemo(
    () => ({
      vertical: {
        height: 260,
      },
      inside: {
        height: 340,
      },
      horizontal: { height: 200, width: 200 },
    }),
    [],
  );

  const cardInfo = useMemo(
    () => (
      <Box
        display="flex"
        alignItems="center"
        gap={3}
        className={`mb-4 text-xs ${position === 'vertical' && 'ml-3'}`}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <CalendarMonthIcon />
          <Typography>{time}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <ChatIcon />
          <Typography>{comments}</Typography>
        </Box>
      </Box>
    ),
    [comments, time, position],
  );

  return (
    <div>
      <Card className="relative">
        <Box display={position === 'horizontal' ? 'flex' : ''}>
          <CardMedia
            sx={{ ...cardMediaStyle[position] }}
            image={image}
            title="green iguana"
            className={position === 'inside' ? 'opacity-30' : ''}
          />
          <CardContent
            className={
              position === 'inside'
                ? 'absolute bottom-0'
                : ' flex flex-col justify-between !py-0'
            }
          >
            {position === 'inside' && <CardAction className="p-0" />}
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {content}
              </Typography>
            </Box>
            {position !== 'vertical' && cardInfo}
          </CardContent>
          {position !== 'inside' && (
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
    </div>
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
      {/* 
      <Button size="small" color="error" variant="contained">
        Learn More
      </Button> */}

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
