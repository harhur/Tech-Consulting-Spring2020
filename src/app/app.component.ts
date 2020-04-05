import { Component } from '@angular/core';
import dummyData from '../assets/dummyData.json';
import {ActivatedRoute, Router} from '@angular/router';

declare var ol: any;

export interface Car {
  carId: number;
  dateAdded: string;
  color: string;
  price: number;
  vin: number;
  lastUpdated: string;
  year: number;
  model: string;
  make: string;
  plantId: number;
  starred: boolean;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Attribution :
// https://medium.com/@balramchavan/using-openstreetmap-inside-angular-v6-3d42cbf03e57
export class AppComponent {
  title = 'sogo-services';

  latitude: number = 18.5204;
  longitude: number = 73.8567;

  map: any;
  latLong = new Array<Car>();

  constructor(private router: Router) {
  }

  ngOnInit() {
    // this.generateCoordinates();
    // console.log(this.latLong);
  }

  // Generate random coordinates for OpenStreetMaps from the pre-existing JSON data
  generateCoordinates() {
    dummyData.forEach(element => {
      let latitude = (Math.random() * (34.9 - 35.09) + 35.090).toFixed(4);
      let longitude = (Math.random() * (31 - 32.500) + 32.500).toFixed(4);

      let car = {
        carId: element.carId,
        dateAdded: element.dateAdded,
        color: element.color,
        price: element.price,
        vin: element.vin,
        lastUpdated: element.lastUpdated,
        year: element.year,
        model: element.model,
        make: element.make,
        plantId: element.plantId,
        starred: element.starred,
        latitude: +latitude,
        longitude: +longitude
      }

      this.latLong.push(car);
    });
  }

  isNotHomepage() {
    return this.router.url !== '/';
  }

}
