import React, {useEffect, useState} from 'react';
import Layout from 'components/common/Layout';
import PickupDrink from 'components/home/PickupDrink';
import DrinkRanking from 'components/home/DrinkRanking';
import {apiClient} from 'utils/ApiUtils';
import {env} from 'utils/EnvUtils';
import { HomeInfo } from 'types/HomeInfo';
import Router from 'next/router';
import { PickupDrink as PickupDrinkType } from 'types/PickupDrink';
import { Drink as DrinkType } from 'types/Drink';

const Home: React.FC = () => {
  const [homeInfo, setHomeInfo] = useState<HomeInfo>(new HomeInfo);

  useEffect(() => {
    callFetchHomeInfo();
  }, []);

  const callFetchHomeInfo = () => {
    // const res: Promise<HomeInfo> = fetchHomeInfo()
    // res.then(ret => setHomeInfo(ret));
  }

  return (
    <Layout title = "Home">
      <PickupDrink pickupDrinkList = {homeInfo.pickupDrinkList!}/>
      <DrinkRanking
        beerRankingList = {homeInfo.beerRankingList!}
        chuhighRankingList = {homeInfo.chuhighRankingList!}
        sakeRankingList = {homeInfo.sakeRankingList!}
        wineRankingList = {homeInfo.wineRankingList!}/>
    </Layout>
  )
}

async function fetchHomeInfo() {

  try {
      const res = await apiClient().get(env(process.env.NEXT_PUBLIC_API_HOME));

      return new HomeInfo(
        createPickupDrinkList(res.data.pickupDrinkList),
        createDrinkRankingList(res.data.beerRankingList),
        createDrinkRankingList(res.data.chuhighRankingList),
        createDrinkRankingList(res.data.sakeRankingList),
        createDrinkRankingList(res.data.wineRankingList)
      );

  } catch(error){
      Router.push('/error');
      return new HomeInfo();
  }
}

function createPickupDrinkList(responseData: any[]) {

  const pickupDrinkList :PickupDrinkType[] = [];

  for (let i = 0 ; i < responseData.length ; i++) {
    pickupDrinkList.push(new PickupDrinkType(responseData[i]["id"], responseData[i]["drinkId"], responseData[i]["imageUrl"], responseData[i]["deleteFlg"]))
  }

  return pickupDrinkList;
}

function createDrinkRankingList(responseData: any[]) {

  const drinkList :DrinkType[] = [];

  for (let i = 0 ; i < responseData.length ; i++) {
    drinkList.push(new DrinkType(responseData[i]["id"], responseData[i]["name"], responseData[i]["description"], responseData[i]["drinkCategoryId1"],
                                  responseData[i]["drinkCategoryId2"], responseData[i]["infoUrl"], responseData[i]["alcohol"], responseData[i]["star"]))
  }

  return drinkList;
}

export default Home;
