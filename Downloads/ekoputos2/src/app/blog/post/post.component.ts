import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../../tvs.service';

// import { ShareButtons } from '@ngx-share/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  blogData: any;
  postId:string;
  values = Object.values;

  constructor(private router: Router, private route: ActivatedRoute, private db: AngularFireDatabase) {
      this.route.params.subscribe( params => this.postId = params.id );
      // console.log(this.postId);

      db.object('/').valueChanges().subscribe(res => {

                  this.blogData = res['blog']['posts'][this.postId];
                  if(this.blogData === undefined) {
                    this.router.navigate(['/straipsniai']);
                    // console.log(true);
                  }
      });

  }

  ngOnInit() {

  }

}
