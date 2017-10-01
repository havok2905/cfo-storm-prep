import { Component, OnInit } from '@angular/core';
import SurvivalKitItem from './survival-kit-item';
import SURVIVAL_KIT_ITEMS from '../common/seeds/survival-kit-items';
import { SurvivalKitService } from './survival-kit.service';
import * as localforage from "localforage";

@Component({
  selector: 'app-survival-kit',
  templateUrl: './survival-kit.component.html',
  styleUrls: ['./survival-kit.component.css'],
  providers: [SurvivalKitService]
})
export class SurvivalKitComponent implements OnInit {

  public progress: number = 0;

  public items: Array<SurvivalKitItem> = [];

  constructor(private localStorageService: SurvivalKitService) { }

  ngOnInit() {
    this.setupItems();
  }

  public updateLocalStorage(): void {  
    this.setProgress();  
    this.localStorageService.setItems(this.items);
  }

  private setupItems(): void {
    this.localStorageService.getItems().then((result)=> {
      if(result === null) {
        this.items = SURVIVAL_KIT_ITEMS;
      } else {
        this.items = result.map((item)=> {
          return new SurvivalKitItem(item.id, item.name, item.complete, item.productLink);
        });
      }

      this.localStorageService.setItems(this.items);
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