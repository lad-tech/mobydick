import typedKeys from './typedKeys';

export default function mergeObjects<T extends {[key: string]: unknown}>(
  first: T,
  second: T,
  merger: <U extends keyof T>(key: U, first: T, second: T) => T[U],
) {
  const ret = {} as T;
  const keys = new Set(typedKeys(first).concat(typedKeys(second)));

  for (const key of keys) {
    ret[key] = merger(key, first, second);
  }

  return ret;
}
