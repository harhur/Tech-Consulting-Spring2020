import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import { DatePipe } from '@angular/common';
import { formatDate } from "@angular/common";

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css'],
    providers: [DatePipe]
})

export class AnalyticsComponent implements OnInit {
    carArray: Car[];
    numStarred: number;
    mostCommonColor: string;
    carsAddedThirtyDays: number;
    carTotal: number;
    earliestToLatest: string;

    constructor() {
        let jsonString = JSON.stringify(dummyData);
        this.carArray = JSON.parse(jsonString);
        this.numStarred=0;
        this.mostCommonColor="";
        this.carsAddedThirtyDays=0;
        this.carTotal=0;
        this.earliestToLatest="";
        this.numStarredCars();
        this.mostCommonCarColor();
        this.carsAddedOverThirtyDays();
    }

    ngOnInit() {
        this.totalCarCount();
        this.carEarliestToLatest();
    }

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

    totalCarCount() {
        for (let car of this.carArray) {
            this.carTotal += 1;
        }
      }

  carEarliestToLatest() {
   var earliestDate = 99999;
   var latestDate = -9999;

    for (let car of this.carArray) {

        if(parseInt(car.dateAdded) <= earliestDate) {

          earliestDate = parseInt(car.dateAdded);
        }
        if(parseInt(car.dateAdded) >= latestDate) {
          latestDate = parseInt(car.dateAdded);
        }
    }
    this.earliestToLatest = earliestDate.toString() + " ~ " + latestDate.toString();
  }


    mostCommonCarColor() {
      var carColorArr = [];
      var colorNumArr = [];
      for(let car of this.carArray) {
        if(carColorArr.indexOf(car.color) == -1) {
          carColorArr.push(car.color);
          colorNumArr.push(1);
        }
        else {
          colorNumArr[carColorArr.indexOf(car.color)] = colorNumArr[carColorArr.indexOf(car.color)] + 1;
        }
      }
      this.mostCommonColor = carColorArr[colorNumArr.indexOf(Math.max(...colorNumArr))];
    }

    carsAddedOverThirtyDays() {
      var currDate = new Date();
      var stringTest = formatDate(currDate, "dd/MM/yyyy", 'en-US');
      var day = Number(stringTest.substring(0,2));
      var month = Number(stringTest.substring(3, 5));
      var year = Number(stringTest.substring(6,10));
      console.log(year)

      for(let car of this.carArray) {
        var carAdded = car.dateAdded;
        var carAddedArr = carAdded.split("-", 3);
        var carAddedYear = Number(carAddedArr[0]);
        var carAddedMonth = Number(carAddedArr[1]);
        var carAddedDay = Number(carAddedArr[2]);
        if(year - carAddedYear == 1) {
          if(month == 1 && carAddedMonth == 12) {
            if(carAddedDay > day) {
              this.carsAddedThirtyDays += 1;
            }
          }
        } else if(year == carAddedYear) {
            if (month == carAddedMonth) {
              this.carsAddedThirtyDays += 1;
            } else if (month - carAddedMonth == 1) {
              if(carAddedDay > day) {
                this.carsAddedThirtyDays += 1;
              }
            }
        }
      }
    }


}
