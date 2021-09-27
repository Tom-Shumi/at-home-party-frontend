import {useEffect, useState} from 'react';
import { Beer } from 'types/Beer';
import {apiClient} from 'utils/ApiUtils';
import {env} from 'utils/EnvUtils';
import Router from 'next/router';
import {Button} from 'react-bootstrap';
import NoData from 'components/common/NoData';
import BeerListTable from 'components/drink/beer/BeerListTable';

const BeerList: React.FC = () => {
  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [searchText, setSearchText] = useState<string>(""); // テキストボックス内の文字列
  const [searchedText, setSearchedText] = useState<string>(""); // 実際に検索を行なった文字列
  const [currentPage, setCurrentPage]  = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [order, setOrder] = useState<string>("");

  // 初期表示用
  useEffect(() => {
    callFetchBeerList();
  }, []);

  const paging = (page: number) => {
    setCurrentPage(page)
    callFetchBeerList(page)
  }

  const searchBeerList = () => {
    setSearchedText(searchText)

  }

  // 検索用
  useEffect(() => {
    callFetchBeerList();
  }, [searchedText]);

  const callFetchBeerList = (page: number = 0) => {
    const res: Promise<Beer[]> = fetchBeerList(page)
    res.then(ret => setBeerList(ret));
  }

  async function fetchBeerList(page: number) {

    const drinkNameQuery = searchedText == "" ? "" : `&drinkName=${searchedText}`;

    try {
      const res = await apiClient().get(env(`${process.env.NEXT_PUBLIC_API_DRINK_BEER}?page=${page}${drinkNameQuery}`));

      setMaxPage(res.data.maxPage);
      return createBeerList(res.data.beerList);

    } catch(error){
      Router.push('/error');
      return [];
    }
  }

  const handleChangeSearchText = () => (e: any) => setSearchText(e.target.value);

  const isNoData = beerList.length == 0;

  return (
    <>
      <div>
        <input type="text" value={searchText} onChange={handleChangeSearchText()} className="searchText" placeholder="表品名を入力してください。" />
        <Button variant="success" className="searchButton" onClick={() => searchBeerList()} >検索</Button>

        <select value={order}>
          <option value=""></option>
          <option value="STAR_DESC">星多い順</option>
          <option value="STAR_ASC">星少ない順</option>
          <option value="ALCOHOL_DESC">アルコール強い順</option>
          <option value="ALCOHOL_ASC">アルコール弱い順</option>
          <option value="BITTER_DESC">苦味強い順</option>
          <option value="BITTER_ASC">苦味弱い順</option>
          <option value="FLAVOR_DESC">香り強い順</option>
          <option value="FLAVOR_ASC">香り弱い順</option>
          <option value="HOP_DESC">ホップ感ある順</option>
          <option value="HOP_ASC">ホップ感ない順</option>
          <option value="SHARP_DESC">キレある順</option>
          <option value="SHARP_ASC">キレない順</option>
          <option value="BODY_DESC">ボディ強い順</option>
          <option value="BODY_ASC">ボディ弱い順</option>
        </select>
      </div>

      {isNoData || <BeerListTable beerList={beerList} currentPage={currentPage} maxPage={maxPage} paging={paging} />}
      {isNoData && <NoData />}
    </>
  )
}

function createBeerList(responseData: any[]) {

  const beerList :Beer[] = [];

  for (let i = 0 ; i < responseData.length ; i++) {
    beerList.push(new Beer(responseData[i]["id"], responseData[i]["name"], responseData[i]["description"], responseData[i]["drinkCategoryId1"], responseData[i]["drinkCategoryId2"]
    , responseData[i]["infoUrl"], responseData[i]["alcohol"], responseData[i]["star"], responseData[i]["bitter"], responseData[i]["flavor"], responseData[i]["hop"]
    , responseData[i]["sharp"], responseData[i]["body"]))
  }

  return beerList;
}

export default BeerList
