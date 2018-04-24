import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutData: any;
  isAvailable: any;
  howManyToShow: number = 1;
  readMoreText: string = "Skaityti daugiau";

  paragraphs: any[] = [];

  constructor(public db: AngularFireDatabase) {
      db.object('/').valueChanges().subscribe(res => {

              this.aboutData = res;
              this.isAvailable = true;
              this.paragraphs = Object.values(this.aboutData.about_us.content.paragraph);
              // console.log(this.aboutData);
              // console.log(this.paragraphs);

            });

        }

  ngOnInit() {
  }

  toggleText(){

    if(this.howManyToShow > 1) {
      this.howManyToShow = 1;
      this.readMoreText = "Skaityti daugiau";
    } else {
      this.howManyToShow = 99;
      this.readMoreText = "Rodyti mažiau";
    }

  }

}
