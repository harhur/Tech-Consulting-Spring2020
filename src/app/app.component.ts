import { Component } from '@angular/core';

declare var ol: any;

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

  /*
  may be needed for future
  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([35.04440, 31.25012]));
    view.setZoom(8);
  }
  */

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([35.04440, 31.25012]),
        zoom: 8
      })
    });
  }

}
