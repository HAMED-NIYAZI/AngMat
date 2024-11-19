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
import { HttpClientModule } from '@angular/common/http';
import { FormdesignComponentComponent } from './components/formdesign-component/formdesign-component.component';
import { TreeMultipleComponent } from './components/tree-multiple/tree-multiple.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CalendarComponent } from './calendar/calendar.component';
   
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
    FormdesignComponentComponent,
    TreeMultipleComponent,
    RegisterUserComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //route
    BrowserAnimationsModule,
    MaterialModule, //material
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
