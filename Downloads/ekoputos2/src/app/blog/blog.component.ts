import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';






@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogData: any;
  // postDescription: any[] = [];
  constructor(private db: AngularFireDatabase) {
  
    db.object('/').valueChanges().subscribe(res => {

              this.blogData = res['blog'];
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
