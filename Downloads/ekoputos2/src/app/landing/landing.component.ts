import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
previousUrl: string;
  constructor(private router: Router) {
   }

  ngOnInit() {

  }

}
