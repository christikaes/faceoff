import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TeamComponent } from './team/team.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'game', component: GameComponent},
  { path: 'team', component: TeamComponent}
];

export const routing = RouterModule.forRoot(routes);
