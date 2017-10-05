import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { 
  MdToolbarModule, 
  MdCardModule, 
  MatTableModule,
  MdListModule,
  MdCheckboxModule,
  MatProgressBarModule,
  MdIconModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesDirectoryComponent } from './services-directory/services-directory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckListComponent } from './check-list/check-list.component';
import { HelpfulResourcesComponent } from './helpful-resources/helpful-resources.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'helpful-resources', component: HelpfulResourcesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesDirectoryComponent,
    DashboardComponent,
    CheckListComponent,
    HelpfulResourcesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MatTableModule,
    MdListModule,
    MdCheckboxModule,
    MatProgressBarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
