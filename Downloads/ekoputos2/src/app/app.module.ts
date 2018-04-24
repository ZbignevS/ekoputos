import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//services
import { TvsService } from './tvs.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HeroBoxesComponent } from './hero-boxes/hero-boxes.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SkaiciuokleComponent } from './skaiciuokle/skaiciuokle.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { AboutUsComponent } from './about-us/about-us.component';

// //galerija:
import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';

// share buttons:
import { ShareButtonsModule } from '@ngx-share/buttons';

//scrollTo:
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



export const firebaseConfig = {
  apiKey: 'AIzaSyBE2GK5V7J8MAnoQhQRdo6zTTTjXXq1lqw',
  databaseURL: 'https://ekoputos-9a929.firebaseio.com/',
  storageBucket: 'https://ekoputos-9a929.firebaseio.com/'
};



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HeroBoxesComponent,
    FooterComponent,
    AboutComponent,
    SkaiciuokleComponent,
    ContactUsComponent,
    LandingComponent,
    TestimonialsComponent,
    FaqComponent,
    GalleryComponent,
    BlogComponent,
    PostComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
ShareButtonsModule.forRoot(),
ScrollToModule.forRoot()

  ],
  providers: [AngularFireDatabase, TvsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
