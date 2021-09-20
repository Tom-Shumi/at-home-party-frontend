import Image from 'next/image';
import BeerCharm from '/public/beerCharm.png';
import styles from '/styles/drink/beer/BeerDescription.module.css';


interface BeerDescriptionProps {
}

const BeerDescription: React.FC<BeerDescriptionProps> = (props) => {



  return (
    <>
      <h5 className="headingLg">1. ビールの魅力</h5>
      <div className="contentsLg">
        <Image src={BeerCharm} alt="ビールの魅力" width={800} height={300} /><br />
        居酒屋さんでは「とりあえずビール」派の人が多いと思われます。<br />
        仕事の後、運動の後、一日の終わりに飲むビールは格別の美味しさだからです。<br />
        そんなビールには下記のような魅力があります。
        <ul className={styles.charmUl}>
          <li>程よい苦味</li>
          <li>すっきりとした後味</li>
          <li>喉越しの良さ</li>
          <li>色々な料理との相性の良さ</li>
        </ul>
      </div>
      <h5 className="headingLg">2. ビールの種類</h5>
      <div className="contentsLg">
        ふだん何気なく飲んでいるビールですが、実は世界にはさまざまな種類のビールがあります。<br />
        その種類は、大きく「ラガー」と「エール」に分かれています。<br />
        それぞれビールの作り方に違いがあるのですが、その違いと特徴について下記で説明します。
        <h5 className="headingMd">2-1. ラガー</h5>
          <div className="contentsMd">
            いいい
          </div>
        <h5 className="headingMd">2-2. エール</h5>
          <div className="contentsMd">
            ううう
          </div>
      </div>
      <h5 className="headingLg">3. ランキング</h5>
    </>
  )
}

export default BeerDescription
