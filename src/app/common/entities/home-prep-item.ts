export default class HomePrepItem {
  public id: number;
  public name: string;
  public complete: boolean;

  constructor(id: number, name: string, complete: boolean) {
    this.id = id;
    this.name = name;
    this.complete = complete;
  }
}