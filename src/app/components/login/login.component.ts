import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder) {
        const userNameFc = new FormControl('121212', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
        const passwordFc = new FormControl('12121212', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));

        this.loginForm = this.formBuilder.group({
            userName: userNameFc,
            password: passwordFc
        });
    }

    /**
    * 初始化
    */
    ngOnInit() {

    }

    login() {
        console.log(this.loginForm.value, this);
    }

}
