import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(firestore) {
        this.imageSrc = '';
        this.messageText = '';
        this.imageButtons = [{ src: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350',
                name: 'image-1' }, { src: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
                name: 'image-2' },
            { src: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', name: 'image-3' }];
    }
    ngOnInit() {
    }
    onClick(imageNameObject) {
        this.imageSrc = imageNameObject.src;
        this.messageText = imageNameObject.name;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map