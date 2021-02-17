import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { FutesComponent } from './futes/futes.component';
import { KertComponent } from './kert/kert.component';
import { SzamlakComponent } from './szamlak/szamlak.component';

///import { AngularFireAuthModule } from '@angular/fire/auth/angular-fire-auth';

const  routes:  Routes  = [

  {path: '', component: HomeComponent},
  {path: 'info', component: InfoComponent},
    { path:  'signin',component:  SigninComponent},
    { path:  'futes',component:  FutesComponent},
    { path: 'kert', component: KertComponent},
    { path: 'szamlak', component: SzamlakComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes),
   // AngularFireAuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,InfoComponent, SigninComponent]
