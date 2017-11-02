import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { UsersService } from '../../services/users/users.service'

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  providers: [
    UsersService
  ],
  declarations: []
})
export class UsersModule { }
