import styles from '/styles/common/NoData.module.css';

const NoData: React.FC = () => {

  return (
    <>
      <div className={styles.noDataDiv}>
        データがありません。
      </div>
    </>
  )
}

export default NoData;
