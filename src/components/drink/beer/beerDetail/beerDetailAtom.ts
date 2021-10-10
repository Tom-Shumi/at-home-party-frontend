import { atom } from "recoil";
import { Beer } from 'types/Beer';
import { defaultListConditionState, ListConditionState } from 'types/ListConditionState';

export const beerDetailState = atom<Beer | null>({
    key: "beerDetail",
    default: null
});

export const beerListConditionState = atom<ListConditionState>({
    key: "beerListCondition",
    default: defaultListConditionState()
});
