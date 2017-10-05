import { Component, OnInit } from '@angular/core';
import { ServicesDirectoryDataSource } from './services-directory-data-source';

@Component({
  selector: 'app-helpful-resources',
  templateUrl: './helpful-resources.component.html'
})
export class HelpfulResourcesComponent implements OnInit {
  displayedColumns = ['name', 'phoneNumber', 'email', 'website'];

  dataSource = new ServicesDirectoryDataSource();

  constructor() { }

  ngOnInit() {
  }

}
