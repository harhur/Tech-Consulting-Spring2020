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
import {MatTableModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { SearchResultsComponent } from './search-results/search-results.component'
import { CarSearchComponent } from './car-search/car-search.component'

const appRoutes: Routes = [
  { path: 'recently-added', component: RecentlyAddedComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: 'search-results', component: SearchResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    RecentlyAddedComponent,
    ViewAllComponent,
    SearchResultsComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
