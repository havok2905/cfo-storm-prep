import { Component, OnInit } from '@angular/core';
import ListItem from '../list-item/list-item';
import { HomePrepService } from './home-prep.service';
import * as localforage from "localforage";

@Component({
  selector: 'app-home-prep',
  templateUrl: './home-prep.component.html',
  styleUrls: ['./home-prep.component.css'],
  providers: [HomePrepService]
})
export class HomePrepComponent implements OnInit {

  items: Array<ListItem> = [];

  constructor(private homePrepService: HomePrepService) {

  }

  ngOnInit() {
    this.seedFirstItems();
    this.setupLocalItems();
  }

  public updateLocalStorage(): void {
    this.homePrepService.setHomePrepItems(this.items);
  }

  private seedFirstItems(): void {
    this.homePrepService.getHomePrepItems().then((result)=> {
      if(result || result.length > 0) {
        return;
      } 

      this.homePrepService.setHomePrepItems([
        new ListItem(1, 'Foo', false),
        new ListItem(2, 'Bar', false),
        new ListItem(3, 'Baz', false)
      ]);
    });
  }

  private setupLocalItems(): void {
    this.homePrepService.getHomePrepItems().then((result)=> {
      this.items = result.map((item)=> {
        return new ListItem(item.id, item.name, item.complete);
      });
    });
  }
}