import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadertopComponent } from './shared/headertop/headertop.component';
import { HeaderbottomComponent } from './shared/headerbottom/headerbottom.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeadertopComponent,
    HeaderbottomComponent,
    HomeComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
