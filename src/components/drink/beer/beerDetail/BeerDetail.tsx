import Image from 'next/image';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/BeerDetailAtom";
import {Constant} from 'components/Constant';
import DrinkDetailChart from 'components/common/DrinkDetailChart';


const BeerDetail: React.FC = () => {

  const beerDetail = useRecoilValue(beerDetailState);

  return (
    <>
      <Image key="beerDetailImage" src={beerDetail.imageUrl + Constant.IMAGE_SIZE_M} alt="beerDetailImage"
        width={Constant.IMAGE_SIZE_PX_M} height={Constant.IMAGE_SIZE_PX_M} />

      <DrinkDetailChart />
    </>
  )
}

export default BeerDetail
