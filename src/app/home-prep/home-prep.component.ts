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

  public progress: number = 0;

  public items: Array<HomePrepItem> = [];

  constructor(private homePrepService: HomePrepService) { }

  ngOnInit() {
    this.setupItems();
  }

  public updateLocalStorage(): void {
    this.setProgress();
    this.homePrepService.setHomePrepItems(this.items);
  }

  private setupItems(): void {
    this.homePrepService.getHomePrepItems().then((result)=> {
      if(result === null) {
        this.items = this.seeds;
      } else {
        this.items = result.map((item)=> {
          return new HomePrepItem(item.id, item.name, item.complete);
        });
      }

      this.homePrepService.setHomePrepItems(this.items);
      this.setProgress();
    });
  }

  private setProgress(): void {
    const total = this.items.length;
    const numCompleted = this.items.filter((item)=> { return item.complete }).length;

    if(numCompleted) {
      this.progress = ( numCompleted / total ) * 100;
    } else {
      this.progress = 0;
    }
  }
}