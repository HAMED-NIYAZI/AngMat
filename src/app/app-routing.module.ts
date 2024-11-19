import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableComponent } from './components/table/table.component';
import { FormdesignComponentComponent } from './components/formdesign-component/formdesign-component.component';
import { TreeMultipleComponent } from './components/tree-multiple/tree-multiple.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'AutoCompleteComponent',component:AutoCompleteComponent},
{path:'BasicInputComponent',component:BasicInputComponent},
{path:'CardComponent',component:CardComponent},
{path:'SliderComponent',component:SliderComponent},
{path:'TableComponent',component:TableComponent},
{path:'FormdesignComponentComponent',component:FormdesignComponentComponent},
{path:'TreeMultipleComponent',component:TreeMultipleComponent},
{path:'RegisterUserComponent',component:RegisterUserComponent},
{path:'CalendarComponent',component:CalendarComponent},


 
{path:'**',component: HomeComponent,pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
