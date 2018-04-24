import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqData: any;
  isAvailable = false;
  questions: any[] = [];

  constructor(private db: AngularFireDatabase) {
    db.object('/').valueChanges().subscribe(res => {

            this.faqData = res['faq'];
            this.isAvailable = true;
            this.questions = Object.values(this.faqData.question);
            // console.log(this.galleryData.photos);
            // console.log(this.questions);

          });
   }

  ngOnInit() {
  }

  clicked(i:any){
    for(let j = 0; j < this.questions.length; j++){
      if(j==i){
        (this.questions[j].isActive == true) ? this.questions[j].isActive = false : this.questions[j].isActive = true;

      } else {
        this.questions[j].isActive = false;

      }
    }
  }

}
