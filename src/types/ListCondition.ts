import { Constant } from "components/Constant";

export class ListCondition {
  isBackDetail: boolean;
  searchType: string;
  detailSearchCondition: any;
  order: string;
  page: number;

  constructor(isBackDetail: boolean, searchType: string, detailSearchCondition: any
    , order: string, page: number) {

      this.isBackDetail = isBackDetail;
      this.searchType = searchType;
      this.detailSearchCondition = detailSearchCondition;
      this.order = order;
      this.page = page;
    }
}

export const defaultListCondition = (): ListCondition => {
  return {isBackDetail: false,
          searchType: Constant.SEARCH_TYPE_DEFAULT,
          detailSearchCondition: null,
          order: "",
          page: 0
  };
}
