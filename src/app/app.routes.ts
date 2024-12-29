import { Routes } from '@angular/router';
import { TestappComponent } from './MyComponent/testapp/testapp.component';
import { AboutComponent } from './MyComponent/about/about.component';

export const routes: Routes = [
  { path: '', component: TestappComponent },
  { path: 'about', component: AboutComponent }
];
