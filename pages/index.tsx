import React, {useEffect} from 'react';
import Layout from 'components/common/Layout';
import PickupDrink from 'components/home/PickupDrink';
import {apiClient} from 'utils/ApiUtils';

const Home: React.FC = () => {

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

async function fetchHomeInfo(){

}

export default Home
