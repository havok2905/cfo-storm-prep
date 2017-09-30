import { Component, OnInit } from '@angular/core';
import SurvivalKitItem from './survival-kit-item';
import { SurvivalKitService } from './survival-kit.service';
import * as localforage from "localforage";

@Component({
  selector: 'app-survival-kit',
  templateUrl: './survival-kit.component.html',
  styleUrls: ['./survival-kit.component.css'],
  providers: [SurvivalKitService]
})
export class SurvivalKitComponent implements OnInit {

  private seeds: Array<SurvivalKitItem> = [
    new SurvivalKitItem(1, 'Pocket Radio', false, 'https://www.amazon.com/Sony-ICFP26-Portable-Radio-Black/dp/B012F0DGYE'),
    new SurvivalKitItem(2, '3 Gallons of Water Per Person', false, 'https://www.amazon.com/Gallon-Plastic-Water-Bottle-Handle/dp/B003VSEGCQ'),
    new SurvivalKitItem(3, 'First Aid Kit', false, 'https://www.amazon.com/Coleman-Expedition-205-Piece-Emergencies-Workplace/dp/B00GOPNO6C'),
    new SurvivalKitItem(4, '12 Gallons Of Beer Per Person', false, '#')
  ];

  public progress: number = 0;

  public items: Array<SurvivalKitItem> = [];

  constructor(private survivalKitService: SurvivalKitService) { }

  ngOnInit() {
    this.setupItems();
  }

  public updateLocalStorage(): void {  
    this.setProgress();  
    this.survivalKitService.setSurvivalKitItems(this.items);
  }

  private setupItems(): void {
    this.survivalKitService.getSurvivalKitItems().then((result)=> {
      if(result === null) {
        this.items = this.seeds;
      } else {
        this.items = result.map((item)=> {
          return new SurvivalKitItem(item.id, item.name, item.complete, item.productLink);
        });
      }

      this.survivalKitService.setSurvivalKitItems(this.items);
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