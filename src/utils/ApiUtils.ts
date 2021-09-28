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

export const createOrderQuery = (order: string) => {
  let orderQuery = "";

  if (order != "") {
    const orderArr = order.split("_");
    const orderType = orderArr[0];
    const isDesc = orderArr[1] == "DESC" ? true : false;

    orderQuery = `&order=${orderType}&isDesc=${isDesc}`;
  }

  return orderQuery;
}
