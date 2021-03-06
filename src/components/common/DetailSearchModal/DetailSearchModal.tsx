import {Modal, Button, Row} from 'react-bootstrap';
import React, { Dispatch, SetStateAction } from 'react';

interface DetailSearchModalProps {
  setDetailSearchCondition: Dispatch<SetStateAction<any>>
  clear: () => void;
  close: () => void;
}

const DetailSearchModal: React.FC<DetailSearchModalProps> = (props) => {

  return (
    <Modal show={true} onHide={props.close} key='detailSearchModal' animation = {false}>
      <Modal.Body>
        <Modal.Title className="modalTitle">詳細検索</Modal.Title>
        <Row>
          {props.children}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" className="modalButton" onClick={props.close} >閉じる</Button>
        <Button variant="outline-info" className="modalButton" onClick={props.clear} >クリア</Button>
        <Button variant="outline-warning" className="modalButton" onClick={props.setDetailSearchCondition}>詳細検索</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DetailSearchModal;
