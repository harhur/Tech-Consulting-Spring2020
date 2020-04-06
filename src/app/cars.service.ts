import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import dummyData from '../assets/dummyData.json';
import {Car} from './app.component';

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    carArray: Car[];

    constructor() {
        let jsonString = JSON.stringify(dummyData);
        this.carArray = JSON.parse(jsonString);
    }

    getCars(): Observable<Car[]> {
        this.carArray.sort((a, b) => a.carId - b.carId);
        return of(this.carArray);
    }

    addCar(car: Car) {
        this.carArray.push(car);
        this.carArray.sort((a, b) => a.carId - b.carId);
    }

}
