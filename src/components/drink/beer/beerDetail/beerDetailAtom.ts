import { atom } from "recoil";
import { Beer } from 'types/Beer';

export const beerDetailState = atom<Beer>({
    key: "beerDetail",
    default: new Beer(-1, "", "", -1, -1, "", "", -1, -1, -1, -1, -1, -1, -1)
});
