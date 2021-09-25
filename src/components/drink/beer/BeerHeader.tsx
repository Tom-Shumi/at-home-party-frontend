import BeerIcon from '/public/beer.png';
import Image from 'next/image';
import styles from '/styles/drink/beer/BeerIndex.module.css';
import {Button} from 'react-bootstrap';
import {link} from 'utils/CommonUtils';


interface BeerHeaderProps {
  destination: string;
  buttonName: string;
}

const BeerHeader: React.FC<BeerHeaderProps> = (props) => {



  return (
    <>
      <div className="drinkPageHeader">
        <h1><Image src={BeerIcon} className={styles.beerIcon} alt="Beer" width={40} height={40} />ビール</h1>
        <Button variant="warning" className="drinkPageHeaderButton" onClick={() => link(props.destination)} >
          {props.buttonName}
        </Button>
      </div>
      <hr />
    </>
  )
}

export default BeerHeader
