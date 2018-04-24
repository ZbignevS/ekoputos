import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  blogData: any;



about: any = "";
// about_images: any = "";
// about_sub: any = "";
// about_labels: any = "";
// about_links: any = "";

  constructor(public db: AngularFireDatabase) {
      // db.object('/').valueChanges().subscribe(res => {
      //
      //         this.about_labels = res["about"]["about_items"]["header"];
      //         this.about_images = res["about"]["about_items"]["images"];
      //         this.about_sub = res["about"]["about_items"]["text"];
      //         this.about_links = res["about"]["about_items"]["links"];
      //         this.about = res["about"];
      //       })
      db.object('/').valueChanges().subscribe(res => {

                  this.blogData = res['blog'];
                  // console.log(this.blogData)
                  this.about = res["about"];
                  // for(let i = 0; i<res['blog']['posts'].length; i++){
                    // this.postDescription.push(res['blog']['posts'][i].content.slice(0, 200));
                    // console.log(this.postDescription);
                  // }
                  // this.financialData = res['financial_help'];
                  // this.paragraphs = Object.values(this.aboutData.about_us.content.paragraph);
                  // console.log(this.aboutData);
                  // console.log(this.paragraphs);

                });

        }

  ngOnInit() {
  }

}
