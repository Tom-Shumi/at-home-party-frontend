export class ListConditionState {
  isBackDetail: boolean;
  searchType: string;
  searchedText: string;
  detailSearchCondition: any;
  order: string;
  page: number;

  constructor(isBackDetail: boolean, searchType: string, searchedText: string,
    detailSearchCondition: any, order: string, page: number) {

      this.isBackDetail = isBackDetail;
      this.searchType = searchType;
      this.searchedText = searchedText;
      this.detailSearchCondition = detailSearchCondition;
      this.order = order;
      this.page = page;
    }
}

export const defaultListConditionState = (): ListConditionState => {
  return {isBackDetail: false,
          searchType: "SEARCH_TYPE_DETAIL",
          searchedText: "",
          detailSearchCondition: null,
          order: "",
          page: 0
  };
}
