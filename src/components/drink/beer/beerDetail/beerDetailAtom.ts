import { atom } from "recoil";
import { Beer } from 'types/Beer';
import { defaultListCondition, ListCondition } from 'types/ListCondition';

export const beerDetailState = atom<Beer | null>({
    key: "beerDetail",
    default: null
});

export const beerListConditionState = atom<ListCondition>({
    key: "beerListCondition",
    default: defaultListCondition()
});
