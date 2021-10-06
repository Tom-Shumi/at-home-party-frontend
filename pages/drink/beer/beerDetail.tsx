import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/beerDetailAtom";

const BeerDetail: React.FC = () => {

  const beerDetail = useRecoilValue(beerDetailState);

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader
          title={beerDetail.name}
          destination="beerList"
          buttonName="←一覧に戻る"/>
      </div>
    </Layout>
  )
}

export default BeerDetail
