import {Constant} from 'components/Constant';

export const createQueryString = (page: number, searchType: string, searchedText: string, detailSearchCondition: any, order: string): string => {

  const pageQuery = `?page=${page}`

  let drinkNameQuery = "";
  if (searchType == Constant.SEARCH_TYPE_DRINK_NAME) {
    drinkNameQuery = searchedText == "" ? "" : `&drinkName=${searchedText}`;
  }

  let detailSearchQuery = "";
  if (searchType == Constant.SEARCH_TYPE_DETAIL) {
    detailSearchQuery = createDetailSearchQuery(detailSearchCondition);
  }

  const orderQuery = createOrderQuery(order);

  return `${pageQuery}${drinkNameQuery}${detailSearchQuery}${orderQuery}`;
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

export const createDetailSearchQuery = (condition: any): string => {
  let query: string = "";

  Object.keys(condition).forEach(key => query = checkBlankAndConcat(query, condition[key], key));

  return query;
}

export const checkBlankAndConcat = (query: string, condition: string, conditionName: string): string => {
  if (condition != "") {
    query += `&${conditionName}=${condition}`;
  }

  return query;
}
