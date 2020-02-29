import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import {RouterModule, Routes} from '@angular/router';
import { ViewAllComponent } from './view-all/view-all.component';
import { StarredComponent } from './starred/starred.component';

const appRoutes: Routes = [
  { path: 'recently-added', component: RecentlyAddedComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: 'starred', component: StarredComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    StarredComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
