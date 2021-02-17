import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { SigninComponent } from './signin/signin.component';
import { NgMetro4Module } from 'ng-metro4';
import { MenuComponent } from './menu/menu.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { GarazsComponent } from './garazs/garazs.component';
import { FutesComponent } from './futes/futes.component';
import { KertComponent } from './kert/kert.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { SzamlakComponent } from './szamlak/szamlak.component';

var config = {
  apiKey: "AIzaSyAnptS93dkZuNE84Hw-QdlOAFg0AJzfwEI",
  authDomain: "homeconsole-b0c4f.firebaseapp.com",
  databaseURL: "https://homeconsole-b0c4f.firebaseio.com",
  projectId: "homeconsole-b0c4f",
  storageBucket: "homeconsole-b0c4f.appspot.com",
  messagingSenderId: "186203563502",
  appId: "1:186203563502:web:32035799b5a99874c9daff",
  measurementId: "G-V9JEED7KHH"
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SigninComponent,
    MenuComponent,
    GarazsComponent,
    FutesComponent,
    KertComponent,
    SzamlakComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,     
    NgMetro4Module,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, NoopAnimationsModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }


