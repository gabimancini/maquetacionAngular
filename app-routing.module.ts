import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PostComponent } from './pages/post/post.component';
import { ContactComponent } from './pages/contact/contact.component';

const rutasApp: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'post', component: PostComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', pathMatch: 'full',  redirectTo: ''}
  ];


@NgModule({
	imports: [
	 RouterModule.forRoot(rutasApp)
	],
	exports: [
		RouterModule
	]

})

export class AppRoutingModule {
	 
}