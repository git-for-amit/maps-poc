/// <reference path="../../node_modules/@types/bingmaps/index.d.ts" />
import { Component } from '@angular/core';
import { BingMapsLoaderService } from './bing-maps/bing-maps-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps-poc';
  mapReady = false;
  mapSelected = 'bing';
  constructor() {
    BingMapsLoaderService.load()
      .then(res => {
        console.log('BingMapsLoader.load.then', res);
        this.mapReady = true;
      });
  }
  switchMap() {
    if (this.mapSelected == 'bing') {
      this.mapSelected = 'google';
    } else {
      this.mapSelected = 'bing';
    }
  }
}
