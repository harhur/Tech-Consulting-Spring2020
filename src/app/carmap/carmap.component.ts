import { Component, OnInit } from '@angular/core';
//import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import {ActivatedRoute} from '@angular/router';
import { CarsService } from "../cars.service";

declare var ol: any;

@Component({
    selector: 'app-carmap',
    templateUrl: './carmap.component.html',
    styleUrls: ['./carmap.component.css']
})

export class CarMapComponent implements OnInit {
    id: number;
    car: Car;

    constructor(private activeRoute: ActivatedRoute, private carService: CarsService) {

        this.activeRoute.queryParams.subscribe(params => {
            this.id = +params['id'];
        });
        this.getCar();
    }

    ngOnInit() {
        // Base map of Israel
        const map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM({
                    })
                })
            ],
            target: 'carmap',
            view: new ol.View({
                center: ol.proj.fromLonLat([this.car.latitude, this.car.longitude]),
                maxZoom: 18,
                zoom: 14
            })
        });

        const pointsLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [new ol.Feature({geometry: new ol.geom.Point(ol.proj.
                    fromLonLat([this.car.latitude, this.car.longitude]))})]
            })
        });

        map.addLayer(pointsLayer);
    }

    getCar() {
      this.carService.getCars().subscribe(carArray => carArray.forEach((car) => {
          if (car.carId === this.id) {
              this.car = car;
          }
      }));
    }
}
