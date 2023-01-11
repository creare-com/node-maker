// import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
// import { Map, Control, DomUtil, ZoomAnimEvent , Layer, MapOptions, tileLayer, latLng } from 'leaflet';

// @Component({
//   selector: 'app-map',
//   template: `<div class="map-container" leaflet [leafletOptions]="options" (leafletMapReady)="onMapReady($event)" (leafletMapZoomEnd)="onMapZoomEnd($event)"></div>`,
//   styles: [`.map-container{
//     width:100%;
//     height:100%;
//     position: inherit;
//     }`]
// })
// export class OsmMapComponent implements OnInit, OnDestroy {
//   @Output() map$: EventEmitter<Map> = new EventEmitter;
//   @Output() zoom$: EventEmitter<number> = new EventEmitter;
//   @Input() options: MapOptions= {
//                       layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                         opacity: 0.7,
//                         maxZoom: 19,
//                         detectRetina: true,
//                         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                       })],
//                       zoom:1,
//                       center:latLng(0,0)
//   };
//   public map!: Map;
//   public zoom!: number;

//   constructor() { 
//   }

//   ngOnInit() {
//   }

//   ngOnDestroy() {
//     this.map.clearAllEventListeners;
//     this.map.remove();
//   };

//   onMapReady(map: Map) {
//     this.map = map;
//     this.map$.emit(map);
//     this.zoom = map.getZoom();
//     this.zoom$.emit(this.zoom);
//   }

//   onMapZoomEnd(e: ZoomAnimEvent) {
//     this.zoom = e.target.getZoom();
//     this.zoom$.emit(this.zoom);
//   }
// }