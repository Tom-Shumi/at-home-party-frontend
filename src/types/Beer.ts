export class Beer {
  id: number;
  name: string;
  description: string;
  drinkCategoryId1: number;
  drinkCategoryId2: number;
  infoUrl: string;
  alcohol: number;
  star: number;
  bitter: number;
  flavor: number;
  hop: number;
  sharp: number;
  body: number;

  constructor(id: number, name: string, description: string, drinkCategoryId1: number, drinkCategoryId2: number, infoUrl: string
    , alcohol: number, star: number, bitter: number, flavor: number, hop: number, sharp: number, body: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.drinkCategoryId1 = drinkCategoryId1;
    this.drinkCategoryId2 = drinkCategoryId2;
    this.infoUrl = infoUrl;
    this.alcohol = alcohol;
    this.star = star;
    this.bitter = bitter;
    this.flavor = flavor;
    this.hop = hop;
    this.sharp = sharp;
    this.body = body;
  }
}
