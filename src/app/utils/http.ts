import {
    Http,
    Response,
    Headers,
    RequestOptions,
    URLSearchParams,
    RequestOptionsArgs,
    RequestMethod
} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
// import { Response } from '@angular/http';
import 'rxjs/add/operator/timeout';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class HttpUtils {
    private url: String = 'http://127.0.0.1:3000';
    private httpHeader: any;

    constructor(private http: Http) {
        this.httpHeader = new Headers();
        this.httpHeader.set('Content-Type', 'application/json');
        this.httpHeader.set('Accept', 'text/plain');
    }

    get(endpoint: string, params?: any) {
        const that = this;
        const myParams = new URLSearchParams();
        Object.keys(params).forEach(key => {
            myParams.append(key, params[key]);
        });
        return this.http
            .get(this.url + endpoint, new RequestOptions({ headers: this.httpHeader, params: myParams, withCredentials: true }))
            .catch((error: Response | any) => {
                return Promise.reject(error);
            });
    }

}
