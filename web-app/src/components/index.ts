import withLazy from '@/hoc/with-lazy';

export * from './common/toaster/toaster-config';

export * from './common/button/common-button';
export * from './common/button/confirm-button';

export * from './common/form-custom/form-custom';

export * from './input-password';

export * from './input-date-picker';
export * from './blog-card/blog-card';
export * from './categories-nav/categories-nav';

const FormCKEditor = withLazy(() => import('./ckeditor/form-ckeditor'));
const Upload = withLazy(() => import('./upload/upload'));
const SectionTag = withLazy(() => import('./section-tag'));

export { FormCKEditor, Upload, SectionTag };
