import { Component, OnInit } from '@angular/core';
//import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import { CarsService } from "../cars.service";
//import { AddCarComponent } from "../add-car/add-car.component"

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
    carArray: Car[];
    constructor(private carService : CarsService) {
        this.carService.getCars().subscribe(carArray => this.carArray = carArray);
        this.numStarredCars();
        this.mostCommonCarColor();
        this.mostCommonCarMake();
        this.lowestCarPrice();
        this.highestCarPrice();
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

    numStarredCars() {
      var starred = 0;
        for (let car of this.carArray) {
            if (car.starred === true) {
                starred += 1;
            }
        }
        return starred;
    }

    mostCommonCarColor() {
      this.carService.getCars().subscribe(carArray => this.carArray = carArray);
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
}
