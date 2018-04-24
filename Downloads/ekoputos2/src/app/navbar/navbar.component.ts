import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  header : any;

  objectKeys = Object.keys; //reikalinga gauti objekto KEYs
  menuLinks: any = [];

  route: string;
  homeLink: string = "/";

  constructor(public db: AngularFireDatabase, private location: Location, private router: Router) {

    // ziurima, kuris langas ir pagal tai parenkama, koks PRADZIA linkas turi buti rodomas:
    router.events.subscribe((val) => {
         if(location.path() != ''){
           this.homeLink = "/";
           // this.route = location.path();

         } else {
           this.homeLink = "#top";


         }
       });
    db.object('/').valueChanges().subscribe(res => {
      this.header = res['header_line'];
      // console.log(this.header);

      //supushinti menu linkus i atskira array kaip objektus, kad butu lengva paimti veliau:
      // for(let i = 0; i<this.header.menu_line.menu_links.length;i++){
      //   let tempObj = {};
      //   tempObj[this.header.menu_line.menu_links[i]] = this.header.menu_line.menu_text[i];
      //   // console.log(tempObj);
      //   this.menuLinks.push(tempObj);
      // }
      // console.log(this.menuLinks)
    });





        }



  ngOnInit() {
    // console.log(this.header);
  }

}
