import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SigninComponent = class SigninComponent {
    constructor(firestore) {
        this.firestore = firestore;
        this.imageSrc = '';
        this.messageText = '';
        this.imageButtons = [{ src: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350', name: 'ON' },
            { src: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350', name: 'OFF' },
        ];
        this.items = firestore.collection('rooms_lamp').valueChanges();
        this.items.subscribe((data) => {
            this.itemsObject = data;
            console.log(this.itemsObject);
        });
    }
    ngOnInit() {
    }
    //  update(rName:String){
    //  this.items = this.firestore.collection('rooms_lamp/livingroom/').valueChanges();
    //this.items.subscribe((data) => {
    // this.itemsObject = data;
    //});
    //   this.firestore.doc("rooms_lamp/" + "livingroom").update({lampa: true}); 
    //this.items.subscribe((data) => {
    // this.itemsObject = data;
    //console.log(this.itemsObject);});
    // }
    lamp(rName) {
        this.firestore.collection("rooms_lamp").valueChanges();
        console.log(rName);
    }
    turnOnLamp(rName) {
        this.firestore.doc("rooms_lamp/" + "livingroom").update({ lampa: true });
        console.log(rName);
    }
    turnOffLamp(rName) {
        this.firestore.doc("rooms_lamp/" + "livingroom").update({ lampa: false });
        console.log(rName);
    }
    onClick(imageNameObject) {
        this.imageSrc = imageNameObject.src;
        this.messageText = imageNameObject.name;
    }
};
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.css']
    })
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map