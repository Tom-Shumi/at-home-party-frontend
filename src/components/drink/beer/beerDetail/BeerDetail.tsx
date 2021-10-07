import Image from 'next/image';
import { useRecoilValue } from "recoil";
import { beerDetailState } from "components/drink/beer/beerDetail/BeerDetailAtom";


const BeerDetail: React.FC = () => {

  const beerDetail = useRecoilValue(beerDetailState);

  return (
    <>
      <Image key="beerDetailImage" src={beerDetail.infoUrl} alt="beerDetailImage" width={70} height={70} />
    </>
  )
}

export default BeerDetail
