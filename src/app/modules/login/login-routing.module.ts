import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component'

/**
 * 主体路由
 */
const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
