import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from '../../services/login/login.service';


import { LoginComponent } from '../../components/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [],
    providers: [
        LoginService
    ]
})
export class LoginModule { }
