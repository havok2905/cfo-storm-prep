import { Component, OnInit } from '@angular/core';
import ListItem from '../list-item/list-item';
import { SurvivalKitService } from './survival-kit.service';
import * as localforage from "localforage";

@Component({
  selector: 'app-survival-kit',
  templateUrl: './survival-kit.component.html',
  styleUrls: ['./survival-kit.component.css'],
  providers: [SurvivalKitService]
})
export class SurvivalKitComponent implements OnInit {

  private seeds: Array<ListItem> = [
    new ListItem(1, 'Pocket Radio', false),
    new ListItem(2, '3 Gallons of Water Per Person', false),
    new ListItem(3, 'First Aid Kit', false)
  ];

  public items: Array<ListItem> = [];

  constructor(private survivalKitService: SurvivalKitService) {

  }

  ngOnInit() {
    this.seedFirstItems();
    this.setupLocalItems();
  }

  public updateLocalStorage(): void {    
    this.survivalKitService.setSurvivalKitItems(this.items);
  }

  private seedFirstItems(): void {
    this.survivalKitService.getSurvivalKitItems().then((result)=> {
      if(result === null) {
        this.survivalKitService.setSurvivalKitItems(this.seeds);
      }
    });
  }

  private setupLocalItems(): void {
    this.survivalKitService.getSurvivalKitItems().then((result)=> {
      this.items = result.map((item)=> {
        return new ListItem(item.id, item.name, item.complete);
      });
    });
  }
}