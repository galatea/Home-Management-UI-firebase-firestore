import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router: any;

  constructor(public auth: AngularFireAuth) { }
  
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result) => {
      // Egyelőre csak konzolba kiírjuk a választ, amiben benne lesz a felhasználó uid-je, neve, email címe...
      console.log(result);
      this.router.navigate(['home']);
    });
  }
  
  logout() {
    this.auth.signOut();
  }
  
}