import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bing-maps',
  templateUrl: './bing-maps.component.html',
  styleUrls: ['./bing-maps.component.css']
})
export class BingMapsComponent implements OnInit {

  constructor() { }

  key = 'AkX7a8KcQQvCk7--5zWQxaBhRwMumGCdaw-Pa1Zssg0o8stZm1PTux2VRYzp4bp2';
  map = null;

  ngOnInit() {
    if (typeof Microsoft !== 'undefined') {
      console.log('BingMapsComponent.ngOnInit');
      this.loadMap();
      //this.drawPolygon();
    }
  }

  loadMap() {
    this.map = new Microsoft.Maps.Map(document.getElementById('bingMapDiv'), {
      credentials: this.key,
      center: new Microsoft.Maps.Location(35.2271, -80.8431)
    });
  }

  drawPolygon(){
    var center = this.map.getCenter();

        //Create array of locations to form a ring.
        var exteriorRing = [
            center,
            new Microsoft.Maps.Location(center.latitude - 0.5, center.longitude - 1),
            new Microsoft.Maps.Location(center.latitude - 0.5, center.longitude + 1),
            center
        ];

        //Create a polygon
        var polygon = new Microsoft.Maps.Polygon(exteriorRing, {
            fillColor: 'rgba(0, 255, 0, 0.5)',
            strokeColor: 'red',
            strokeThickness: 2
        });

        //Add the polygon to map
        this.map.entities.push(polygon);
  }
}
