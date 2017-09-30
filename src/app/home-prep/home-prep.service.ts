import { Injectable } from '@angular/core';
import * as localforage from "localforage";
import ListItem from '../list-item/list-item';

@Injectable()
export class HomePrepService {

  private store: LocalForage = localforage.createInstance({
    name: 'cfo-home-prep',
    driver: localforage.LOCALSTORAGE
  });

  public getHomePrepItems(): Promise<any> {
    return this.store.getItem('home-prep-items');
  }

  public setHomePrepItems(items: Array<ListItem>): Promise<any> {
    return this.store.setItem('home-prep-items', items);
  }

}
