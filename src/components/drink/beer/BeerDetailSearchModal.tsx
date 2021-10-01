import styles from '/styles/common/BeerDetailSearchModal.module.css';
import {Modal, Button, Row, Col} from 'react-bootstrap';

interface BeerDetailSearchModalProps {
  detailSearchCondition: {};
  setDetailSearchCondition: any;
  close: () => void;
}

const BeerDetailSearchModal: React.FC<BeerDetailSearchModalProps> = (props) => {

  return (
    <Modal show={true} onHide={props.close} key='beerDetailSearchModal' animation = {false} className="modal">
      <Modal.Header>
        <Modal.Title className="modalTitle">詳細検索</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={3} className="modalLabel">商品名</Col>
          <Col xs={9} className="modalInput">
            <input type="text" className="modalFullText" />
          </Col>
          <Col xs={3} className="modalLabel">星</Col>
          <Col xs={9} className="modalInput">
            <input type="text" className="modalRangeText" /> 点
            　〜　
            <input type="text" className="modalRangeText" /> 点
          </Col>
          <Col xs={3} className="modalLabel">度数</Col>
          <Col xs={9} className="modalInput">
            <input type="text" className="modalRangeText" /> ％
            　〜　
            <input type="text" className="modalRangeText" /> ％
          </Col>
          <Col xs={3} className="modalLabel">苦味</Col>
          <Col xs={9} className="modalInput">
            <input type="text" className="modalRangeText" /> 点
            　〜　
            <input type="text" className="modalRangeText" /> 点
          </Col>
          <Col xs={3} className="modalLabel">香り</Col>
          <Col xs={9} className="modalInput">
            <input type="text" className="modalRangeText" /> 点
            　〜　
            <input type="text" className="modalRangeText" /> 点
          </Col>
          <Col xs={3} className="modalLabel">ホップ</Col>
          <Col xs={9} className="modalInput">
            <input type="text" className="modalRangeText" /> 点
            　〜　
            <input type="text" className="modalRangeText" /> 点
          </Col>
          <Col xs={3} className="modalLabel">キレ</Col>
          <Col xs={9} className="modalInput">
            <input type="text" className="modalRangeText" /> 点
            　〜　
            <input type="text" className="modalRangeText" /> 点
          </Col>
          <Col xs={3} className="modalLabel">ボディ</Col>
          <Col xs={9} className="modalInput">
            <input type="text" className="modalRangeText" /> 点
            　〜　
            <input type="text" className="modalRangeText" /> 点
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-warning" className="modalButton">詳細検索</Button>
        <Button variant="outline-dark" className="modalButton">閉じる</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BeerDetailSearchModal;
