import Layout from 'components/common/Layout';
import Router from 'next/router';
import {Button} from 'react-bootstrap';

const Error: React.FC = () => {

  const backHome = () => {
    Router.push('/');
  }

  return (
      <Layout title="Error">
          エラーが発生しました。
          <Button variant="primary" onClick={backHome} >Homeへ戻る</Button>
      </Layout>
  )
}

export default Error;
