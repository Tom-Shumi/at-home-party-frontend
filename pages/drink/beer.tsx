import Layout from 'components/common/Layout';
import BeerIndex from 'components/drink/beer/BeerIndex';
import BeerContents from 'components/drink/beer/BeerContents';

interface BeerProps {
}

const Beer: React.FC<BeerProps> = (props) => {

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerIndex />
        <BeerContents />
      </div>
    </Layout>
  )
}

export default Beer
