import Layout from 'components/common/Layout';
import BeerHeader from 'components/drink/beer/BeerHeader';
import BeerListComponent from 'components/drink/beer/BeerList';

interface BeerListProps {
}

const BeerList: React.FC<BeerListProps> = (props) => {

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerHeader
          destination="beerDetail"
          buttonName="ビールについてもっと知る →" />
        <BeerListComponent />
      </div>
    </Layout>
  )
}

export default BeerList
