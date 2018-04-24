import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


@Component({
  selector: 'app-hero-boxes',
  templateUrl: './hero-boxes.component.html',
  styleUrls: ['./hero-boxes.component.scss']
})
export class HeroBoxesComponent implements OnInit {
form: FormGroup;
  constructor(private fb: FormBuilder, private af: AngularFireDatabase) {
    this.createForm();
  }

  ngOnInit() {
  }

  sendNow(){
  }

  createForm() {
      this.form = this.fb.group({
        name: ['', Validators.required],
        tel: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required],
      });
    }
    onSubmit() {
      const {name, tel, email, message} = this.form.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Message: ${message}</div>
        <div>Message: ${tel}</div>
      `;
      let formRequest = { name, tel, email, message, date, html };
      this.af.list('/messages').push(formRequest);
      this.form.reset();
      console.log('message sent');
    }
}
