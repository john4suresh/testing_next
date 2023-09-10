import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

axiosInstance.interceptors.request.use(async (request) => {
  if (!isAccessTokenAttachedToAxiosDefaults())
    await setAccessTokenOnRequestAndAsAxiosDefaults(request);
  return request;
});

const isAccessTokenAttachedToAxiosDefaults = () => {
  const authHeader = axiosInstance.defaults.headers.common["Authorization"];
  if (authHeader === null || authHeader === undefined || authHeader === "")
    return false;
  else return true;
};

const setAccessTokenOnRequestAndAsAxiosDefaults = async (request) => {
  const session = await getSession();
  if (session) {
    const AuthHeaderValue = `Bearer ${session.access}`;
    if (!request.headers) request.headers = {};
    request.headers.Authorization = AuthHeaderValue;

    axiosInstance.defaults.headers.common["Authorization"] = AuthHeaderValue;
  }
};

export const unsetAccessTokenAttachedToAxiosDefaults = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};

const api = (axios) => {
  return {
    get: function (url, config = {}) {
      return axios.get(url, config);
    },
    put: function (url, body, config = {}) {
      return axios.put(url, body, config);
    },
    post: function (url, body, config = {}) {
      return axios.post(url, body, config);
    },
    delete: function (url, config = {}) {
      return axios.delete(url, config);
    },
  };
};
export const apiUrls = {
  client: {
    assessment: (clientId) =>
      `/api/v3/coach-dashboard/client-assessment-tabs/${clientId}`,
  },
};

export default api(axiosInstance);
