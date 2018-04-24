import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.scss'],
})


export class SkaiciuokleComponent implements OnInit {

  price_localUp: any = "0.00";
  price_localD: any = "0.00";
  // price_localB: any = "0.00"; //bendras
  plotas_up: any = 0.0;
  storis_up: any = 0.0;
  plotas_d: any = 0.0;
  storis_d: any = 0.0;
  kaina_up: any = 70.0; //kaina atviru 70/m^3
  kaina_d: any = 200.0; //kaina uzdaru 200/m^3
  koef: any = 3.8;

  // plotas_b: any = 0.0; //bendras
  // storis_b: any = 0.0; //bendras
  lambdaUp: any = "0.00";
  lambdaD: any = "0.00";
  // lambdaB: any = "0.00"; //bendras
  price: any = 0.0;
  up: any;
  down: any;
  clickU: boolean = false;
  clickD: boolean = false;
  // clickB: boolean = false; //bendras
  imgU: any;
  imgD: any;
  imgB: any; //bendras


  constructor() { }

  ngOnInit() {
    this.price = "0.00";
    this.price_localUp = "0.00";
    this.price_localD = "0.00";
    // this.price_localB = "0.00"; //bendras
  }

  ngAfterViewInit() {
    this.up = document.getElementById("icon-stogas");
    this.down = document.getElementById("icon-stogas");

  }

  trigger(event:any){
    (event.srcElement.id == "plotasU") ? this.plotas_up = parseFloat(event.target.value) : 0;
    (event.srcElement.id == "plotasD") ? this.plotas_d = parseFloat(event.target.value) : 0;
    (event.srcElement.id == "storisU") ? this.storis_up = parseFloat(event.target.value) : 0;
    (event.srcElement.id == "storisD") ? this.storis_d = parseFloat(event.target.value) : 0;
    // (event.srcElement.id == "plotasB") ? this.plotas_b = parseFloat(event.target.value) : 0; //bendras
    // (event.srcElement.id == "storisB") ? this.storis_b = parseFloat(event.target.value) : 0; //bendras
    (this.plotas_up < 0) ? this.plotas_up = 0 : 0;
    (this.plotas_d < 0) ? this.plotas_d = 0 : 0;
    (this.storis_up < 0) ? this.storis_up = 0 : 0;
    (this.storis_d < 0) ? this.storis_d = 0 : 0;
    // (this.storis_b < 0) ? this.storis_b = 0 : 0; //bendras
    // (this.plotas_b < 0) ? this.plotas_b = 0 : 0; //bendras
    (Number.isNaN(this.plotas_up)) ? this.plotas_up = 0 : 0;
    (Number.isNaN(this.plotas_d)) ? this.plotas_d = 0 : 0;
    (Number.isNaN(this.storis_up)) ? this.storis_up = 0 : 0;
    (Number.isNaN(this.storis_d)) ? this.storis_d = 0 : 0;
    // (Number.isNaN(this.plotas_b)) ? this.plotas_b = 0 : 0; //bendras
    // (Number.isNaN(this.storis_b)) ? this.storis_b = 0 : 0; //bendras

    this.price_localUp = (this.plotas_up*(this.storis_up*0.001)*this.kaina_up).toFixed(2);
    this.price_localD = (this.plotas_d*(this.storis_d*0.001)*this.kaina_d).toFixed(2);
    // this.price_localB = (this.plotas_b*this.storis_b*400).toFixed(2); //bendras

    this.lambdaUp = (this.storis_up/10/this.koef).toFixed(2);
    this.lambdaD = (this.storis_d/10/this.koef).toFixed(2);
    if(this.storis_up/10/this.koef >= 13){
      this.lambdaUp = 13;
    }
    if(this.storis_d/10/this.koef >= 13){
      this.lambdaD = 13;
    }
    // this.lambdaB = (this.plotas_b*this.storis_b*0.01).toFixed(2); //bendras
    this.price = (parseFloat(this.price_localUp)+parseFloat(this.price_localD)).toFixed(2); //bendras
  }

  createU(){
    if(this.clickU == true){
     this.clickU = false;
     this.imgU = "../../assets/images/putos_icon_full.png";}
      else{this.clickU = true;}
      this.imgU = "../../assets/images/putos_icon_full-w.png";
  }

  createD(){
    (this.clickD == true) ? this.clickD = false : this.clickD = true;
    this.imgU = "../../assets/images/sienos2-k.png";
  }
  // createB(){ //bendras
  //   (this.clickB == true) ? this.clickB = false : this.clickB = true;
  //   this.imgU = "../../assets/images/sienos2-k.png";
  // }

}
