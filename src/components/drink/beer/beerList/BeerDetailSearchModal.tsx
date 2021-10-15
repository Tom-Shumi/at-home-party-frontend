import React, { Dispatch, SetStateAction, useState } from 'react';
import DetailSearchModal from 'components/common/DetailSearchModal/DetailSearchModal';
import DrinkNameTextBox from 'components/common/DetailSearchModal/DrinkNameTextBox';
import StarTextBox from 'components/common/DetailSearchModal/StarTextBox';
import AlcoholTextBox from 'components/common/DetailSearchModal/AlcoholTextBox';
import FeatureScoreTextBox from 'components/common/DetailSearchModal/FeatureScoreTextBox';
import {initDetailSearchCondition} from 'components/drink/beer/beerList/BeerList'

interface BeerDetailSearchModalProps {
  condition: any;
  setCondition: Dispatch<SetStateAction<any>>;
  close: () => void;
}

const BeerDetailSearchModal: React.FC<BeerDetailSearchModalProps> = (props) => {
  const [tempDetailSearchCondition, setTempDetailSearchCondition] = useState(props.condition.detailSearchCondition);

  const handleInput = (input: string) => {
    return (e: { target: { value: any; }; }) => setTempDetailSearchCondition({...tempDetailSearchCondition, [input]: e.target.value})
  }

  const setDetailSearchCondition = () => {
    const copyDetailSearchCondition = {...tempDetailSearchCondition};
    props.setCondition({...props.condition, page: 0, detailSearchCondition: copyDetailSearchCondition, displayFlg: true})
  };
  const clearDetailSearchCondition = () => setTempDetailSearchCondition(initDetailSearchCondition);

  return (
    <DetailSearchModal setDetailSearchCondition={setDetailSearchCondition} clear={clearDetailSearchCondition} close={props.close} >
      <DrinkNameTextBox handleInput={handleInput} value={tempDetailSearchCondition.drinkName} /><hr />
      <StarTextBox handleInput={handleInput} valueFrom={tempDetailSearchCondition.starFrom} valueTo={tempDetailSearchCondition.starTo} /><hr />
      <AlcoholTextBox handleInput={handleInput} valueFrom={tempDetailSearchCondition.alcoholFrom} valueTo={tempDetailSearchCondition.alcoholTo} /><hr />
      <FeatureScoreTextBox displayFeatureName={"苦味"} featureName={"bitter"}
        handleInput={handleInput} valueFrom={tempDetailSearchCondition.bitterFrom} valueTo={tempDetailSearchCondition.bitterTo} /><hr />
      <FeatureScoreTextBox displayFeatureName={"香り"} featureName={"flavor"}
        handleInput={handleInput} valueFrom={tempDetailSearchCondition.flavorFrom} valueTo={tempDetailSearchCondition.flavorTo} /><hr />
      <FeatureScoreTextBox displayFeatureName={"ホップ"} featureName={"hop"}
        handleInput={handleInput} valueFrom={tempDetailSearchCondition.hopFrom} valueTo={tempDetailSearchCondition.hopTo} /><hr />
      <FeatureScoreTextBox displayFeatureName={"キレ"} featureName={"sharp"}
        handleInput={handleInput} valueFrom={tempDetailSearchCondition.sharpFrom} valueTo={tempDetailSearchCondition.sharpTo} /><hr />
      <FeatureScoreTextBox displayFeatureName={"ボディ"} featureName={"body"}
        handleInput={handleInput} valueFrom={tempDetailSearchCondition.bodyFrom} valueTo={tempDetailSearchCondition.bodyTo} />
    </DetailSearchModal>
  )
}

export default BeerDetailSearchModal;
