import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  homeLink: string = "/";

  blogData: any;
  // postDescription: any[] = [];
  contactData:any;

  constructor(private router: Router, private location: Location, private db: AngularFireDatabase) {

    db.object('/').valueChanges().subscribe(res => {

              this.blogData = res['blog'];
              this.contactData = res['contacts'];

              // for(let i = 0; i<res['blog']['posts'].length; i++){
              //   this.postDescription.push(res['blog']['posts'][i].content.slice(0, 200));
              //   console.log(this.postDescription);
              // }
              // this.financialData = res['financial_help'];
              // this.paragraphs = Object.values(this.aboutData.about_us.content.paragraph);
              // console.log(this.aboutData);
              // console.log(this.paragraphs);

            });


      // ziurima, kuris langas ir pagal tai parenkama, koks PRADZIA linkas turi buti rodomas:
        router.events.subscribe((val) => {
             if(location.path() != ''){
               this.homeLink = "/";
               // this.route = location.path();

             } else {
               this.homeLink = "#top";


             }
           });

   }

  ngOnInit() {
  }

}
