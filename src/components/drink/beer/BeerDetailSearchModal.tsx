import styles from '/styles/common/BeerDetailSearchModal.module.css';
import {Modal, Button, Row, Col} from 'react-bootstrap';

interface BeerDetailSearchModalProps {
  detailSearchCondition: {};
  setDetailSearchCondition: any;
  close: () => void;
}

const BeerDetailSearchModal: React.FC<BeerDetailSearchModalProps> = (props) => {

  return (
    <Modal show={true} onHide={props.close} key='beerDetailSearchModal' animation = {false}>
      <Modal.Header>
        <Modal.Title>詳細検索</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>商品名</Col>
          <Col></Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default BeerDetailSearchModal;
