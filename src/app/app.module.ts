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
import { SurvivalKitComponent } from './survival-kit/survival-kit.component';
import { HomePrepComponent } from './home-prep/home-prep.component';
import { ServicesDirectoryComponent } from './services-directory/services-directory.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SurvivalKitComponent,
    HomePrepComponent,
    ServicesDirectoryComponent,
    DashboardComponent
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
