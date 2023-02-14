export default function typedKeys<T extends {[key: string]: unknown}>(
  object: T,
) {
  return Object.keys(object) as (keyof T)[];
}
