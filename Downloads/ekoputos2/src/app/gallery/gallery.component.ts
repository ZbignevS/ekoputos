import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { TvsService } from '../tvs.service';
//galerija:
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { map } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  //galerija:
  items: GalleryItem[];


  galleryData: any;
  isAvailable = false;


  constructor(private db: AngularFireDatabase, public gallery: Gallery, public lightbox: Lightbox) {
    db.object('/').valueChanges().subscribe(res => {

            this.galleryData = res['gallery'];
            this.isAvailable = true;
            // this.photos = Object.values(this.galleryData.photos);
            // console.log(this.galleryData.photos);
            // console.log(this.photos);

            //galerija:
            this.items = this.galleryData.photos.map(item => {
              return new ImageItem(item.url, item.url);
            });
            this.gallery.ref('lightbox').load(this.items);
          });

  }
  ngAfterViewInit() {

  }
  ngOnInit() {
  }
  //galerija:
  openLightbox(index: number) {
    this.lightbox.open(index, 'lightbox');
  }

}
