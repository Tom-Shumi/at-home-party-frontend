import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import BeerIndex from 'components/drink/beer/BeerIndex';
import BeerContents from 'components/drink/beer/BeerContents';

interface BeerDetailProps {
}

const BeerDetail: React.FC<BeerDetailProps> = (props) => {

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader
          destination="beerList"
          buttonName="←一覧に戻る"/>
        <BeerIndex />
        <BeerContents />
      </div>
    </Layout>
  )
}

export default BeerDetail
