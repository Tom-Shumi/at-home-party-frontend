import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import BeerListComponent from 'components/drink/beer/beerList/BeerList';

const BeerList: React.FC = () => {

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader
          title="ビール"
          destination="beerContents"
          buttonName="ビールについてもっと知る →" />
        <BeerListComponent />
      </div>
    </Layout>
  )
}

export default BeerList
