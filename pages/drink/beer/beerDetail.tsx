import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/BeerDetailAtom";
import BeerDetailComponent from "components/drink/beer/beerDetail/BeerDetail";
import { useRouter } from 'next/router';

const BeerDetail: React.FC = () => {
  const router = useRouter();
  const beerDetail = useRecoilValue(beerDetailState);

  // ブラウザ再読み込みした場合は一旦一覧に戻す
  if (beerDetail == null) {
    router.push({
      pathname: "/drink/beer/beerList"
    });
  }

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader
          title={beerDetail!.name}
          destination="beerList"
          buttonName="←一覧に戻る"/>
        <BeerDetailComponent />
      </div>
    </Layout>
  )
}

export default BeerDetail
