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
    mostCommonColor: string;
    mostCommonMake: string;
    lowestPrice: number;
    highestPrice: number;

    constructor() {
        let jsonString = JSON.stringify(dummyData);
        this.carArray = JSON.parse(jsonString);
        this.numStarred=0;
        this.mostCommonColor="";
        this.mostCommonMake="";
        this.lowestPrice=0;
        this.highestPrice=0;
        this.numStarredCars();
        this.mostCommonCarColor();
        this.mostCommonCarMake();
        this.lowestCarPrice();
        this.highestCarPrice();
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
      this.mostCommonMake = carMakeArr[makeNumArr.indexOf(Math.max(...makeNumArr))];
    }

    lowestCarPrice() {
      var minPrice = this.carArray[0].price;
      for(let car of this.carArray) {
        if(car.price < minPrice) {
          minPrice = car.price;
        }
      }
      this.lowestPrice = minPrice;
    }

    highestCarPrice() {
      var maxPrice = this.carArray[0].price;
      for(let car of this.carArray) {
        if(car.price > maxPrice) {
          maxPrice = car.price;
        }
      }
      this.highestPrice = maxPrice;
    }
}
