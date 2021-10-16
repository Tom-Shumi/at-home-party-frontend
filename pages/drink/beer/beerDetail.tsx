import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/BeerDetailAtom";
import BeerDetailComponent from "components/drink/beer/beerDetail/BeerDetail";
import ReactStars from 'react-stars';
import ErrorComponent from 'components/common/Error';

const BeerDetail: React.FC = () => {
  const beerDetail = useRecoilValue(beerDetailState);

  const beeDetailExistsFlg = beerDetail == null;

  return (
    <>
      {beeDetailExistsFlg && <ErrorComponent />}
      {beeDetailExistsFlg ||
        <Layout title = "Beer">
          <div className="contents">
            <BeerHeader title={beerDetail!.name} destination="beerList" buttonName="←一覧に戻る">
              <div className="detailStarDiv">
                <ReactStars
                  count={5}
                  value={beerDetail!.star}
                  size={24}
                  color1={'#d3d3d3'}
                  color2={'#ffd700'}
                  edit={false} />
                <label className="detailStarLabel">{beerDetail!.star} 点</label>
              </div>
            </BeerHeader>
            <BeerDetailComponent />
          </div>
        </Layout>
      }
    </>
  )
}

export default BeerDetail
