export default class ListItem {
  public id: number;
  public name: string;
  public complete: boolean = false;

  constructor(id: number, name: string, complete: boolean) {
    this.id = id;
    this.name = name;
    this.complete = complete;
  }
}