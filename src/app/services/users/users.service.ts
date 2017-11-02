import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http'
import HttpUtils from '../../utils/http'

@Injectable()
export class UsersService extends HttpUtils {

    constructor(private httpUtil: Http) {
        super(httpUtil)
    }

    public async getUser() {
        let a = await this.get('1212', {}, function () {
            console.log(1)
        }, function (isSuccess, msg, err) {
            console.log(isSuccess, msg, err)
        })
        console.log(a)
    }

}
