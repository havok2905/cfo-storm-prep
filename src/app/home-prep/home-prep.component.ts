import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-prep',
  templateUrl: './home-prep.component.html',
  styleUrls: ['./home-prep.component.css']
})
export class HomePrepComponent implements OnInit {

  items = ['Foo', 'Bar', 'Baz'];

  constructor() { }

  ngOnInit() {
  }

}
