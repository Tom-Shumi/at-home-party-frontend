import Layout from 'components/common/Layout';
import { useRouter } from 'next/router';
import BeerHeader from 'components/drink/beer/BeerHeader';

const BeerDetail: React.FC = () => {

  const router = useRouter();
  const id = router.query.id;

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader
          title={id}
          destination="beerList"
          buttonName="←一覧に戻る"/>
      </div>
    </Layout>
  )
}

export default BeerDetail
