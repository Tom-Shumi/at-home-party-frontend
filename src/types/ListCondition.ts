import { Constant } from "components/Constant";

export class ListCondition {
  isBackDetail: boolean;
  searchType: string;
  searchedText: string;
  detailSearchCondition: any;
  order: string;
  page: number;
  maxPage: number;

  constructor(isBackDetail: boolean, searchType: string, searchedText: string,
    detailSearchCondition: any, order: string, page: number, maxPage: number) {

      this.isBackDetail = isBackDetail;
      this.searchType = searchType;
      this.searchedText = searchedText;
      this.detailSearchCondition = detailSearchCondition;
      this.order = order;
      this.page = page;
      this.maxPage = maxPage;
    }
}

export const defaultListCondition = (): ListCondition => {
  return {isBackDetail: false,
          searchType: Constant.SEARCH_TYPE_DEFAULT,
          searchedText: "",
          detailSearchCondition: null,
          order: "",
          page: 0,
          maxPage: 0
  };
}
