import {Col} from 'react-bootstrap';

interface FeatureScoreTextBoxProps {
  displayFeatureName: string
  featureName: string
  handleInput: (condition: string) => any
}

const FeatureScoreTextBox: React.FC<FeatureScoreTextBoxProps> = (props) => {

  const featureNameFrom = props.featureName + "From";
  const featureNameTo = props.featureName + "To";

    return (
      <>
        <Col xs={3} className="modalLabel">{props.displayFeatureName}：</Col>
        <Col xs={9} className="modalInput">
          <input type="number" className="modalRangeText" min="0" max="5" onChange={props.handleInput(featureNameFrom)} /> 点
          　〜　
          <input type="number" className="modalRangeText" min="0" max="5" onChange={props.handleInput(featureNameTo)} /> 点
        </Col>
      </>
    )
}

export default FeatureScoreTextBox;
