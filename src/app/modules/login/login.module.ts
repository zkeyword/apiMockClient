import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { LoginComponent } from '../../components/login/login.component'

import { LoginRoutingModule } from './login-routing.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [],
    providers: []
})
export class LoginModule { }
