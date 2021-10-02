import React, { Dispatch, SetStateAction, useState } from 'react';
import DetailSearchModal from 'components/common/DetailSearchModal/DetailSearchModal';
import DrinkNameTextBox from 'components/common/DetailSearchModal/DrinkNameTextBox';
import StarTextBox from 'components/common/DetailSearchModal/StarTextBox';
import AlcoholTextBox from 'components/common/DetailSearchModal/AlcoholTextBox';
import FeatureScoreTextBox from 'components/common/DetailSearchModal/FeatureScoreTextBox';

interface BeerDetailSearchModalProps {
  detailSearchCondition: {};
  setDetailSearchCondition: Dispatch<SetStateAction<any>>;
  close: () => void;
}

const BeerDetailSearchModal: React.FC<BeerDetailSearchModalProps> = (props) => {
  const [tempDetailSearchCondition, setTempDetailSearchCondition] = useState(props.detailSearchCondition);

  const handleInput = (input: string) => {
    return (e: { target: { value: any; }; }) => setTempDetailSearchCondition({...tempDetailSearchCondition, [input]: e.target.value})
  }

  const setDetailSearchCondition = () => props.setDetailSearchCondition(tempDetailSearchCondition)

  return (
    <DetailSearchModal setDetailSearchCondition={setDetailSearchCondition} close={props.close} >
      <DrinkNameTextBox handleInput={handleInput}/><hr />
      <StarTextBox handleInput={handleInput}/><hr />
      <AlcoholTextBox handleInput={handleInput}/><hr />
      <FeatureScoreTextBox displayFeatureName={"苦味"} featureName={"bitter"} handleInput={handleInput}/><hr />
      <FeatureScoreTextBox displayFeatureName={"香り"} featureName={"flavor"} handleInput={handleInput}/><hr />
      <FeatureScoreTextBox displayFeatureName={"ホップ"} featureName={"hop"} handleInput={handleInput}/><hr />
      <FeatureScoreTextBox displayFeatureName={"キレ"} featureName={"sharp"} handleInput={handleInput}/><hr />
      <FeatureScoreTextBox displayFeatureName={"ボディ"} featureName={"body"} handleInput={handleInput}/>
    </DetailSearchModal>
  )
}

export default BeerDetailSearchModal;
