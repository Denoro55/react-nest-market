import qs from "qs";

export const getQuery = (search: string): Record<string, string> =>
  qs.parse(search, { ignoreQueryPrefix: true }) as Record<string, string>;
