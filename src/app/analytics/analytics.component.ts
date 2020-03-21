import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';

export interface Car {
  carId: number;
  dateAdded: string;
  color: string;
  price: number;
  vin: number;
  lastUpdated: string;
  year: number;
  model: string;
  make: string;
  plantId: number;
  starred: boolean;
}

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  jsonString: any;
  carArray: Car[];

    constructor() {
      this.jsonString = JSON.stringify(dummyData);
      this.carArray = JSON.parse(this.jsonString);
    }

    ngOnInit() {}

    // PUT ANALYTICS METHODS INSIDE HERE
    numStarredCars(cars: Car[]) {
      let x = 0;
      for (let car of cars) {
        if (car.starred = true) {
          x + 1;
        }
        else {
          x + 0;
        }
      }
      return x;
    }
}
