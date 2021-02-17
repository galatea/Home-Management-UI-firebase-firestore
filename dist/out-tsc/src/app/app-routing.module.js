import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
///import { AngularFireAuthModule } from '@angular/fire/auth/angular-fire-auth';
const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'info', component: InfoComponent },
    { path: 'signin', component: SigninComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes),
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export const routingComponents = [HomeComponent, InfoComponent, SigninComponent];
//# sourceMappingURL=app-routing.module.js.map