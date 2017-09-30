import { Component, OnInit } from '@angular/core';
import ListItem from '../list-item/list-item';

@Component({
  selector: 'app-survival-kit',
  templateUrl: './survival-kit.component.html',
  styleUrls: ['./survival-kit.component.css']
})
export class SurvivalKitComponent implements OnInit {

  items: Array<ListItem> = [
    new ListItem(1, 'Foo'),
    new ListItem(2, 'Bar'),
    new ListItem(3, 'Baz')
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleItem(toggledItem: ListItem) {
    this
      .items
      .filter((item)=> { return item.id === toggledItem.id; })
      .forEach((item)=> { item.toggle(); });
  }
}