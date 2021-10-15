import Image from 'next/image';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/BeerDetailAtom";
import {Constant} from 'components/Constant';
import DrinkDetailChart from 'components/common/DrinkDetailChart';
import {DrinkDetailChartData} from "types/DrinkDetailChart";
import {Col, Row} from 'react-bootstrap';

const BeerDetail: React.FC = () => {
  const beerDetail = useRecoilValue(beerDetailState);

  const chartData = new DrinkDetailChartData( "苦　味", beerDetail!.bitter,
                                              "香　り", beerDetail!.flavor,
                                              "ホップ", beerDetail!.hop,
                                              "キ　レ", beerDetail!.sharp,
                                              "ボディ", beerDetail!.body);

  return (
    <>
      <Row>
        <Col xs={6}>
          <Image key="beerDetailImage" src={beerDetail!.imageUrl + Constant.IMAGE_SIZE_M} alt="beerDetailImage"
            width={Constant.IMAGE_SIZE_PX_M} height={Constant.IMAGE_SIZE_PX_M} />
        </Col>
        <Col xs={6}>
          <DrinkDetailChart chartData={chartData}/>
        </Col>
      </Row>
    </>
  )
}

export default BeerDetail
