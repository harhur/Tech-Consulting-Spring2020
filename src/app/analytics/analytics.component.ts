import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {

    constructor() {}

    ngOnInit() {}


priceAverage() {
  var total = 0;
  var len = 0;
  dummyData.forEach((car) => {
    total = car.price + total;
    len++;
  });
  return total/len;
}



}
