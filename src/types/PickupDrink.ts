export class PickupDrink {
  id: number;
  drinkId: number;
  imageUrl: string;
  deleteFlg: boolean;

  constructor(id: number, drinkId: number, imageUrl: string, deleteFlg: boolean) {
    this.id = id;
    this.drinkId = drinkId;
    this.imageUrl = imageUrl;
    this.deleteFlg = deleteFlg;
  }
}
