import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BestOnTheBestComponent } from './pages/best-on-the-best/best-on-the-best.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ExamplesComponent } from './pages/examples/examples.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'best-on-the-best', component: BestOnTheBestComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
