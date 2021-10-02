import {Col} from 'react-bootstrap';

interface DrinkNameTextBoxProps {
  handleInput: (condition: string) => any
}

const DrinkNameTextBox: React.FC<DrinkNameTextBoxProps> = (props) => {

    return (
      <>
        <Col xs={3} className="modalLabel">商品名：</Col>
        <Col xs={9} className="modalInput">
          <input type="text" className="modalFullText" onChange={props.handleInput('drinkName')} />
        </Col>
      </>
    )
}

export default DrinkNameTextBox;
