/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { FC, memo } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { FormControl, FormHelperText } from '@mui/material';
import ClassicEditor from 'ckeditor5-luongthanhnhi-custom-build/build/ckeditor';
import { Controller, ControllerProps } from 'react-hook-form';
import styled from 'styled-components';

import EmbedProvider from './embed-provider';
import { useUploadSingleFileMutation } from '@/hooks';

type Props = Omit<ControllerProps, 'render'> & {
  isDisabled?: boolean;
  error?: string;
};

const FormCKEditor: FC<Props> = ({ isDisabled, error, name, ...props }) => {
  const [uploadSingleFiles, { data }] = useUploadSingleFileMutation();

  function uploadAdapter(loader: { file: Promise<Blob> }) {
    return {
      upload: async () => {
        const f = await loader.file;
        try {
          await uploadSingleFiles({
            variables: { file: f },
          });
          return {
            default: data?.uploadSingleFiles.url,
          };
        } catch (err) {
          return Promise.reject(err);
        }
      },
    };
  }

  function uploadPlugin(editor: ClassicEditor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: {
      file: Promise<Blob>;
    }) => {
      return uploadAdapter(loader);
    };
  }

  const config = {
    mediaEmbed: {
      previewsInData: true,
      providers: EmbedProvider,
    },
    extraPlugins: [uploadPlugin],
  };

  return (
    <Container>
      <Controller
        {...props}
        name={name}
        render={({ field: { onChange, value = '' } }) => (
          <FormControl fullWidth>
            <CKEditorInsideForm
              value={value}
              onChange={onChange}
              {...{
                config,
                isDisabled,
              }}
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
          </FormControl>
        )}
      />
    </Container>
  );
};

export default memo(FormCKEditor);

const CKEditorInsideForm = ({
  value,
  onChange,
  config,
  isDisabled,
}: {
  value?: string;
  config: unknown;
  isDisabled?: boolean;
  onChange?: (_: unknown) => void;
}) => {
  return (
    <CKEditor
      disabled={isDisabled}
      editor={ClassicEditor}
      config={config}
      data={value}
      onChange={(_, e) => {
        onChange!(e.getData());
      }}
    />
  );
};

const Container = styled.div`
  .ck.ck-content {
    height: 500px;
    overflow-y: auto;
    color: black;
  }
`;
