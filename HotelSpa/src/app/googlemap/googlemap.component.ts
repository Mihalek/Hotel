import { Component, OnInit } from '@angular/core';

import { defaults as defaultControls } from 'ol/control';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  map: Map;

  ngOnInit(){
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer(
          {source: new OSM()}
        ),  new VectorLayer({
          source: new VectorSource({
            features: [new Feature({
              geometry: new Point(fromLonLat([16.9315, 52.4086]))
            })]
          })
        })],
        view: new View(
          {center: fromLonLat([16.9315, 52.4086]),
          zoom: 16})

    });
  }
}