import { Injectable } from '@angular/core';
import * as localforage from "localforage";
import HomePrepItem from './home-prep-item';

@Injectable()
export class HomePrepService {

  private store: LocalForage = localforage.createInstance({
    name: 'cfo-home-prep',
    driver: localforage.LOCALSTORAGE
  });

  public getHomePrepItems(): Promise<any> {
    return this.store.getItem('home-prep-items');
  }

  public setHomePrepItems(items: Array<HomePrepItem>): Promise<any> {
    return this.store.setItem('home-prep-items', items);
  }

}
