import { Component, OnInit } from '@angular/core';
//import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import { CarsService } from "../cars.service";
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],

})
export class AddCarComponent implements OnInit {
  displayedColumns: string[] = ['carId', 'model', 'dateAdded'];
  dataSource: any;

  constructor(private router: Router, private carService : CarsService) {
    //this.carService.getCars().subscribe(carArray => this.dataSource = new MatTableDataSource(carArray));

    //this.dataSource = new MatTableDataSource(this.carService.getCars());
  }

  ngOnInit() {
    this.carService.getCars().subscribe(carArray => this.dataSource = new MatTableDataSource(carArray));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(row) {
    this.router.navigate(['./car'],  {queryParams: {id: row.carId}});
  }

  addCar() {
    var car = {
      carId: parseInt((<HTMLInputElement>document.getElementById("carId")).value),
      dateAdded: (<HTMLInputElement>document.getElementById("dateAdded")).value,
      color: (<HTMLInputElement>document.getElementById("color")).value,
      price: parseInt((<HTMLInputElement>document.getElementById("price")).value),
      vin: parseInt((<HTMLInputElement>document.getElementById("vin")).value),
      lastUpdated: (<HTMLInputElement>document.getElementById("lastUpdated")).value,
      year: parseInt((<HTMLInputElement>document.getElementById("year")).value),
      model: (<HTMLInputElement>document.getElementById("model")).value,
      make: (<HTMLInputElement>document.getElementById("make")).value,
      plantId: parseInt((<HTMLInputElement>document.getElementById("plantId")).value),
      starred: (<HTMLInputElement>document.getElementById("starred")).checked,
      latitude: parseFloat((<HTMLInputElement>document.getElementById("latitude")).value),
      longitude: parseFloat((<HTMLInputElement>document.getElementById("longitude")).value)
    }
    this.carService.addCar(car);
    this.carService.getCars().subscribe(carArray => this.dataSource = new MatTableDataSource(carArray));
    //this.dataSource = new MatTableDataSource(this.carService.getCars());
  }
}
