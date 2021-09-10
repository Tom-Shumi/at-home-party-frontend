import React, {useEffect, useState} from 'react';
import Layout from 'components/common/Layout';
import PickupDrink from 'components/home/PickupDrink';
import {apiClient} from 'utils/ApiUtils';
import {env} from 'utils/EnvUtils';
import { HomeInfo } from 'types/HomeInfo';
import Router from 'next/router';

const Home: React.FC = () => {
  const [homeInfo, setHomeInfo] = useState<HomeInfo>();

  useEffect(() => {
    callFetchHomeInfo();
  }, []);

  const callFetchHomeInfo = () => {
    fetchHomeInfo()
  }

  return (
    <Layout title="Home">
      <PickupDrink />
    </Layout>
  )
}

async function fetchHomeInfo() {

  try {
      const res = await apiClient().get(env(process.env.NEXT_PUBLIC_API_HOME));

      console.log(res);

      return createHomeInfo(res.data);

  } catch(error){
      // Router.push('/Error?400');
  }
}

function createHomeInfo(responseData: any[]) {


}

export default Home
