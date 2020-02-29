import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import dummyData from '../../assets/dummyData.json';
import {Car} from '../recently-added/recently-added.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  id: number;
  car: Car;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = +params['id'];
    });
    this.getCar(this.id);
    console.log(this.car);
  }

  ngOnInit() {
  }

  getCar(id) {
    dummyData.forEach((car) => {
      if (car.carId === id) {
        this.car = car;
      }
    });
  }

}
