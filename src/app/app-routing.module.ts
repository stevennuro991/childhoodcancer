import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const AppRoutes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },{
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: ()=>import('./layouts/main-layout/main-layout.module').then(m=>m.MainLayoutModule)
      }
    ]
  },
  {
    path:'**',
    redirectTo:'home'
  }
];