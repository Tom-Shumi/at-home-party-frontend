import {Table} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import styles from '/styles/drink/beer/BeerRanking.module.css';
import { Beer } from 'types/Beer';
import Image from 'next/image';
import ReactStars from 'react-stars';
import {Constant} from 'components/Constant';
import {apiClient} from 'utils/ApiUtils';
import {env} from 'utils/EnvUtils';
import Router from 'next/router';


interface BeerListProps {
}

const BeerList: React.FC<BeerListProps> = (props) => {

  const [beerList, setBeerList] = useState<Beer[]>([]);

  useEffect(() => {
    callFetchBeerList();
  }, []);

  const callFetchBeerList = () => {
    const res: Promise<Beer[]> = fetchBeerList()
    res.then(ret => setBeerList(ret));
  }

  const headerColspan = 2;

  return (
    <>
      <div>
        <input type="text" name="searchText" />
      </div>


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
          {(beerList || []).map((beer, count) => {
            let color = "rankingColor" + (count + 1);

            return (
              <tr key={"beerRanking" + (count + 1)} className={"rankingTr" + Constant.CSS_JOIN + color} >
                <td className="centerTd">{count + 1}</td>
                <td className="imageTd">
                  {beer.infoUrl != null &&
                    <Image key={"beerRankingImage" + (count + 1)}
                    src={beer.infoUrl} alt={"beerRankingImage" + (count + 1)} width={70} height={70} />
                  }
                </td>
                <td className={styles.nameTd}>{beer.name}</td>
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
    </>
  )
}

async function fetchBeerList() {

  try {
    const res = await apiClient().get(env(process.env.NEXT_PUBLIC_API_DRINK_BEER));

    return createBeerList(res.data);

  } catch(error){
    Router.push('/error');
    return [];
  }
}

function createBeerList(responseData: any[]) {

  const beerList :Beer[] = [];

  for (let i = 0 ; i < responseData.length ; i++) {
    beerList.push(new Beer(responseData[i]["id"], responseData[i]["name"], responseData[i]["description"], responseData[i]["drinkCategoryId1"], responseData[i]["drinkCategoryId2"]
    , responseData[i]["infoUrl"], responseData[i]["alcohol"], responseData[i]["star"], responseData[i]["bitter"], responseData[i]["flavor"], responseData[i]["hop"]
    , responseData[i]["sharp"], responseData[i]["body"]))
  }

  return beerList;
}

export default BeerList
