import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { auth } from 'firebase';
let AuthService = class AuthService {
    constructor(auth) {
        this.auth = auth;
    }
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
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map