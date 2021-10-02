import {Col} from 'react-bootstrap';

interface AlcoholTextBoxProps {
  handleInput: (condition: string) => any
}

const AlcoholTextBox: React.FC<AlcoholTextBoxProps> = (props) => {

    return (
      <>
        <Col xs={3} className="modalLabel">度数：</Col>
        <Col xs={9} className="modalInput">
          <input type="number" className="modalRangeText" min="0" max="100" onChange={props.handleInput('alcoholFrom')} /> ％
          　〜　
          <input type="number" className="modalRangeText" min="0" max="100" onChange={props.handleInput('alcoholTo')} /> ％
        </Col>
      </>
    )
}

export default AlcoholTextBox;
