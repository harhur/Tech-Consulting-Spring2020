import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import {ActivatedRoute} from '@angular/router';

declare var ol: any;

@Component({
    selector: 'app-carmap',
    templateUrl: './carmap.component.html',
    styleUrls: ['./carmap.component.css']
})

export class CarMapComponent implements OnInit {
    carArray: Car[];
    jsonString: any;
    id: number;
    car: Car;

    constructor(private activeRoute: ActivatedRoute) {
        this.jsonString = JSON.stringify(dummyData);
        this.carArray = JSON.parse(this.jsonString);
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
        dummyData.forEach((car) => {
            if (car.carId === this.id) {
                this.car = car;
            }
        });
    }
}
