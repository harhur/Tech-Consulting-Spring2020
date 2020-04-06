import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';

import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { ViewAllComponent } from './view-all/view-all.component';
import {MatTableModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { CarComponent } from './car/car.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import { StarredComponent } from './starred/starred.component';
import { AddCarComponent } from './add-car/add-car.component';

const appRoutes: Routes = [
  { path: 'recently-added', component: RecentlyAddedComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: 'car', component: CarComponent },
  {path: 'starred', component: StarredComponent},
  {path: 'add-car', component: AddCarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    ViewAllComponent,
    RecentlyAddedComponent,
    ViewAllComponent,
    CarComponent,
    StarredComponent,
    AnalyticsComponent,
    AddCarComponent
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
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
