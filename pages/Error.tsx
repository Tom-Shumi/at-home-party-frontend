import Layout from 'components/common/Layout';
import {Button} from 'react-bootstrap';
import ErrorImage from '/public/error.png';
import Image from 'next/image';
import styles from '/styles/Error.module.css';
import {backHome} from 'utils/CommonUtils';

const Error: React.FC = () => {

  return (
      <Layout title="Error">
        <div className={styles.errorDiv}>
          <Image src={ErrorImage} alt="エラー" width={400} height={300} />
          <Button variant="warning" className={styles.backHomeButton} onClick={backHome} >Homeへ戻る</Button>
        </div>
      </Layout>
  )
}

export default Error;
