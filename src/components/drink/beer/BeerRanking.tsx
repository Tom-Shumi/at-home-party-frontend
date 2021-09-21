import {Table} from 'react-bootstrap';
import styles from '/styles/drink/beer/BeerRanking.module.css';
import { Drink } from 'types/Drink';
import Image from 'next/image';
import ReactStars from 'react-stars';
import {Constant} from 'components/Constant';


interface BeerRankingProps {
}

const BeerRanking: React.FC<BeerRankingProps> = (props) => {

  const headerColspan = 2;

  return (
    <>
      <Table hover>
      <thead>
        <tr className="centerTr">
          <th className="numberTh">#</th>
          <th colSpan={headerColspan} >商品</th>
          <th className="starTh">星</th>
          <th className="detailTh">苦味</th>
          <th className="detailTh">香り</th>
          <th className="detailTh">ホップ</th>
          <th className="detailTh">キレ</th>
          <th className="detailTh">ボディ</th>
        </tr>
      </thead>
      <tbody>
        <tr className="rankingTr">
          <td className="centerTd">1</td>
          <td className="imageTd"><Image src="https://images-fe.ssl-images-amazon.com/images/P/B01BM9ECRE.09.TZZZZZZZ" alt="beer" width={70} height={70} /></td>
          <td>ビール1位</td>
          <td className="centerTd"><ReactStars
                  count={5}
                  value={3}
                  size={24}
                  color1={'#d3d3d3'}
                  color2={'#ffd700'}
                  edit={false} /></td>
          <td className="centerTd">5</td>
          <td className="centerTd">5</td>
          <td className="centerTd">5</td>
          <td className="centerTd">5</td>
          <td className="centerTd">5</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default BeerRanking
