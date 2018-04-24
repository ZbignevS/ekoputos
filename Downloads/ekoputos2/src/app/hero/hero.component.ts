import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(){



  }

  ngOnInit() {
    //reload page on second init
    let win = (window as any);
    if( win.localStorage )  {

      if( !localStorage.getItem('firstLoad') ){
        localStorage['firstLoad'] = true;
      } else {
      localStorage.removeItem('firstLoad');
      win.location.reload();
      }
    }
  }

}
