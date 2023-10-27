import { axiosMordovia } from "./axiosConfig";

export const request = {
  get: (url, config) => axiosMordovia.get(url, config).then(({ data }) => data),
}