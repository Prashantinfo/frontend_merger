import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/source', pathMatch: 'full' },
    { path: 'source', component: HomeComponent }
];
