import Layout from 'components/common/Layout';
import BeerIndex from 'components/drink/beer/BeerIndex';
import BeerDescription from 'components/drink/beer/BeerDescription';
import BeerTable from 'components/drink/beer/BeerTable';

interface BeerProps {
}

const Beer: React.FC<BeerProps> = (props) => {

  return (
    <Layout title = "Beer">
      <div className="contents">
        <BeerIndex />
        <BeerDescription />
        <BeerTable />
      </div>
    </Layout>
  )
}

export default Beer
