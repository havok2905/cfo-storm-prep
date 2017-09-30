import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurvivalKitComponent } from './survival-kit/survival-kit.component';
import { HomePrepComponent } from './home-prep/home-prep.component';
import { ServicesDirectoryComponent } from './services-directory/services-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    SurvivalKitComponent,
    HomePrepComponent,
    ServicesDirectoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
