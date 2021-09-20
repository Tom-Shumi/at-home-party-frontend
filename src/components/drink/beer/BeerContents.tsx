import Image from 'next/image';
import BeerCharm from '/public/beerCharm.png';
import BeerType from '/public/beerType.png';
import BeerRanking from 'components/drink/beer/BeerRanking';

interface BeerContentsProps {
}

const BeerContents: React.FC<BeerContentsProps> = (props) => {

  return (
    <>
      <h5 className="headingLg" id="1">1. ビールの魅力</h5>
      <div className="contentsLg">
        <Image src={BeerCharm} alt="ビールの魅力" width={800} height={300} /><br />
        居酒屋さんでは「とりあえずビール」派の人が多いと思われます。<br />
        仕事の後、運動の後、一日の終わりに飲むビールは格別の美味しさだからです。<br />
        そんなビールには下記のような魅力があります。
        <ul className="descriptionUl">
          <li>程よい苦味</li>
          <li>すっきりとした後味</li>
          <li>喉越しの良さ</li>
          <li>色々な料理との相性の良さ</li>
        </ul>
      </div>
      <h5 className="headingLg" id="2">2. ビールの種類</h5>
      <div className="contentsLg">
        ふだん何気なく飲んでいるビールですが、実は世界にはさまざまな種類のビールがあります。<br />
        その種類は、大きく「ラガー」と「エール」に分かれています。<br />
        それぞれビールの作り方に違いがあり、その違いと特徴について下記で説明します。
        <h5 className="headingMd" id="2-1">2-1. ラガー</h5>
          <div className="contentsMd">
            ラガーとは「下面発酵によって造られたもの」を指します。<br />
            下面発酵とは、低温で長期間発酵させる方法のことです。<br />
            酵母が麦汁の下面へ沈んでいくために、下面発酵と呼ばれています。<br />
            下面発酵の特徴は低温で発酵させるため、雑菌があまり繁殖することなく、<br />
            つねに品質を一定に保ったままビールを作ることができることです。<br />
            最近の大量生産されるビールには、もってこいの方法といえます。<br /><br />
            主なラガービールの種類には以下の様なものがあります。
            <ul className="descriptionUl">
              <li>ピルスナー：のどごしがよくて、ゴクゴク飲めるビール</li>
              <li>シュヴァルツ：見た目とは裏腹にすっきりとした味わいで、ローストした麦芽の香ばしさが特徴の黒ビール</li>
              <li>ラオホ：スモーキーな風味にちょっとだけ甘さが加わった独特な味わいのビール</li>
            </ul>
          </div>
        <h5 className="headingMd" id="2-2">2-2. エール</h5>
          <div className="contentsMd">
            エールとは「上面発酵によって造られたもの」を指します。<br />
            上面発酵とは、やや高温であまり時間をかけずに発酵させる方法のことです。<br />
            酵母が麦汁の上に浮き上がっていくため、上面発酵と呼ばれています。<br />
            大量生産には向きませんが、味わい深さと飲みごたえで根強い人気があります。<br /><br />
            主なエールビールの種類には以下の様なものがあります。
            <ul className="descriptionUl">
              <li>ペールエール：薄めの色にホップやモルトの香りが豊かなビール</li>
              <li>IPA：通常のペールエールよりも、ホップの香りと苦みが強いビール</li>
              <li>ヴァイツェン：ホップの苦味があまりなく、フルーティな香りがある白ビール</li>
            </ul>
          </div>
        <Image src={BeerType} alt="ビールの種類" width={600} height={300} /><br />
      </div>
      <h5 className="headingLg" id="3">3. ランキング</h5>
        <BeerRanking />
      <h5 className="headingLg" id="4">4. ビール雑学</h5>
      <div className="contentsLg">
        <h5 className="headingMd" id="4-1">4-1. 生ビールとは？</h5>
          <div className="contentsMd">
            「生ビール」とは、ろ過機とフィルターを使い、加熱処理なしに、酵母を完全に取り除いたビールを指します。<br />
            現在、日本で製造される殆どのビールは「生ビール」です。<br />
            ビールは、工場から出荷される際の樽、瓶、缶のどれに詰められるかの違いしかありません。<br />
            ジョッキで出てくる居酒屋のビールも、瓶ビールも缶ビールも、全部「生ビール」なのです。<br /><br />
            逆に、製造過程のビールをろ過後に、加熱処理により残留している酵母を死滅させたものが、生じゃないビールです。<br />
            加熱処理したビールには、生とは違った味わいがあります。<br />
            現在も製造はされていますが、大手ビールメーカー3社の各1銘柄のみとなっています。
          </div>
      </div>
    </>
  )
}

export default BeerContents
