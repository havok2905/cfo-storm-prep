import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survival-kit',
  templateUrl: './survival-kit.component.html',
  styleUrls: ['./survival-kit.component.css']
})
export class SurvivalKitComponent implements OnInit {

  items = ['Foo', 'Bar', 'Baz'];

  constructor() { }

  ngOnInit() {
  }

}
