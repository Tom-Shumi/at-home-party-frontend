import {Constant} from 'components/Constant';
import { ListCondition } from 'types/ListCondition';

export const createQueryString = (condition: ListCondition): string => {

  const pageQuery = `?page=${condition.page}`
  let drinkNameQuery = "";
  if (condition.detailSearchCondition.searchType == Constant.SEARCH_TYPE_DRINK_NAME) {
    drinkNameQuery = condition.detailSearchCondition.drinkName == ""
                        ? ""
                        : `&drinkName=${condition.detailSearchCondition.drinkName}`;
  }

  let detailSearchQuery = "";
  if (condition.detailSearchCondition.searchType == Constant.SEARCH_TYPE_DETAIL) {
    detailSearchQuery = createDetailSearchQuery(condition.detailSearchCondition);
  }

  const orderQuery = createOrderQuery(condition.order);

  return `${pageQuery}${drinkNameQuery}${detailSearchQuery}${orderQuery}`;
}

export const createOrderQuery = (order: string) => {
  let orderQuery = "";

  if (order != null && order != "") {
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
