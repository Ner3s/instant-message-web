// const fixKeys = (fn) => (obj) =>
//   Object.fromEntries(
//     Object.entries(obj).map(([k, v]) => [
//       fn(k),
//       Array.isArray(v)
//         ? v.map(fixKeys(fn))
//         : typeof v == 'object'
//         ? fixKeys(fn)(v)
//         : v
//     ])
//   );

// const camelCase = (s) => s.replace(/_(.)/g, (s, c) => c.toUpperCase());

// const camelizeKeys = fixKeys(camelCase);
export const recursiveToCamel = (item: unknown): unknown => {
  if (Array.isArray(item)) {
    return item.map((el: unknown) => recursiveToCamel(el));
  } else if (typeof item === 'function' || item !== Object(item)) {
    return item;
  }
  return Object.fromEntries(
    Object.entries(item as Record<string, unknown>).map(
      ([key, value]: [string, unknown]) => [
        key.replace(/([-_][a-z])/gi, (c) =>
          c.toUpperCase().replace(/[-_]/g, '')
        ),
        recursiveToCamel(value)
      ]
    )
  );
};
