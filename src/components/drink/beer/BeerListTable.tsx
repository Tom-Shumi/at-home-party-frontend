import {Table} from 'react-bootstrap';
import { Beer } from 'types/Beer';
import Image from 'next/image';
import ReactStars from 'react-stars';
import Pagination from 'components/common/Pagination';


interface BeerListTableProps {
  beerList: Beer[];
  currentPage: number;
  maxPage: number;
  paging: (page: number) => void
}

const BeerListTable: React.FC<BeerListTableProps> = (props) => {

  const headerColspan = 2;

  return (
    <>
      <Pagination currentPage={props.currentPage} maxPage={props.maxPage} paging={props.paging} />
      <Table hover>
        <thead>
          <tr className="centerTr">
            <th className="numberTh">#</th>
            <th colSpan={headerColspan} >商品</th>
            <th className="starTh">星</th>
            <th className="detailTh">度数</th>
            <th className="detailTh">苦味</th>
            <th className="detailTh">香り</th>
            <th className="detailTh">ホップ</th>
            <th className="detailTh">キレ</th>
            <th className="detailTh">ボディ</th>
          </tr>
        </thead>
        <tbody>
          {(props.beerList || []).map((beer, count) => {
            return (
              <tr key={"beerRanking" + (count + 1)} className="rankingTr" >
                <td className="centerTd">{count + 1}</td>
                <td className="imageTd">
                  {beer.infoUrl != null &&
                    <Image key={"beerRankingImage" + (count + 1)}
                    src={beer.infoUrl} alt={"beerRankingImage" + (count + 1)} width={70} height={70} />
                  }
                </td>
                <td>{beer.name}</td>
                <td className="centerTd">
                  <ReactStars
                    count={5}
                    value={beer.star}
                    size={24}
                    color1={'#d3d3d3'}
                    color2={'#ffd700'}
                    edit={false} />{beer.star}
                </td>
                <td className="centerTd">{beer.alcohol} %</td>
                <td className="centerTd">{beer.bitter}</td>
                <td className="centerTd">{beer.flavor}</td>
                <td className="centerTd">{beer.hop}</td>
                <td className="centerTd">{beer.sharp}</td>
                <td className="centerTd">{beer.body}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Pagination currentPage={props.currentPage} maxPage={props.maxPage} paging={props.paging} />
    </>
  )
}

export default BeerListTable
