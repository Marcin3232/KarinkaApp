import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { GalleryComponent } from './layouts/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { BestOnTheBestComponent } from './pages/best-on-the-best/best-on-the-best.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ExamplesComponent } from './pages/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    HomeComponent,
    BestOnTheBestComponent,
    AboutUsComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
