import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//app
import { AppComponent } from './app.component'
import { AppService } from './app.service'

//modules
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { AppRoutingModule } from './app-routing.module'

//strategy
import { SelectivePreloadingStrategy } from './selective-preloading-strategy'
import { ErrorComponent } from './components/error/error.component'

/**
 * app模块
 */
@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        NgZorroAntdModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ErrorComponent
    ],
    providers: [
        AppService,
        SelectivePreloadingStrategy
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}