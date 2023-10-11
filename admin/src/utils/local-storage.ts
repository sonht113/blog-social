type LocalRecord = {
  token?: string | null;
};

export const getLocalStorage = <T extends keyof LocalRecord>(key: T) =>
  localStorage.getItem(key) as LocalRecord[T];

export const setLocalStorage = <T extends keyof LocalRecord>(
  key: T,
  value: NonNullable<LocalRecord[T]>,
) => localStorage.setItem(key, value);
