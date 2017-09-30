import { Component, OnInit } from '@angular/core';
import HomePrepItem from './home-prep-item';
import { HomePrepService } from './home-prep.service';
import * as localforage from "localforage";

@Component({
  selector: 'app-home-prep',
  templateUrl: './home-prep.component.html',
  styleUrls: ['./home-prep.component.css'],
  providers: [HomePrepService]
})
export class HomePrepComponent implements OnInit {

  private seeds: Array<HomePrepItem> = [
    new HomePrepItem(1, 'Board Up All Windows', false),
    new HomePrepItem(2, 'Locate Your Nearest Shelter', false),
    new HomePrepItem(3, 'Fill Up Your Gas Tank', false)
  ];

  public items: Array<HomePrepItem> = [];

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
        return new HomePrepItem(item.id, item.name, item.complete);
      });
    });
  }
}