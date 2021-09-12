import { PickupDrink as PickupDrinkType } from "types/PickupDrink"
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '/styles/home/PickupDrink.module.css';

interface PickupDrinkProps {
  pickupDrinkList: PickupDrinkType[];
}

const PickupDrink: React.FC<PickupDrinkProps> = (props) => {

  const sliderSettings = {
    dots: true,
    autoplay: true,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
  };

  return (
    <>
      <Slider {...sliderSettings}>
        {(props.pickupDrinkList || []).map((pickupDrink, count) => (
          <div key={'PickupDrinkDiv' + pickupDrink.id}>
            <Image key={'PickupDrink' + pickupDrink.id} src={pickupDrink.imageUrl} alt={"PickupDrink" + count} width={550} height={350} />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default PickupDrink
