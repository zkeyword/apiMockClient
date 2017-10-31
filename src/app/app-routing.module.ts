import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";
import { ErrorComponent } from './components/error/error.component';

/**
 * app路由
 */
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: 'app/modules/login/login.module#LoginModule'
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: SelectivePreloadingStrategy,
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
