import { NgModule } from '@angular/core';
import {starredcomponent} from './starred/starred.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: 'starred', component: starredcomponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
