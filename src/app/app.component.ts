import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageSrc = '';
  messageText = '';
  imageButtons = [ {src:'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350', 
  name: 'image-1'}, {src:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350', 
  name: 'image-2'}, 
  {src:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', name: 'image-3'}]
  
  constructor(firestore: AngularFirestore) {}
    ngOnInit() {
  }
  onClick(imageNameObject) {
    this.imageSrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
  }
}
