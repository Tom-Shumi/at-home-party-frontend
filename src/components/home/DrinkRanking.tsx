import styles from '/styles/home/DrinkRanking.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
import CrownIcon from '/public/crown.png';

interface DrinkRankingProps {

}

const DrinkRanking: React.FC<DrinkRankingProps> = (props) => {


  return (
    <div className={styles.drinkRankingDiv}>
      <h2 className={styles.rankingTitle}>
        <Image src={CrownIcon} className={styles.crownIcon} alt="Ranking" width={40} height={40} />
        Ranking
      </h2>
      <Tabs selectedTabClassName={styles.selectedTabClassName}>
        <TabList>
          <Tab>ビール</Tab>
          <Tab>チューハイ</Tab>
          <Tab>日本酒</Tab>
          <Tab>ワイン</Tab>
        </TabList>

        <TabPanel>
          <h3>Any content 1</h3>
        </TabPanel>
        <TabPanel>
          <h3>Any content 2</h3>
        </TabPanel>
        <TabPanel>
          <h3>Any content 3</h3>
        </TabPanel>
        <TabPanel>
          <h3>Any content 4</h3>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default DrinkRanking
