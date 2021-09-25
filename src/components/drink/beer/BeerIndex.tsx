
interface BeerDetailProps {
}

const BeerDetail: React.FC<BeerDetailProps> = (props) => {



  return (
    <>
      <ol className="indexOlLg">
        <li className="indexLiLg"><a href="#1">1. ビールの魅力</a></li>
        <li className="indexLiLg"><a href="#2">2. ビールの種類</a>
          <ol className="indexOlMd">
            <li className="indexLiMd"><a href="#2-1">2-1. ラガー</a></li>
            <li className="indexLiMd"><a href="#2-2">2-2. エール</a></li>
          </ol>
        </li>
        <li className="indexLiLg"><a href="#3">3. ビール雑学</a></li>
        <ol className="indexOlMd">
            <li className="indexLiMd"><a href="#3-1">3-1. 生ビールとは？</a></li>
        </ol>
      </ol>
    </>
  )
}

export default BeerDetail
