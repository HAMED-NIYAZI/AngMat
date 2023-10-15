import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableComponent } from './components/table/table.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BasicInputComponent,
    AutoCompleteComponent,
    MenuBarComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //route
    BrowserAnimationsModule,
    MaterialModule, //material
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
