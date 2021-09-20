import BeerIcon from '/public/beer.png';
import Image from 'next/image';
import styles from '/styles/drink/beer/BeerIndex.module.css';


interface BeerIndexProps {
}

const BeerIndex: React.FC<BeerIndexProps> = (props) => {



  return (
    <>
      <h1><Image src={BeerIcon} className={styles.beerIcon} alt="Beer" width={40} height={40} />ビール</h1>
      <hr />
      <ol className="indexOlLg">
        <li className="indexLiLg"><a href="#1">1. ビールの魅力</a></li>
        <li className="indexLiLg"><a href="#2">2. ビールの種類</a>
          <ol className="indexOlMd">
            <li className="indexLiMd"><a href="#2-1">2-1. ラガー</a></li>
            <li className="indexLiMd"><a href="#2-2">2-2. エール</a></li>
          </ol>
        </li>
        <li className="indexLiLg"><a href="#3">3. ランキング</a></li>
        <li className="indexLiLg"><a href="#4">4. ビール雑学</a></li>
        <ol className="indexOlMd">
            <li className="indexLiMd"><a href="#4-1">4-1. 生ビールとは？</a></li>
        </ol>
      </ol>
    </>
  )
}

export default BeerIndex
