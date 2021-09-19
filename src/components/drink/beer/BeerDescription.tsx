import BeerIcon from '/public/beer.png';
import Image from 'next/image';
import styles from '/styles/drink/beer/BeerDescription.module.css';


interface BeerDescriptionProps {
}

const BeerDescription: React.FC<BeerDescriptionProps> = (props) => {



  return (
    <>
      <h2><Image src={BeerIcon} className={styles.beerIcon} alt="Beer" width={40} height={40} />ビール</h2>
      <hr />
    </>
  )
}

export default BeerDescription
