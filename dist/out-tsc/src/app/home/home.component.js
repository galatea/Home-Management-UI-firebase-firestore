import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(firestore) {
        this.items = firestore.collection('rooms_lamp').valueChanges();
        this.items.subscribe((data) => {
            this.itemsObject = data;
            console.log(data);
        });
    }
    ngOnInit() {
        console.log(this.items);
        throw new Error("Method not implemented.");
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map