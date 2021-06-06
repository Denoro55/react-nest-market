import axios from "./axios";
import { AxiosRequestConfig } from "axios";

export const get = <Response>(
  url: string,
  config?: AxiosRequestConfig | undefined
) => {
  return axios.get<Response>(url, config);
};
