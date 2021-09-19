import Image from 'next/image';
import styles from '/styles/drink/beer/BeerDescription.module.css';


interface BeerDescriptionProps {
}

const BeerDescription: React.FC<BeerDescriptionProps> = (props) => {



  return (
    <>
      <h3 className="headingLg">1. ビールの魅力</h3>
      <div className="contentsLg">
        あああ
      </div>
      <h3 className="headingLg">2. ビールの種類</h3>
      <div className="contentsLg">
        <h5 className="headingMd">2-1. ラガー</h5>
          <div className="contentsMd">
            いいい
          </div>
        <h5 className="headingMd">2-2. エール</h5>
          <div className="contentsMd">
            ううう
          </div>
      </div>
      <h3 className="headingLg">3. ランキング</h3>
    </>
  )
}

export default BeerDescription
