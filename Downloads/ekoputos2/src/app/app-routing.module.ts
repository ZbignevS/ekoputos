import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'kontaktai', component: ContactUsComponent },
  { path: 'straipsniai', component: BlogComponent },
  { path: 'straipsniai/irasas', component: BlogComponent },
  { path: 'straipsniai/irasas/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
