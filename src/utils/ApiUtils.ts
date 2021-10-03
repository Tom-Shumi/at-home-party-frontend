import Axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig }= getConfig();

export const apiClient = () => {
  return Axios.create({
      baseURL: publicRuntimeConfig.NEXT_PUBLIC_API_SERVER,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true });
}
