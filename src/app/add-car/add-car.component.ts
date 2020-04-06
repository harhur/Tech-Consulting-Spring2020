import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css'],

})
export class AddCarComponent implements OnInit {
    dataSource: any;
    submitMessage = '';
    starred = false;

    constructor(private router: Router, private carService: CarsService) {
    }

    ngOnInit() {
        this.carService.getCars().subscribe(carArray => this.dataSource = new MatTableDataSource(carArray));
    }

    addCar() {
        const car = {
            carId: this.getNewId(),
            dateAdded: this.getTodayDate(),
            color: (<HTMLInputElement>document.getElementById("color")).value,
            price: parseInt((<HTMLInputElement>document.getElementById("price")).value),
            vin: parseInt((<HTMLInputElement>document.getElementById("vin")).value),
            lastUpdated: this.getLastUpdated(),
            year: parseInt((<HTMLInputElement>document.getElementById("year")).value),
            model: (<HTMLInputElement>document.getElementById("model")).value,
            make: (<HTMLInputElement>document.getElementById("make")).value,
            plantId: parseInt((<HTMLInputElement>document.getElementById("plantId")).value),
            starred: this.starred,
            latitude: parseFloat((<HTMLInputElement>document.getElementById("latitude")).value),
            longitude: parseFloat((<HTMLInputElement>document.getElementById("longitude")).value)
        }
        if (this.validateInput(car)) {
            this.carService.addCar(car);
            this.submitMessage = 'Successfully added vehicle!';
            this.carService.getCars().subscribe(carArray => this.dataSource = new MatTableDataSource(carArray));
        } else {
            this.submitMessage = 'Missing or invalid input fields.';
        }
    }

    validateInput(car) {
        return (car.color !== '' && car.price > -1 && car.vin > -1 && car.year > -1 && car.model !== '' && car.make !== ''
        && car.plantId > -1 && car.latitude > -1 && car.longitude > -1);
    }

    getNewId() {
        let newId = -1;
        this.carService.getCars().subscribe(carArray => Object.values(carArray).forEach(element => {
            if (element.carId > newId) {
                newId = element.carId;
            }
        }));
        return newId + 1;
    }

    getTodayDate() {
        const today = new Date();
        const todayStr = formatDate(today, 'yyyy-MM-dd', 'en-US');
        return todayStr;
    }

    getLastUpdated() {
        const today = new Date();
        const currentStr = formatDate(today, 'yyyy-MM-dd HH:mm:ss', 'en-US');
        return currentStr;
    }
}
