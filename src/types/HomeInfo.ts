import { PickupDrink } from "./PickupDrink";
import { Drink } from "./Drink";

export class HomeInfo {
  pickupDrinkList?: PickupDrink[];
  beerRankingList?: Drink[];
  chuhighRankingList?: Drink[];
  sakeRankingList?: Drink[];
  wineRankingList?: Drink[];

  constructor(pickupDrinkList?: PickupDrink[], beerRankingList?: Drink[], chuhighRankingList?: Drink[], sakeRankingList?: Drink[], wineRankingList?: Drink[]) {
    this.pickupDrinkList = pickupDrinkList;
    this.beerRankingList = beerRankingList;
    this.chuhighRankingList = chuhighRankingList;
    this.sakeRankingList = sakeRankingList;
    this.wineRankingList = wineRankingList;
  }
}
