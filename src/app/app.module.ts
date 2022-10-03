import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecComponent } from './sec/sec.component';
import { ThirdComponent } from './third/third.component';
import { ShowComponent } from './show/show.component';
import { PlacementComponent } from './placement/placement.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    SecComponent,
    ThirdComponent,
    ShowComponent,
    PlacementComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
