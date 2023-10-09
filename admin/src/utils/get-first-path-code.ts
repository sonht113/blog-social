function getStrTimesIndex(str: string, cha: string, num: number) {
  let x = str.indexOf(cha);

  for (let i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }

  return x;
}

export function getFirstPathCode(path: string) {
  const index0 = getStrTimesIndex(path, '/', 0);
  const index1 = getStrTimesIndex(path, '/', 1);

  const activeKey = path.slice(index0, index1 > 0 ? index1 : path.length);

  return activeKey;
}

export const getArrayWithPathCode = (path: string) => {
  return path.split('/').reduce((acc: string[], pathSegment: string) => {
    if (!pathSegment) return acc;
    const previousPath = acc.length > 0 ? acc[acc.length - 1] : '';
    const currentPath = `${previousPath}/${pathSegment}`;
    acc.push(currentPath);
    return acc;
  }, []);
};
