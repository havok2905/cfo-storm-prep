import { Component, OnInit } from '@angular/core';
import { ServicesDirectoryDataSource } from './services-directory-data-source';

@Component({
  selector: 'app-services-directory',
  templateUrl: './services-directory.component.html',
  styleUrls: ['./services-directory.component.css']
})
export class ServicesDirectoryComponent implements OnInit {

  displayedColumns = ['name', 'phoneNumber', 'email'];

  dataSource = new ServicesDirectoryDataSource();

  constructor() { }

  ngOnInit() {
  }
}