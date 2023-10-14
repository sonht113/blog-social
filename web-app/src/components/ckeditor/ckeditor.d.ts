declare module 'ckeditor5-luongthanhnhi-custom-build/build/ckeditor' {
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export = ClassicEditor;
}

declare module '@ckeditor/ckeditor5-react' {
  import * as React from 'react';

  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
  import Event from '@ckeditor/ckeditor5-utils/src/eventinfo';
  const CKEditor: React.FunctionComponent<{
    disabled?: boolean;
    editor: typeof ClassicEditor;
    data?: string;
    id?: string;
    config?: EditorConfig;
    onReady?: (editor: ClassicEditor) => void;
    onChange?: (event: Event, editor: ClassicEditor) => void;
    onBlur?: (event: Event, editor: ClassicEditor) => void;
    onFocus?: (event: Event, editor: ClassicEditor) => void;
    onError?: (event: Event, editor: ClassicEditor) => void;
  }>;
  export { CKEditor };
}
