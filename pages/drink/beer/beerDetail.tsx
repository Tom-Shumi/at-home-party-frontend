import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/BeerDetailAtom";
import BeerDetailComponent from "components/drink/beer/beerDetail/BeerDetail"

const BeerDetail: React.FC = () => {

  const beerDetail = useRecoilValue(beerDetailState);

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader
          title={beerDetail.name}
          destination="beerList"
          buttonName="←一覧に戻る"/>
        <BeerDetailComponent />
      </div>
    </Layout>
  )
}

export default BeerDetail
