import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-wms-header';
import * as $ from "jquery";
import * as moment from 'moment';
import { environment } from '../../environments/environment';
import { Pipeline } from '../node-inputs/pipeline';
import { PipelineEditorService } from '../pipeline-editor/pipeline-editor.service';
import { LegendService } from '../legend/legend/legend.service';
import { BusyboxService } from '../busybox/busybox.service';
import { EMPTY, Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class LeafletService {

    leafletParams:any= {
        map: undefined,
        leafletMapTime: new Date(Date.now()).toISOString(),
        leafletURL: '../api',
        tileLayer : undefined,
        leafletTimes: undefined,
        token: "",
        displayedPipeline: undefined
    };

    constructor(private pipelineEditorService:PipelineEditorService, private busyboxService:BusyboxService,
        private legendService:LegendService) {  }

    // setupParams = this.setupService.setupParams;
    editorParams = this.pipelineEditorService.editorParams;
    legendParams = this.legendService.legendParams;
    dtp = new L.Control({ position: "bottomleft" });

    init(mapInit:any=[]) {
        var bounds:any = [43.679744, -72.2239488];
        var zoom = 11;
        if (mapInit[1] && Object.keys(mapInit[0]).length > 0) {
            bounds = mapInit[0];
            zoom = mapInit[1];
        }
        this.leafletParams.map = L.map('map').setView(bounds, zoom);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: environment.mapbox.accessToken,
        }).addTo(this.leafletParams.map);
        L.control.scale({position:'bottomright'}).addTo(this.leafletParams.map);
        this.addPicker();
    }

    addPicker(date=undefined) {
        try {
            //add datetimepicker to leaflet map
            this.dtp.onAdd = function(map) {
                var info = L.DomUtil.create('div', 'input-group date');
                info.id = "datetimepicker1";
                info.innerHTML+= "<input type='text' class='form-control'/>";
                info.innerHTML+= "<span class='input-group-addon'><span class='glyphicon glyphicon-calendar'></span></span>";
                info.innerHTML+= "</div>";
                L.DomEvent.disableClickPropagation(info);
                return(info);
            };
            this.dtp.onRemove = function(map) {
                // Nothing to do here
            }
            this.dtp.addTo(this.leafletParams.map);
            let defDate = moment().subtract(1,"days").format();
            if (date) {
                defDate = date;
            }
            this.leafletParams.leafletMapTime = defDate;
            // let defTZ = moment.tz.guess();
            // let defTZ = "America/New_York";
            let defTZ = "UTC";
            // console.log("LeafletTimesParams", this.leafletParams.leafletTimes);
            if (this.leafletParams.leafletTimes) {
                (<any>$("#datetimepicker1")).datetimepicker({
                    defaultDate: defDate,
                    timeZone: defTZ,
                    format: 'MM/DD/YYYY HH:mm zz',
                    widgetPositioning: {horizontal: 'auto', vertical: 'top'},
                    // minDate:'2000/01/02',
                    // maxDate:'2100/01/02',
                    enabledDates:this.leafletParams.leafletTimes,
                    // disabledDates:['2100/01/02']
                })
                .data('DateTimePicker');
            }
            else {
                (<any>$("#datetimepicker1")).datetimepicker({
                    defaultDate: defDate,
                    timeZone: defTZ,
                    format: 'MM/DD/YYYY HH:mm zz',
                    widgetPositioning: {horizontal: 'auto', vertical: 'top'},
                })
                .data('DateTimePicker');
            }

            //ABOVE - enabled/disabled dates will overwrite the other...

            (<any>$("#datetimepicker1")).datetimepicker().on("dp.change", (e:any) => {
                console.log("selected datetime: ",e.date.toDate());
                this.leafletParams.leafletMapTime = e.date.toDate().toISOString();
            });
        }
        catch {
            console.log("Error adding leaflet datetimepicker to map");
        }
    }

    removePicker() {
        try {
            this.leafletParams.map.removeControl(this.dtp)
        }
        catch {
            console.log("failed to remove datetime picker control");
        }
    }

    // addPickerOld(remove=false) {
    //     if (remove) {
    //         try {
    //             this.leafletParams.map.removeControl(this.dtp)
    //         }
    //         catch {
    //             console.log("failed to remove datetime picker control");
    //         }
    //     }
    //     else {
    //         // console.log("LeafletTimesParams", this.leafletParams.leafletTimes);
    //         if (this.leafletParams.leafletTimes) {
    //             //add datetimepicker to leaflet map
    //             this.dtp.onAdd = function(map) {
    //                 var info = L.DomUtil.create('div', 'input-group date');
    //                 info.id = "datetimepicker1";
    //                 info.innerHTML+= "<input type='text' class='form-control'/>";
    //                 info.innerHTML+= "<span class='input-group-addon'><span class='glyphicon glyphicon-calendar'></span></span>";
    //                 info.innerHTML+= "</div>";
    //                 L.DomEvent.disableClickPropagation(info);
    //                 return(info);
    //             };
    //             this.dtp.onRemove = function(map) {
    //                 // Nothing to do here
    //             }
    //             this.dtp.addTo(this.leafletParams.map);
    //             let defDate = moment().format();
    //             // let defTZ = moment.tz.guess();
    //             // let defTZ = "America/New_York";
    //             let defTZ = "UTC";
    //             (<any>$("#datetimepicker1")).datetimepicker({
    //                 defaultDate: defDate,
    //                 timeZone: defTZ,
    //                 format: 'MM/DD/YYYY HH:mm zz',
    //                 widgetPositioning: {horizontal: 'auto', vertical: 'top'},
    //                 // minDate:'2000/01/02',
    //                 // maxDate:'2100/01/02',
    //                 enabledDates:this.leafletParams.leafletTimes,
    //                 // disabledDates:['2100/01/02']
    //             })
    //             .data('DateTimePicker');

    //             //ABOVE - enabled/disabled dates will overwrite the other...

    //             (<any>$("#datetimepicker1")).datetimepicker().on("dp.change", (e:any) => {
    //                 console.log("selected datetime: ",e.date.toDate());
    //                 this.leafletParams.leafletMapTime = e.date.toDate().toISOString();
    //             });
    //         }
    //         else {
    //             setTimeout(() => {
    //                 console.log("inside timeout");
    //                 this.addPickerOld();
    //             }, 5000);
    //         }
    //     }
    // }

    viewPipeline(pipeline:Pipeline, defStyle:any, update:boolean=false) {
        console.log("clicked pipeline: ",pipeline);
        // Update the legend
        this.legendParams.speedOrCost = false;
        this.busyboxService.stop();
        // get the style
        var keys = Object.keys(pipeline.data);
        var lastKey = keys[keys.length - 1];
        if (lastKey == "podpac_version") {
            lastKey = keys[keys.length - 2];
        }
        var style = pipeline.data[lastKey]["style"];

        if (style && Object.entries(style).length > 0) {
            var value = style.colormap;

            if (value !== undefined) {
                this.legendService.setColormap(value);
            }
            value = style.clim;
            if (value !== undefined) {
                this.legendService.setClims(value[0], value[1]);
            }
            let name = style.name?style.name:pipeline.name;
            let units = style.units?style.units:"";
            if (units.length > 0) {
                this.legendService.setTitle(name + ' ['+units+']');
            }
            else {
                this.legendService.setTitle(name);
            }
        }
        else {
            //check if node has a default style
            if (defStyle && Object.entries(defStyle).length > 0) {
                this.legendService.setClims(defStyle.clim[0],defStyle.clim[1]);
                this.legendService.setColormap(defStyle.colormap);
                let name = defStyle.name?defStyle.name:pipeline.name;
                let units = defStyle.units?defStyle.units:"";
                if (units.length > 0) {
                    this.legendService.setTitle(name + ' ['+units+']');
                }
                else {
                    this.legendService.setTitle(name);
                }


            }
            else {
                this.legendService.setClims(0, 0);
                this.legendService.setColormap("viridis");
                this.legendService.setTitle(pipeline.name);
            }
        }
        this.legendService.show();

        // Create the parameters that overwrite the default behavior of the pipeline
        var params : any = {};
        params["style"] = style;
        if (this.editorParams.outputsTracker[pipeline.name]["current"]!=undefined) {
            params["attrs"]={output:this.editorParams.outputsTracker[pipeline.name]["current"]};
        }

        var streets = L.tileLayer.wms('https://ows.terrestris.de/osm/service', {
            transparent: true,
            layers: "OSM-Overlay-WMS"
        });

        var tileLayerOptions = {
            layers: pipeline.name,
            transparent: true,
            transparency: true,
            version: "1.3.0",
            opacity: 1.0,
            // time: new Date(Date.now()).toISOString(),
            time: this.leafletParams.leafletMapTime,
            format: 'image/png',
            interpolation: 'nearest_preview',  // This gives faster responses when zoomed out
            params: JSON.stringify(params),
            cacheBusting: Math.floor(Math.random() * 1000000000)
        };
        console.log("tileLayerOptions",tileLayerOptions);
        // Regular leaflet WMS Layer
        this.leafletParams.tileLayer = L.tileLayer.wms(this.leafletParams.leafletURL, tileLayerOptions);

        // Add the busybox animation
        this.leafletParams.tileLayer.on('loading', (e: any) => { this.busyboxService.start(); });
        this.leafletParams.tileLayer.on('load', (e: any) => { this.busyboxService.stop(); });

        var pNames: String[] = [];
        this.editorParams.pipelines.forEach (p => {
            pNames.push(p.name);
        });
        var adding: boolean = true;
        this.leafletParams.map.eachLayer(function (layer: any) {
            console.log("layer",layer);
            if (pNames.includes(layer.options['layers']) || layer.options['layers']=="_viewSpeedOrCostMap_" || layer.options['layers']==="OSM-Overlay-WMS") {
                layer.remove();
            }
            if (pipeline.name==layer.options['layers'] && !update) {
                adding = false;
            }
        });
        if (adding==true) {
            this.leafletParams.tileLayer.addTo(this.leafletParams.map);
            // streets.addTo(this.leafletParams.map);
            this.leafletParams.displayedPipeline = pipeline.name;
        }
        else {
            this.busyboxService.stop();
            this.legendService.hide();
            this.leafletParams.displayedPipeline = undefined;
        }
    }

    viewSpeedOrCostMap(name:string, style:any, type:string, channel:string="", update:boolean=false) {
        // Update the legend
        this.legendParams.speedOrCost = true;
        this.busyboxService.stop();
        // Change legend colormap to match leaflet map
        if (type=="speed") {
            this.legendService.setColormap(style.speed_style.colormap);
            this.legendService.setClims(Math.round((style.speed_style.clim[0] + Number.EPSILON) * 10) / 10, Math.round((style.speed_style.clim[1] + Number.EPSILON) * 10) / 10);
            this.legendService.setTitle("SpeedMap [mph]");
        }
        else if (type=="cost") {
            this.legendService.setColormap(style.cost_style.colormap);
            this.legendService.setClims(Math.round((style.cost_style.clim[0] + Number.EPSILON) * 10) / 10, Math.round((style.cost_style.clim[1] + Number.EPSILON) * 10) / 10);
            this.legendService.setTitle("CostMap [mins]");
        }
        this.legendService.show();

        var streets = L.tileLayer.wms('https://ows.terrestris.de/osm/service', {
            transparent: true,
            layers: "OSM-Overlay-WMS"
        });

        var params = {
            name:name,
            type:type,
            channel:channel
        };

        var tileLayerOptions = {
            layers: "_viewSpeedOrCostMap_",
            transparent: true,
            transparency: true,
            version: "1.3.0",
            opacity: 1.0,
            time: this.leafletParams.leafletMapTime,
            format: 'image/png',
            interpolation: 'nearest_preview',  // This gives faster responses when zoomed out
            params: JSON.stringify(params),
            cacheBusting: Math.floor(Math.random() * 1000000000)
        };
        console.log("tileLayerOptions",tileLayerOptions);
        this.leafletParams.tileLayer = L.tileLayer.wms(this.leafletParams.leafletURL, tileLayerOptions);

        // Add the busybox animation
        this.leafletParams.tileLayer.on('loading', (e: any) => { this.busyboxService.start(); });
        this.leafletParams.tileLayer.on('load', (e: any) => { this.busyboxService.stop(); });

        //removing old pipelines from map
        var pNames: String[] = [];
        this.editorParams.pipelines.forEach (p => {
            pNames.push(p.name);
        });
        var adding: boolean = true;
        this.leafletParams.map.eachLayer(function (layer: any) {
            if (pNames.includes(layer.options['layers']) || layer.options['layers']=="_viewSpeedOrCostMap_" || layer.options['layers']==="OSM-Overlay-WMS") {
                layer.remove();
            }
            if (layer.options.params
                && name==JSON.parse(layer.options.params)["name"]
                && params.type==JSON.parse(layer.options.params)["type"]
                && !update
            ) {
                adding = false;
            }
        });
        this.leafletParams.displayedPipeline = undefined;
        if (adding==true) {
            this.leafletParams.tileLayer.addTo(this.leafletParams.map);
            // streets.addTo(this.leafletParams.map);
        }
        else {
            this.busyboxService.stop();
            this.legendService.hide();
        }
    }

    useCustomColormap () {
        var eleMin = <HTMLInputElement>document.getElementById("legend-vmin");
        var eleMax = <HTMLInputElement>document.getElementById("legend-vmax");
        console.log("MIN",eleMin.value);
        console.log("MAX",eleMax.value);

        var style : any = {
            clim: [parseFloat(eleMin.value), parseFloat(eleMax.value)],
            colormap: this.legendParams.cmap
        };
        var params = JSON.parse(this.leafletParams.tileLayer.wmsParams["params"]);
        if (params === undefined) {
            params = {};
        }
        params['style'] = style;
        // this.tileLayer.wmsParams["params"] = JSON.stringify(params);
        this.leafletParams.tileLayer.setParams({params: JSON.stringify(params)}, false);
    }

}