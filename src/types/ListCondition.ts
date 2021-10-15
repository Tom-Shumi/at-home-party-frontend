import { Constant } from "components/Constant";

export class ListCondition {
  isBackDetail: boolean;
  searchType: string;
  detailSearchCondition: any;
  order: string;
  page: number;
  displayFlg: boolean;

  constructor(isBackDetail: boolean, searchType: string, detailSearchCondition: any
    , order: string, page: number, displayFlg: boolean) {

      this.isBackDetail = isBackDetail;
      this.searchType = searchType;
      this.detailSearchCondition = detailSearchCondition;
      this.order = order;
      this.page = page;
      this.displayFlg = displayFlg;
    }
}

export const defaultListCondition = (): ListCondition => {
  return {isBackDetail: false,
          searchType: Constant.SEARCH_TYPE_DEFAULT,
          detailSearchCondition: null,
          order: "",
          page: 0,
          displayFlg: false
  };
}
