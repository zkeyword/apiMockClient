import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgZorroAntdModule } from 'ng-zorro-antd'

import { LoginRoutingModule } from './login-routing.module'

import { LoginComponent } from '../../components/login/login.component'

import { UsersService } from '../../services/users/users.service'

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
        UsersService
    ]
})
export class LoginModule { }
