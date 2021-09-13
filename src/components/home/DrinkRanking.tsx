import styles from '/styles/home/DrinkRanking.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface DrinkRankingProps {

}

const DrinkRanking: React.FC<DrinkRankingProps> = (props) => {


  return (
    <div className={styles.drinkRankingDiv}>
      <h2 className={styles.rankingTitle}>Ranking</h2>
      <Tabs
        selectedTabClassName={styles.drinkRankingSelectedTabClassName}
        selectedTabPanelClassName={styles.drinkRankingSelectedTabPanelClassName}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h3>Any content 1</h3>
        </TabPanel>
        <TabPanel>
          <h3>Any content 2</h3>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default DrinkRanking
