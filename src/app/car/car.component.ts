import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//import dummyData from '../../assets/dummyData.json';
import { CarsService } from "../cars.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  id: number;
  car: any;

  constructor(private activeRoute: ActivatedRoute, private carService: CarsService) {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = +params['id'];
    });
    this.getCar();
  }

  ngOnInit() {
  }

  getCar(id) {
    this.carService.getCars().subscribe(carArray => carArray.forEach((car) => {
      if (car.carId === id) {
        this.car = car;
      }
    }));
  }
}
