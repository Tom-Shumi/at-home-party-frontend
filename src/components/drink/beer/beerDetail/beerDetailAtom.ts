import { atom } from "recoil";
import { Beer } from 'types/Beer';

export const beerDetailState = atom<Beer | null>({
    key: "beerDetail",
    default: null
});

export const beerListConditionState = atom<{}>({
    key: "beerListCondition",
    default: {isBackDetail: false}
});
