export default class ListItem {
  public id: number;
  public name: string;
  public complete: boolean = false;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name
  }

  toggle() {
    this.complete = !this.complete;
    console.log(this.id, this.complete);
  }
}