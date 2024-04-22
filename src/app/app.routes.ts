import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';

export const routes: Routes = [
    {path: '', component:HomePageComponent},
    {path: 'joinPage', component: JoinPageComponent},
    {path: 'discoverPage', component: DiscoverPageComponent}]

