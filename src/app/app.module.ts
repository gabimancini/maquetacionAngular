import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppComponent } from './app.component';
import { HeadertopComponent } from './shared/headertop/headertop.component';
import { HeaderbottomComponent } from './shared/headerbottom/headerbottom.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component'; 
import { PostComponent } from './pages/post/post.component';
import { ContactComponent } from './pages/contact/contact.component';

//Rutas
import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    HeadertopComponent,
    HeaderbottomComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PostComponent,
    ContactComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
