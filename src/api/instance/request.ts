import axios from "./axios";

export const get = <Response>(url: string) => {
  return axios.get<Response>(url);
};
