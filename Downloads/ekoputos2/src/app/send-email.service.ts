import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class SendEmailService {

  constructor(private _http: Http) { }


  public sendMail(){
    // let email = "testtesttestas@mailinator.com";
    // let emailUrl = 'https://formspree.io/' + email;
    // console.log('send');
    // const headers = new Headers({
    //   'Content-Type': 'application/json'
    // });
    //
    // return this._http.post(emailUrl,
    //   {
    //     name: 'test',
    //     _replyto: 'test@test.com',
    //     message: 'test Message'
    //   },
    //   {
    //     'headers': headers
    //   }
    // ).subscribe(res => console.log(res.json()));
  }
}
