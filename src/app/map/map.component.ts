import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import {Router} from '@angular/router';

declare var ol: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
    carArray: Car[];
    jsonString: any;

    constructor() {
        this.jsonString = JSON.stringify(dummyData);
        this.carArray = JSON.parse(this.jsonString);
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
            target: 'map',
            view: new ol.View({
                center: ol.proj.fromLonLat([35.04440, 31.25012]),
                maxZoom: 18,
                zoom: 8
            })
        });

        const featuresPoints = [];
        for (const car of this.carArray) {
            const lat = car.latitude;
            const long = car.longitude;
            const point = new ol.Feature({geometry: new ol.geom.Point(ol.proj.fromLonLat([lat, long]))});
            featuresPoints.push(point);
        }

        const pointsSource = new ol.source.Vector({
            features: featuresPoints
        });

        const pointsLayer = new ol.layer.Vector({
            source: pointsSource
        });

        map.addLayer(pointsLayer);
    }
}
