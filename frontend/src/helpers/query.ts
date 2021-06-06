import qs from "qs";

export const getQuery = (search: string): Record<string, string> =>
  qs.parse(search, { ignoreQueryPrefix: true }) as Record<string, string>;

export const stringifyQuery = (
  obj: Record<string, string | number | null>
): string => {
  Object.entries(obj).forEach(([key, value]) => {
    if (!value) {
      delete obj[key];
    }
  });

  return qs.stringify(obj);
};
