import { Injectable } from '@angular/core';
import * as localforage from "localforage";
import SurvivalKitItem from '../entities/survival-kit-item';

@Injectable()
export class SurvivalKitService {

  private store: LocalForage = localforage.createInstance({
    name: 'cfo-survival-kit',
    driver: localforage.LOCALSTORAGE
  });

  public getItems(): Promise<any> {
    return this.store.getItem('survival-kit-items');
  }

  public setItems(items: Array<SurvivalKitItem>): Promise<any> {
    return this.store.setItem('survival-kit-items', items);
  }

}
