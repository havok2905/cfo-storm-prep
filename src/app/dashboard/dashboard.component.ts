import { Component, OnInit } from '@angular/core';

import { SurvivalKitService } from '../common/localstorage/survival-kit.service';
import SurvivalKitItem from '../common/entities/survival-kit-item';
import SURVIVAL_KIT_SEED_ITEMS from '../common/seeds/survival-kit-items';

import { HomePrepService } from '../common/localstorage/home-prep.service';
import HomePrepItem from '../common/entities/home-prep-item';
import HOME_PREP_SEED_ITEMS from '../common/seeds/home-prep-items';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [SurvivalKitService, HomePrepService]
})
export class DashboardComponent implements OnInit {
  public survivalKitItems: Observable<Promise<any>>;
  public homePrepItems: Observable<Promise<any>>;
  
  public survivalKitServiceType = SurvivalKitService;
  public homePrepServiceType = HomePrepService;

  constructor(
    private survivalKitService: SurvivalKitService,
    private homePrepService: HomePrepService
  ) { }

  ngOnInit() {
    this.setupSurvivalKitItems();
    this.setupHomePrepItems();
  }

  private setupSurvivalKitItems(): void {
    this.survivalKitItems = this.getSurvivalKitItems()
      .flatMap((result)=> {
        if(result) { return result; }
        return this.setSurvivalKitItems(SURVIVAL_KIT_SEED_ITEMS);
      })
      .flatMap((result)=> {
        return this.getSurvivalKitItems();
      })
      .map((result)=> {
        return result;
      });
  }

  private setupHomePrepItems(): void {
    this.homePrepItems = this.getHomePrepItems()
      .flatMap((result)=> {
        if(result) { return result; }
        return this.setHomePrepItems(HOME_PREP_SEED_ITEMS);
      })
      .flatMap(()=> {
        return this.getHomePrepItems();
      })
      .map((result)=> {
        return result;
      });
  }

  private getSurvivalKitItems(): Observable<Promise<any>> {
    return Observable.fromPromise(this.survivalKitService.getItems());
  }

  private setSurvivalKitItems(items: Array<SurvivalKitItem>): Observable<Promise<any>> {
    return Observable.fromPromise(this.survivalKitService.setItems(items));
  }

  private getHomePrepItems(): Observable<Promise<any>> {
    return Observable.fromPromise(this.homePrepService.getItems());
  }

  private setHomePrepItems(items: Array<HomePrepItem>): Observable<Promise<any>> {
    return Observable.fromPromise(this.homePrepService.setItems(items));
  }
}
