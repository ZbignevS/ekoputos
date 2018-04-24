import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonialsData: any;
  videos: any[]=[];
  isAvailable =  false;
  myurl = "https://www.youtube.com/embed/r8gcZEf2o58?&showinfo=0";
  // url = "https://www.youtube.com/embed/";
  // id = "r8gcZEf2o58";
  // urlParams = "?&showinfo=0";


  constructor(private db: AngularFireDatabase, public sanitizer: DomSanitizer) {
    db.object('/').valueChanges().subscribe(res => {

              this.testimonialsData = res['testimonials'];
              this.isAvailable = true;
              this.videos = Object.values(this.testimonialsData.videos);
              // console.log(this.galleryData.photos);
              // console.log(this.videos);

            });
   }

  ngOnInit() {
  }

}
