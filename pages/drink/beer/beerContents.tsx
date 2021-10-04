import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import BeerIndex from 'components/drink/beer/beerContents/BeerIndex';
import BeerContentsComponent from 'components/drink/beer/beerContents/BeerContents';

const BeerContents: React.FC = () => {

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader
          title="ビール"
          destination="beerList"
          buttonName="←一覧に戻る"/>
        <BeerIndex />
        <BeerContentsComponent />
      </div>
    </Layout>
  )
}

export default BeerContents
