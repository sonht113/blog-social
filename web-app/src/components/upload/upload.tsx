import { useEffect, useState } from 'react';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import toast from 'react-hot-toast';

import { useUploadSingleFileMutation } from '@/hooks';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

type Props = {
  value?: string;
  onChange?: (_: unknown) => void;
  disable: boolean;
};

function Upload({ value = '', onChange, disable }: Props) {
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState(value);

  const [uploadSingleFiles, { loading }] = useUploadSingleFileMutation();

  useEffect(() => {
    if (fileUpload) {
      void uploadSingleFiles({
        variables: { file: fileUpload },
        onCompleted: (data) => {
          onChange && onChange(data.uploadSingleFiles.url);
          setThumbnail(data.uploadSingleFiles.url);
          toast.success('Upload successfully');
          setFileUpload(null);
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
    }
  }, [fileUpload, onChange, uploadSingleFiles]);

  useEffect(() => {
    setThumbnail(value);
  }, [value]);

  return (
    <Box>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload thumbnail
        <VisuallyHiddenInput
          disabled={disable}
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setFileUpload(e.target.files[0]);
            }
          }}
        />
      </Button>
      <Box className={`${thumbnail ? 'mt-5' : ''}`}>
        {loading && <CircularProgress />}
        {thumbnail && (
          <img
            src={thumbnail}
            alt="preview-thumbnail"
            className="w-[150px] h-[150px] object-cover"
          />
        )}
      </Box>
    </Box>
  );
}

export default Upload;
