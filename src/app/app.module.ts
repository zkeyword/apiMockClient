import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/error/error.component'
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy"

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        SelectivePreloadingStrategy
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
