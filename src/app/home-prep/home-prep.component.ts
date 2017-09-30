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

  private seeds: Array<ListItem> = [
    new ListItem(1, 'Board Up All Windows', false),
    new ListItem(2, 'Locate Your Nearest Shelter', false),
    new ListItem(3, 'Fill Up Your Gas Tank', false)
  ];

  public items: Array<ListItem> = [];

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
      if(result === null) {
        this.homePrepService.setHomePrepItems(this.seeds);
      } 
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