import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'AutoCompleteComponent',component:AutoCompleteComponent},
{path:'BasicInputComponent',component:BasicInputComponent},
{path:'CardComponent',component:CardComponent},
{path:'SliderComponent',component:SliderComponent},
{path:'**',component: HomeComponent,pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
