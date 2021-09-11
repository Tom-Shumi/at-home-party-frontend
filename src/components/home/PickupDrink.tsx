import { PickupDrink as PickupDrinkType } from "types/PickupDrink"
import Image from 'next/image';

interface PickupDrinkProps {
  pickupDrinkList: PickupDrinkType[];
}

const PickupDrink: React.FC<PickupDrinkProps> = (props) => {
  return (
    <>
      <Image src="http://drive.google.com/uc?export=view&id=1pR0MOrLLoPxnXnPZWEVsljRInG5m8Mip" alt="test" width={550} height={350} />
    </>
  )
}

export default PickupDrink
