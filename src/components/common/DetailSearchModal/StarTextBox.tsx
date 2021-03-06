import {Col} from 'react-bootstrap';

interface StarTextBoxProps {
  valueFrom: any
  valueTo: any
  handleInput: (condition: string) => any
}

const StarTextBox: React.FC<StarTextBoxProps> = (props) => {

    return (
      <>
        <Col xs={3} className="modalLabel">星：</Col>
        <Col xs={9} className="modalInput">
          <input type="number" step="0.1" min="0" max="5" className="modalRangeText" onChange={props.handleInput('starFrom')} value={props.valueFrom} /> 点
          　〜　
          <input type="number" step="0.1" min="0" max="5" className="modalRangeText" onChange={props.handleInput('starTo')} value={props.valueTo} /> 点
        </Col>
      </>
    )
}

export default StarTextBox;
