import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  financialData: any;
  contactData: any;

  constructor(private db: AngularFireDatabase) {
    db.object('/').valueChanges().subscribe(res => {

            this.contactData = res['contacts'];
            this.financialData = res['financial_help'];
            // this.paragraphs = Object.values(this.aboutData.about_us.content.paragraph);
            // console.log(this.aboutData);
            // console.log(this.paragraphs);

          });
  }

  ngOnInit() {
  }

}
