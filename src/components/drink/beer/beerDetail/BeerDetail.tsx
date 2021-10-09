import Image from 'next/image';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/BeerDetailAtom";
import {Constant} from 'components/Constant';
import DrinkDetailChart from 'components/common/DrinkDetailChart';
import {DrinkDetailChartData} from "types/DrinkDetailChart";


const BeerDetail: React.FC = () => {

  const beerDetail = useRecoilValue(beerDetailState);

  const chartData = new DrinkDetailChartData( "苦　味", beerDetail!.bitter,
                                              "香　り", beerDetail!.flavor,
                                              "ホップ", beerDetail!.hop,
                                              "キ　レ", beerDetail!.sharp,
                                              "ボディ", beerDetail!.body);

  return (
    <>
      <Image key="beerDetailImage" src={beerDetail!.imageUrl + Constant.IMAGE_SIZE_M} alt="beerDetailImage"
        width={Constant.IMAGE_SIZE_PX_M} height={Constant.IMAGE_SIZE_PX_M} />

      <DrinkDetailChart chartData={chartData}/>
    </>
  )
}

export default BeerDetail
