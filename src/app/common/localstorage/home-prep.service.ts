import { Injectable } from '@angular/core';
import * as localforage from "localforage";
import HomePrepItem from '../entities/home-prep-item';

@Injectable()
export class HomePrepService {

  private store: LocalForage = localforage.createInstance({
    name: 'cfo-home-prep',
    driver: localforage.LOCALSTORAGE
  });

  public getItems(): Promise<any> {
    return this.store.getItem('home-prep-items');
  }

  public setItems(items: Array<HomePrepItem>): Promise<any> {
    return this.store.setItem('home-prep-items', items);
  }

}
