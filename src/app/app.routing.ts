import { HomeLayoutComponent } from './main/layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  //  {
  //   path: 'admin',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './admin/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }, 
  {
    path: '',
    component: HomeLayoutComponent,
    children: [{
      path: '',
      loadChildren: './main/layouts/home-layout/home-layout.module#HomeLayoutModule'
    }]
  }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
