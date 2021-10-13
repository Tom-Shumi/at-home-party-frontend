import {useEffect, useState} from 'react';
import { Beer } from 'types/Beer';
import {apiClient} from 'utils/ApiUtils';
import {createQueryString} from 'utils/ListApiUtils';
import {env} from 'utils/EnvUtils';
import Router from 'next/router';
import {Button, Spinner} from 'react-bootstrap';
import NoData from 'components/common/NoData';
import BeerListTable from 'components/drink/beer/beerList/BeerListTable';
import BeerDetailSearchModal from 'components/drink/beer/beerList/BeerDetailSearchModal';
import {Constant} from 'components/Constant';
import BeerSortSelectBox from 'components/drink/beer/beerList/BeerSortSelectBox';
import { useRecoilState } from "recoil";
import { beerListConditionState } from "components/drink/beer/beerDetail/BeerDetailAtom";
import { defaultListCondition, ListCondition } from 'types/ListCondition';

const BeerList: React.FC = () => {
  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>(""); // テキストボックス内の文字列
  const [isDetailSearchModalOpen, setIsDetailSearchModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [condition, setCondition] = useState<ListCondition>(defaultListCondition());

  const [conditionRecoil, setConditionRecoil] = useRecoilState(beerListConditionState);

  const handleChangeSearchText = () => (e: any) => setSearchText(e.target.value);
  const handleChangeOrder = () => (e: any) => {
    setCondition({...condition, page: 0, order: e.target.value})
  }

  // 初期表示用
  useEffect(() => {
    // 詳細画面から遷移してきた際に、遷移前の状態を復元する。
    if (conditionRecoil != null && conditionRecoil.isBackDetail) {
      setSearchText(conditionRecoil.detailSearchCondition == null
                                                            ? ""
                                                            : conditionRecoil.detailSearchCondition.drinkName)
      setCondition(conditionRecoil);
    } else {
      callFetchBeerList(condition)
    }
  }, []);

  const paging = (page: number) => {
    setCondition({...condition, page: page})
  }

  const searchBeerList = () => {
    const detailSearchCondition = {...condition.detailSearchCondition, drinkName: searchText, searchType: Constant.SEARCH_TYPE_DRINK_NAME};
    setCondition({...condition, detailSearchCondition: detailSearchCondition});
  }

  useEffect(() => {
    callFetchBeerList(condition);
  }, [condition]);

  const callFetchBeerList = (condition: ListCondition) => {
    setIsLoading(true);

    setConditionRecoil({...condition, isBackDetail: false});

    const res: Promise<Beer[]> = fetchBeerList(condition);
    res.then(ret => {
      setBeerList(ret);
      setIsLoading(false);
    });
  }

  async function fetchBeerList(condition: ListCondition) {

    const queryString: string = createQueryString(condition);

    try {
      const res = await apiClient().get(env(`${process.env.NEXT_PUBLIC_API_DRINK_BEER}${queryString}`));

      setMaxPage(res.data.maxPage);
      return createBeerList(res.data.beerList);

    } catch(error){
      Router.push('/error');
      return [];
    }
  }

  const openDetailSearchModal = () => setIsDetailSearchModalOpen(true);
  const closeDetailSearchModal = () => setIsDetailSearchModalOpen(false);

  const isNoData = beerList.length == 0;

  return (
    <>
      <div>
        <input type="text" value={searchText} onChange={handleChangeSearchText()} className="searchText" placeholder="商品名を入力してください。" />
        <Button variant="warning" className="searchButton" onClick={() => searchBeerList()} >商品名で検索</Button>

        <BeerSortSelectBox order={condition.order} handleChangeOrder={handleChangeOrder}/>

        <Button variant="warning" className="detailSearchButton" onClick={() => openDetailSearchModal()} >詳細検索</Button>
        {isDetailSearchModalOpen &&
          <BeerDetailSearchModal condition={condition}
            setCondition={setCondition} close={closeDetailSearchModal}/>}
      </div>

      {isLoading && <div className="spinnerDiv"><Spinner animation="border" variant="warning" /></div>}
      {isLoading || isNoData || <BeerListTable beerList={beerList} currentPage={condition.page} maxPage={maxPage} paging={paging} />}
      {isLoading || isNoData && <NoData />}
    </>
  )
}

export default BeerList


export function initDetailSearchCondition() {
  return {drinkName: "", starFrom: "", starTo: "", alcoholFrom: "", alcoholTo: "", bitterFrom: "", bitterTo: "",
          flavorFrom: "", flavorTo: "", hopFrom: "", hopTo: "", sharpFrom: "", sharpTo: "", bodyFrom: "", bodyTo: ""}
}

function createBeerList(responseData: any[]) {

  const beerList :Beer[] = [];

  for (let i = 0 ; i < responseData.length ; i++) {
    beerList.push(new Beer(responseData[i]["id"], responseData[i]["name"], responseData[i]["description"], responseData[i]["drinkCategoryId1"], responseData[i]["drinkCategoryId2"]
    , responseData[i]["infoUrl"], responseData[i]["imageUrl"], responseData[i]["alcohol"], responseData[i]["star"], responseData[i]["bitter"], responseData[i]["flavor"], responseData[i]["hop"]
    , responseData[i]["sharp"], responseData[i]["body"]))
  }

  return beerList;
}
