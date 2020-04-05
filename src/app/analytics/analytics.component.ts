import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css'],
    providers: [DatePipe]
})

export class AnalyticsComponent implements OnInit {
    carArray: Car[];
    averagePrice: number;
    numStarred = 0;
    carsAddedThirtyDays = 0;
    carTotal = 0;
    mostCommonColor: string;
    earliestToLatest: string;

    constructor() {
        const jsonString = JSON.stringify(dummyData);
        this.carArray = JSON.parse(jsonString);
    }

    ngOnInit() {
        this.totalCarCount()
        this.calculatePriceAverage();
        this.numStarredCars();
        this.carEarliestToLatest();
        this.mostCommonCarColor();
        this.carsAddedOverThirtyDays();
    }

    // Average car price
    calculatePriceAverage() {
      let total = 0;
      let len = 0;
      dummyData.forEach((car) => {
        total = car.price + total;
        len++;
      });
      this.averagePrice = total / len;
    }

    // Number of starred cars
    numStarredCars() {
        for (const car of this.carArray) {
            if (car.starred === true) {
                this.numStarred += 1;
            }
        }
    }

    // Total number of cars
    totalCarCount() {
        for (const car of this.carArray) {
            this.carTotal += 1;
        }
      }

    carEarliestToLatest() {
        let earliestDate = 99999;
        let latestDate = -9999;

        for (const car of this.carArray) {
            if (parseInt(car.dateAdded) <= earliestDate) {
              earliestDate = parseInt(car.dateAdded);
            }

            if (parseInt(car.dateAdded) >= latestDate) {
                latestDate = parseInt(car.dateAdded);
            }
        }
        this.earliestToLatest = earliestDate.toString() + ' ~ ' + latestDate.toString();
    }

    // Most common car color
    mostCommonCarColor() {
      const carColorArr = [];
      const colorNumArr = [];
      for (const car of this.carArray) {
        if (carColorArr.indexOf(car.color) === -1) {
          carColorArr.push(car.color);
          colorNumArr.push(1);
        } else {
          colorNumArr[carColorArr.indexOf(car.color)] = colorNumArr[carColorArr.indexOf(car.color)] + 1;
        }
      }
      this.mostCommonColor = carColorArr[colorNumArr.indexOf(Math.max(...colorNumArr))];
    }

    // Cars added over the past 30 days
    carsAddedOverThirtyDays() {
      const currDate = new Date();
      const stringTest = formatDate(currDate, "dd/MM/yyyy", 'en-US');
      const day = Number(stringTest.substring(0,2));
      const month = Number(stringTest.substring(3, 5));
      const year = Number(stringTest.substring(6, 10));

      for (const car of this.carArray) {
        const carAdded = car.dateAdded;
        const carAddedArr = carAdded.split("-", 3);
        const carAddedYear = Number(carAddedArr[0]);
        const carAddedMonth = Number(carAddedArr[1]);
        const carAddedDay = Number(carAddedArr[2]);
        if (year - carAddedYear === 1) {
          if( month === 1 && carAddedMonth === 12) {
            if (carAddedDay > day) {
              this.carsAddedThirtyDays += 1;
            }
          }
        } else if (year === carAddedYear) {
            if (month === carAddedMonth) {
              this.carsAddedThirtyDays += 1;
            } else if (month - carAddedMonth === 1) {
              if (carAddedDay > day) {
                this.carsAddedThirtyDays += 1;
              }
            }
        }
      }
    }
}
