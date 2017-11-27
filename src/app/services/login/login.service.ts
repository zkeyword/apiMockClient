import { Injectable } from '@angular/core';
import { Utils } from '../../utils/utils';
import { HttpUtils } from '../../utils/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    constructor(private httpUtils: HttpUtils) {
        console.log(this);
    }

    get(params): Promise<any> {
        return this.httpUtils
            .get('/login', params)
            .toPromise();
    }
}
