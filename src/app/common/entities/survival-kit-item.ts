export default class SurvivalKitItem {
  public id: number;
  public name: string;
  public complete: boolean;
  public productLink: string;

  constructor(id: number, name: string, complete: boolean, productLink: string) {
    this.id = id;
    this.name = name;
    this.complete = complete;
    this.productLink = productLink;
  }
}