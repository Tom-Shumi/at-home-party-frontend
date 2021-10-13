import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/BeerDetailAtom";
import BeerDetailComponent from "components/drink/beer/beerDetail/BeerDetail";
import Router from 'next/router';
import ReactStars from 'react-stars';

const BeerDetail: React.FC = () => {
  const beerDetail = useRecoilValue(beerDetailState);

  // ブラウザ再読み込みした場合は一旦一覧に戻す
  if (beerDetail == null) {
    Router.push('/drink/beer/beerList');
  }

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader title={beerDetail!.name} destination="beerList" buttonName="←一覧に戻る">
          <div>
            <ReactStars
              count={5}
              value={beerDetail!.star}
              size={24}
              color1={'#d3d3d3'}
              color2={'#ffd700'}
              edit={false} />{beerDetail!.star}
          </div>
        </BeerHeader>
        <BeerDetailComponent />
      </div>
    </Layout>
  )
}

export default BeerDetail
