import { useCallback } from "react";
import { AxiosResponse } from "axios";
import { useMountedState } from "./useMountedState";

export const useSafeAsync = () => {
  const isMounted = useMountedState();

  const safeAsync = useCallback(<Response>(promise: any): Promise<
    AxiosResponse<Response>
  > => {
    return new Promise((resolve, reject) => {
      promise.then((value: AxiosResponse<Response>) => {
        if (isMounted()) {
          resolve(value);
        }
      }).catch((err: Error) => {
        if (isMounted()) {
          reject(err);
        }
      });
    });
  }, []);

  return safeAsync;
};
