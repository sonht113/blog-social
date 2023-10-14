import { ComponentType, Suspense, lazy } from 'react';

type LazyComponentType<T> = ComponentType<T>;

function withLazy<T>(
  lazyImport: () => Promise<{ default: LazyComponentType<T> }>,
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const LazyComponent = lazy(lazyImport) as any;

  // eslint-disable-next-line react/display-name
  return (props: T) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

export default withLazy;
