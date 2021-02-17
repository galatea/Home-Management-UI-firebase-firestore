import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription, timer } from 'rxjs';
import { firestore } from 'firebase';
import { NotifyService } from 'ng-metro4';

@Component({
  selector: 'app-futes',
  templateUrl: './futes.component.html',
  styleUrls: ['./futes.component.css'],
  
})
export class FutesComponent implements OnInit {
  public rName : string;
  loading: Subscription;

  public rErtek : string;
  public hasznal : number;
  imageSrc = '';
  messageText = '';
  imageButtons = [ {src:'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350', name: 'ON'}, 
 {src:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350', name: 'OFF'}, 
  ]

  itemsObject: any[];
  szelloObject: any[];
  timeLeft: number = 5;
  interval;
  public kint:number;

  public bent:number;
  value: Observable<any>;
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore, public notifyService: NotifyService) {

    this.items = firestore.collection('rooms_futes/').valueChanges();
    this.items.subscribe((data) => {
      this.itemsObject = data;

    console.log(this.itemsObject[0].konyha);});
    this.value = firestore.collection('rooms_szello/').valueChanges();
    this.value.subscribe((data) => {
      this.szelloObject = data;

    console.log(this.szelloObject[0].konyha);});
    this.kint=Math.floor((Math.random() * 10) + 1);

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




 turnOnLamp(rName: string) {
  this.firestore.doc("rooms_lamp/lampak").update({ [rName]:true});
  console.log(rName);
}
turnOffLampAll() {
  this.firestore.doc("rooms_lamp/lampak").update({ wc:false});
  this.firestore.doc("rooms_lamp/lampak").update({ konyha:false});
  this.firestore.doc("rooms_lamp/lampak").update({ nappali:false});
  this.firestore.doc("rooms_lamp/lampak").update({ garazs:false});
  this.firestore.doc("rooms_lamp/lampak").update({ szoba_f:false});

  console.log(this.itemsObject[0].nappali);
}
setTemperatureAll(rErtek:string) {
  this.firestore.doc("rooms_futes/futes").update({ wc:rErtek});
  this.firestore.doc("rooms_futes/futes").update({ konyha:rErtek});
  this.firestore.doc("rooms_futes/futes").update({ nappali:rErtek});
  this.firestore.doc("rooms_futes/futes").update({ garazs:rErtek});
  this.firestore.doc("rooms_futes/futes").update({ szoba_f:rErtek});

  console.log();
}
setVentillationAll(szErtek:string) {
  this.firestore.doc("rooms_szello/szello").update({ wc:szErtek});
  this.firestore.doc("rooms_szello/szello").update({ konyha:szErtek});
  this.firestore.doc("rooms_szello/szello").update({ nappali:szErtek});
  this.firestore.doc("rooms_szello/szello").update({ garazs:szErtek});
  this.firestore.doc("rooms_szello/szello").update({ szoba_f:szErtek});
 stop();
  console.log();
}
turnOnTisztito(){
  this.firestore.doc("rooms_szello/szello").update({tisztito:true});
this.pauseTimer();
}
turnOffTisztito(){
  this.firestore.doc("rooms_szello/szello").update({tisztito:false});
  this.startTimer();
}
turnOnPadlo(){
  this.firestore.doc("rooms_futes/futes").update({padlo:true});
}
turnOffPadlo(){
  this.firestore.doc("rooms_futes/futes").update({padlo:false});
}
setTemperature(rName: string, rErtek:string) {
  this.firestore.doc("rooms_futes/futes").update({ [rName]:rErtek});
  stop();
  
  console.log();
}
setVentillation(rName: string, rErtek:string) {
  this.firestore.doc("rooms_szello/szello").update({ [rName]:rErtek});
  stop();
  
  console.log(this.szelloObject[0].nappal);
}

  notify(szoba :string) {

    this.notifyService.create('Figyelem!', 'Lámpa fel/le lett kapcsolva, itt: ' + szoba, { keepOpen: true, cls: 'success', width: '400px' });
  this.notifyService.setup({
    duration: 2000,
    animation: 'easeInBounce',
    distance: '50px',
    timeout: 700,
    width: '400px'
    
  });
}

startLoading() {
  this.loading = timer(1000).subscribe();
}

frissit(){
  this.notifyService.create('Már 1 órája nem megy a légfrissítő!! Kezdenek elterjedni a bacik, kapcsold be a légtisztítót!', 'LÉGFRISSÍTÉS!!', { keepOpen: true, cls: 'warning', width: '800px' });

}

startTimer() {
  this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
      if(this.timeLeft==1){
        this.frissit();
      }
      if(this.timeLeft==0){
        
        this.pauseTimer;
      }
    } else {
    }
  },1000)
}

pauseTimer() {
  clearInterval(this.interval);
}
}
