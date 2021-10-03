import {Col} from 'react-bootstrap';

interface DrinkNameTextBoxProps {
  value: any
  handleInput: (condition: string) => any
}

const DrinkNameTextBox: React.FC<DrinkNameTextBoxProps> = (props) => {

    return (
      <>
        <Col xs={3} className="modalLabel">商品名：</Col>
        <Col xs={9} className="modalInput">
          <input type="text" className="modalFullText" onChange={props.handleInput('drinkName')} value={props.value} />
        </Col>
      </>
    )
}

export default DrinkNameTextBox;
