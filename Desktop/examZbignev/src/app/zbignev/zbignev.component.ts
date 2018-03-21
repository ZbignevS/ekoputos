import { Component, OnInit } from '@angular/core';
import { ZbignevService } from '../zbignev.service'
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'zbignev',
  templateUrl: './zbignev.component.html',
  styleUrls: ['./zbignev.component.css']
})
export class ZbignevComponent implements OnInit {

  num = 1;
  url: any;
  errorMessage: string;
  fails: number = 0;
  image: string;
  counter: number = 0;
  loaded: boolean = false;

  constructor(public meme: ZbignevService) {}

  ngOnInit() {
    this.num = Math.floor(Math.random() * 1000) + 1;
    this.next();
  }
  isLoaded(){
    this.loaded = true;
  }

  next() {
    if(this.counter < 3){
      ++this.num;
      this.getImage(this.num);
      this.counter++;
    }
  }

  getImage(num){
    this.meme.getMeme(num)
    .subscribe(result => {this.url = result;
    if(this.url.success == false){++this.fails; --this.counter}
    if(this.url.success != false)this.image = this.url.result.imageUrl;
    },
    error =>  this.errorMessage = <any>error
    );
  }

  previous(){
    if(this.counter < 3){
      --this.num;
      this.getImage(this.num);
      this.counter++;
    }
  }
}
