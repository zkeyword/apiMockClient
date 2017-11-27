import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) {
        const userValidator = Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
        const userNameFc = new FormControl('', userValidator);
        const passwordFc = new FormControl('', userValidator);

        this.loginForm = this.formBuilder.group({
            userName: userNameFc,
            password: passwordFc
        });

        this.loginService.get({ id: '1212' }).then(dd => {
            console.log(dd);
        });

        console.log();
    }

    /**
    * 初始化
    */
    ngOnInit() {

    }

    login() {
        console.log(this.loginForm.value);
    }

}
