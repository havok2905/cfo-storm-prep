import { Injectable } from '@angular/core';
import * as localforage from "localforage";
import ListItem from '../list-item/list-item';

@Injectable()
export class SurvivalKitService {

  private store: LocalForage = localforage.createInstance({
    name: 'cfo-survival-kit',
    driver: localforage.LOCALSTORAGE
  });

  public getSurvivalKitItems(): Promise<any> {
    return this.store.getItem('survival-kit-items');
  }

  public setSurvivalKitItems(items: Array<ListItem>): Promise<any> {
    return this.store.setItem('survival-kit-items', items);
  }

}
