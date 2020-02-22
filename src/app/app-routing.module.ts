import { NgModule } from '@angular/core';
import {RecentlyAddedComponent} from './recently-added/recently-added.component';
import {ViewAllComponent} from './view-all/view-all.component';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'recently-added', component: RecentlyAddedComponent },
  { path: 'view-all', component: ViewAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
