import { NgModule } from '@angular/core';
import {RecentlyAddedComponent} from './recently-added/recently-added.component';
import {ViewAllComponent} from './view-all/view-all.component';
import { StarredComponent } from './starred/starred.component';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from './car/car.component';

export const appRoutes: Routes = [
  { path: 'recently-added', component: RecentlyAddedComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: 'car', component: CarComponent},
  {path: 'starred', component: StarredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
