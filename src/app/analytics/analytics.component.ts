import { Component, OnInit } from '@angular/core';
//import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import { CarsService } from "../cars.service";
//import { AddCarComponent } from "../add-car/add-car.component"
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
    constructor(private carService : CarsService) {
        this.carService.getCars().subscribe(carArray => this.carArray = carArray);
        this.numStarredCars();
        this.carEarliestToLatest();
        this.mostCommonCarColor();
        this.mostCommonCarMake();
        this.lowestCarPrice();
        this.highestCarPrice();
        this.carsAddedOverThirtyDays();
        this.priceAverage();
        this.totalCarCount();
    }

    ngOnInit() {
    }

    priceAverage() {
      var total = 0;
      var len = 0;
      this.carArray.forEach((car) => {
        total = car.price + total;
        len++;
      });
      return (Math.floor((total / len) * 100)) / 100;
    }

    // Number of starred cars
    numStarredCars() {
      var starred = 0;
        for (let car of this.carArray) {
            if (car.starred === true) {
                starred += 1;
            }
        }
        return starred;
    }

    // Total number of cars
    totalCarCount() {
      var carTotal = 0;
        for (const car of this.carArray) {
            carTotal += 1;
        }
        return carTotal;
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
        return earliestDate.toString() + ' ~ ' + latestDate.toString();
    }

    // Most common car color
    mostCommonCarColor() {
      this.carService.getCars().subscribe(carArray => this.carArray = carArray);
      var carColorArr = [];
      var colorNumArr = [];
      for(let car of this.carArray) {
        if(carColorArr.indexOf(car.color) == -1) {
          carColorArr.push(car.color);
          colorNumArr.push(1);
        } else {
          colorNumArr[carColorArr.indexOf(car.color)] = colorNumArr[carColorArr.indexOf(car.color)] + 1;
        }
      }
      return carColorArr[colorNumArr.indexOf(Math.max(...colorNumArr))];
    }

    mostCommonCarMake() {
      var carMakeArr = [];
      var makeNumArr = [];
      for(let car of this.carArray) {
        if(carMakeArr.indexOf(car.make) == -1) {
          carMakeArr.push(car.make);
          makeNumArr.push(1);
        }
        else {
          makeNumArr[carMakeArr.indexOf(car.make)] = makeNumArr[carMakeArr.indexOf(car.make)] + 1;
        }
      }
      return carMakeArr[makeNumArr.indexOf(Math.max(...makeNumArr))];
    }

    lowestCarPrice() {
      var minPrice = this.carArray[0].price;
      for(let car of this.carArray) {
        if(car.price < minPrice) {
          minPrice = car.price;
        }
      }
      return minPrice;
    }

    highestCarPrice() {
      var maxPrice = this.carArray[0].price;
      for(let car of this.carArray) {
        if(car.price > maxPrice) {
          maxPrice = car.price;
        }
      }
      return maxPrice;
    }

    // Cars added over the past 30 days
    carsAddedOverThirtyDays() {
      var carsAddedThirtyDays = 0;
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
              carsAddedThirtyDays += 1;
            }
          }
        } else if (year === carAddedYear) {
            if (month === carAddedMonth) {
              carsAddedThirtyDays += 1;
            } else if (month - carAddedMonth === 1) {
              if (carAddedDay > day) {
                carsAddedThirtyDays += 1;
              }
            }
        }
      }
      return carsAddedThirtyDays;
    }
}
