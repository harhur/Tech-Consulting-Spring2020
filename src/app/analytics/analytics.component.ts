import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
    carArray: Car[];
    numStarred: number;

    constructor() {
        let jsonString = JSON.stringify(dummyData);
        this.carArray = JSON.parse(jsonString);
        this.numStarred=0;
        this.numStarredCars();
    }

    ngOnInit() {}

    priceAverage() {
      var total = 0;
      var len = 0;
      dummyData.forEach((car) => {
        total = car.price + total;
        len++;
      });
      return total / len;
    }

    numStarredCars() {
        for (let car of this.carArray) {
            if (car.starred === true) {
                this.numStarred += 1;
            }
        }
    }


}
