// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Other libraries
import { faRoute, faAngleDown, faRoad, faTruck, faBan, faLocationDot, faEye, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { catchError } from 'rxjs/operators';
import * as L from 'leaflet';

// Local imports
import { Route } from './route';
import { BusyboxService } from '../../busybox/busybox.service';
import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';
import { SetupService } from '../../services/setup.service';
import { LeafletService } from '../../services/leaflet.service';
import { MessageboxComponent } from '../../messagebox/messagebox.component';
import { LegendService } from '../../legend/legend/legend.service';

@Injectable({
  providedIn: 'root',
})

export class RouteService {

    routeParams:Route = {
        hideControls: true,
        containerBorderStyle: "none",
        containerBGColor: "none",
        routeNames: [],
        availableRoutes: undefined,
        routeName: '',
        currentRoute: 'Choose One',
        routeSource: '',
        routeOutputs: 'E',
        viewing: {speed:false, cost:false},
        routeInfo: undefined,
        state: 'none',
        showMods: "+",
        speedValue: 0,
        speedType: "s",
        mouseDown: false,
        leafletFuncs: [],
        boundsRect: undefined,
        endPoint: undefined,
        startPoint: undefined,
        roads: [],
        blocks: [],
        tmpRoad: undefined,
        tmpBlock: undefined,
        roadBlockAdder: [],
        currentPoints: [],
        routes: []
    }

    // Font awesome
    faRoute = faRoute;
    faAngleDown = faAngleDown;
    faSquare = faSquare;
    faRoad = faRoad;
    faTruck = faTruck;
    faBan = faBan;
    faLocationDot = faLocationDot;
    faEye = faEye;
    faMagnifyingGlassLocation = faMagnifyingGlassLocation;

    //marker icon offsets
    locationDotOffset:any = [3,11];
    truckOffset:any = [0,5];

    // API calls
    private handleError: HandleError;

    constructor(private busyboxService:BusyboxService, private http: HttpClient, private httpErrorHandler: HttpErrorHandler,
        public messageBox: MessageboxComponent, private leafletService:LeafletService, private setupService:SetupService,
        private legendService:LegendService) {
        this.handleError = httpErrorHandler.createHandleError("RoutePlanningService");
    }

    leafletParams = this.leafletService.leafletParams;
    setupParams = this.setupService.setupParams;

    baseUrl() {
        return this.setupParams.baseURL + 'api/route?';
    }

    queryRoutes() {
        var url : string = `${this.baseUrl()}&SERVICE=QUERY`;
        return this.http.get(url,this.getHttpOptions()).pipe(catchError(this.handleError("queryPathPlan", {}))).subscribe(response => {
            if (Object.keys(response).length>0) {
                console.log("response",response);
                this.routeParams.availableRoutes = response["index" as keyof typeof response];
                this.routeParams.routeNames = Object.keys(this.routeParams.availableRoutes);
            }
        });
    }

    onClickMainIcon() {
        // This hides and shows the route planning UI controls
        // It also enables interactions with the leaflet map
        // It also cleans up interactions with the leaflet map
        this.routeParams.hideControls = !this.routeParams.hideControls;
        if (this.routeParams.hideControls) {
            this.routeParams.containerBorderStyle = "none";
            this.routeParams.containerBGColor = "#00000000";
            // Disable Leaflet interactions
            // this.leafletParams.map.off('mousedown', this.routeParams.leafletFuncs[0]);
            // this.leafletParams.map.off('mousemove', this.routeParams.leafletFuncs[1]);
            // this.leafletParams.map.off('mouseup', this.routeParams.leafletFuncs[2]);
            // this.leafletParams.map.off('dblclick', this.routeParams.leafletFuncs[3]);
            // this.routeParams.state = 'none';
        }
        else {
            this.queryRoutes();

            this.routeParams.containerBorderStyle = "solid";
            this.routeParams.containerBGColor = "white";
            // Enable Leaflet interactions
            this.leafletParams.map.on('mousedown', this.routeParams.leafletFuncs[0]);
            this.leafletParams.map.on('mousemove', this.routeParams.leafletFuncs[1]);
            this.leafletParams.map.on('mouseup', this.routeParams.leafletFuncs[2]);
            this.leafletParams.map.on('dblclick', this.routeParams.leafletFuncs[3]);
        }
    }

    clearMap() {
        // stop busybox
        this.busyboxService.stop();
        // remove legend from leaflet map
        this.legendService.hide();
        // Remove any old rectangles, if they exist
        if (this.routeParams.boundsRect !== undefined) {
            this.leafletParams.map.removeLayer(this.routeParams.boundsRect);
            this.routeParams.boundsRect = undefined;
        }
        // Remove any previous endpoints before adding the new endpoint
        if (this.routeParams.endPoint !== undefined) {
            this.leafletParams.map.removeLayer(this.routeParams.endPoint);
            this.routeParams.endPoint = undefined;
        }
        // remove start points
        if (this.routeParams.startPoint !== undefined) {
            this.leafletParams.map.removeLayer(this.routeParams.startPoint);
            this.routeParams.startPoint = undefined;
        }
        // Remove any old roads, if they exist
        if (this.routeParams.tmpRoad !== undefined) {
            this.leafletParams.map.removeLayer(this.routeParams.tmpRoad);
            this.routeParams.tmpRoad = undefined;
        }
        // remove roads
        if (this.routeParams.roads.length > 0) {
            this.routeParams.roads.forEach( (cP:any, id:any) => {
                this.leafletParams.map.removeLayer(this.routeParams.roads[id]);
            });
            this.routeParams.roads = [];
        }
        // Remove any old zones, if they exist
        if ((this.routeParams.tmpBlock !== undefined) && (this.routeParams.currentPoints.length === 0)) {
            this.leafletParams.map.removeLayer(this.routeParams.tmpBlock);
            this.routeParams.tmpBlock = undefined;
        }
        // remove blocks
        if (this.routeParams.blocks.length > 0) {
            this.routeParams.blocks.forEach( (cP:any, id:any) => {
                this.leafletParams.map.removeLayer(this.routeParams.blocks[id]);
            });
            this.routeParams.blocks = [];
        }
        // remove any old routes if they exist
        for (var i=0; i<this.routeParams.routes.length; i++) {
            for (var j=0; j<this.routeParams.routes[i].length; j++) {
                this.leafletParams.map.removeLayer(this.routeParams.routes[i][j]);
            }
        }
        // remove costmap/speedmap
        this.leafletParams.map.eachLayer(function (layer: any) {
            if (layer.options['layers']=="_viewSpeedOrCostMap_") {
                layer.remove();
            }
        });
        // remove source
        var element = (<HTMLInputElement>document.getElementById("route-map-source"));
        if (element) {
            element.value = "";
        }
        // set params to defaults
        this.routeParams.currentRoute = "Choose One";
        this.routeParams.speedType = "s";
        this.routeParams.speedValue = 0;
        this.routeParams.showMods = "+";
        this.routeParams.routeName = "";
        this.routeParams.routeSource = "";
        this.routeParams.routeOutputs = "E";
        this.routeParams.viewing = {'cost':false,'speed':false};
        this.routeParams.currentPoints = [];
        this.routeParams.roads = [];
        this.routeParams.blocks = [];
        this.routeParams.routeInfo = undefined;
        this.routeParams.tmpRoad = undefined;
        this.routeParams.tmpBlock = undefined;
        this.routeParams.roadBlockAdder = [];
        this.routeParams.state = 'none';
        this.routeParams.mouseDown = false;
        this.leafletParams.map.dragging.enable();
        this.leafletParams.map.doubleClickZoom.enable();
        this.messageBox.post("Cleared map from route planning data.");

        this.onClickMainIcon();
        this.onClickMainIcon();
    }

    routeChange(e:any) {
        // handles when users edit and existing route
        this.clearMap();
        if (e=="New") {
            this.routeParams.currentRoute = "New";
        }
        if (e!="Choose One" && e!="New") {
            this.routeParams.currentRoute = e;
            this.routeParams.routeName = e;
            var element = (<HTMLInputElement>document.getElementById("route-map-source"));
            if (element) {
                element.value = this.routeParams.availableRoutes[this.routeParams.routeName]["map"];
            }
            this.routeParams.routeSource = this.routeParams.availableRoutes[this.routeParams.routeName]["map"];
            this.routeParams.speedType = "s";
            this.routeParams.speedValue = 0;
            this.routeParams.showMods = "-";
            //put costmap params back onto leaflet map
            console.log("this.routeParams.availableRoutes",this.routeParams.availableRoutes);
            if (this.routeParams.routeNames.includes(this.routeParams.routeName)) {
                // Datetime
                var datetime = this.routeParams.availableRoutes[this.routeParams.routeName]["destination"][2];
                this.leafletService.removePicker();
                this.leafletService.addPicker(datetime);
                // Bounds
                var bounds = this.routeParams.availableRoutes[this.routeParams.routeName]["bounds"];
                bounds = [[parseFloat(bounds[0]),parseFloat(bounds[1])],[parseFloat(bounds[2]),parseFloat(bounds[3])]];
                this.makeBoundsRect(bounds);
                // Endpoint
                var destination = this.routeParams.availableRoutes[this.routeParams.routeName]["destination"];
                destination = [parseFloat(destination[0]), parseFloat(destination[1])];
                this.makeEndPoint(destination);
                // Geometry
                var [roadPoints, blockPoints] = this.parseGeometry(this.routeParams.availableRoutes[this.routeParams.routeName]["geometry"]);
                if (roadPoints.length > 0) {
                    this.makeRoads(roadPoints);
                }
                if (blockPoints.length > 0) {
                    this.makeBlocks(blockPoints);
                }
            }
        }
    }

    showModifiers() {
        if (this.routeParams.showMods=="-") {
            this.routeParams.showMods = "+";
        }
        else {
            this.routeParams.showMods = "-";
        }
    }

    parseGeometry(JSONArray:any) {
        var road:any = [];
        var block:any = [];
        for (const [key, value] of Object.entries(JSONArray)) {
            if (Object.keys(JSONArray[key]).includes("LINE")) {
                road.push([[JSONArray[key]["LINE"][0][0], JSONArray[key]["LINE"][0][1]], [JSONArray[key]["LINE"][1][0], JSONArray[key]["LINE"][1][1]]]);
                this.routeParams.showMods = "-";
                if (JSONArray[key]["SPEED"]) {
                    this.routeParams.speedType = "s";
                    // this.routeParams.speedValue = parseFloat(JSON.parse(JSONArray[key])["SPEED"]);
                    this.routeParams.speedValue = 0;
                }
            }
            if (Object.keys(JSONArray[key]).includes("POLY")) {
            var tmpBlock:any=[];
            for (const [key1, value] of Object.entries(JSONArray[key]["POLY"])) {
                tmpBlock.push([JSONArray[key]["POLY"][key1][0], JSONArray[key]["POLY"][key1][1]]);
            }
            block.push(tmpBlock);
            }
        }
        return [road, block];
    }

    onMapNameChange(event : any) {
        this.routeParams.routeName = event.target.value;
    }

    makeBoundsRect(bounds : any) {
        this.routeParams.boundsRect = L.rectangle(bounds, { color: "#ff7800", weight: 3, fillOpacity: 0});
        this.routeParams.boundsRect.addTo(this.leafletParams.map);
    }

    makeEndPoint(point: any) {
        // Use the same icon defined in the UI
        const myIcon = icon(this.faLocationDot, {
            transform: {
                size: 30
            },
            styles: {
                'color': 'red'
            }
        });
        const fontAwesomeIcon = L.divIcon({
            html: myIcon.html[0],
            iconSize: [30, 30],
            iconAnchor: this.locationDotOffset,
            className: 'route-map-icon'
        });

        // Create the endpoint, add to the map, and add a popup
        this.routeParams.endPoint = L.marker(point, { icon: fontAwesomeIcon})
        .addTo(this.leafletParams.map)
        .bindPopup('Destination')
        .once('mouseover', () => {
            this.markerOnMouseover("endPoint");
        })
        .on('mouseout', () => {
            this.markerOffMouseover("endPoint");
        })
        .on('click', () => {
            this.markerClick("endPoint");
        });
        this.routeParams.endPoint.addTo(this.leafletParams.map);
    }

    makeRoads(pointsArray:any, newRoad=false, solid=false) {
        pointsArray.forEach( (cP:any, id:any) => {
            if (newRoad) {
                this.routeParams.tmpRoad = new L.Polyline(cP, {
                    color: '#0090FF',
                    weight: 3,
                    opacity: 0.5
                });
                this.routeParams.roadBlockAdder.push("road");
                this.routeParams.tmpRoad.addTo(this.leafletParams.map)
                .once('mouseover', () => {
                    this.markerOnMouseover("addRoad");
                })
                .on('mouseout', () => {
                    this.markerOffMouseover("addRoad");
                })
                .on('click', () => {
                    this.markerClick("addRoad");
                });
            }
            else {
                this.routeParams.roads.push(new L.Polyline(cP, {
                    color: 'blue',
                    weight: 3,
                    opacity: 0.5
                }));
                if (solid) {
                    this.routeParams.roads[this.routeParams.roads.length - 1].addTo(this.leafletParams.map);
                }
                else {
                    this.routeParams.roads[id].addTo(this.leafletParams.map);
                }
            }
        });
    }

    makeBlocks(pointsArray:any, newBlock=false) {
        console.log("pointsArray",pointsArray);
        pointsArray.forEach( (cP:any, id:any) => {
            //This function only draws the blocks given all points - used when route is edited
            this.routeParams.blocks.push(new L.Polyline([cP[0]], {
                color: 'green',
                weight: 2,
                opacity: 0.5,
                fill: true
            }));
            if (newBlock) {
                this.routeParams.blocks[this.routeParams.blocks.length - 1].addTo(this.leafletParams.map);
                this.routeParams.blocks[this.routeParams.blocks.length - 1].setLatLngs(cP);
            }
            else {
                this.routeParams.blocks[id].addTo(this.leafletParams.map);
                this.routeParams.blocks[id].setLatLngs(cP);
            }
        });
    }

    leafletOnMouseDown(model: any, event: any) {
        // This function handles any drawing of lines, rectangles, polylines, or points on the leaflet map
        // It has a large if statement that covers different items.
        // NOTE, a number of these functions disable map panning or zooming in the events fired when user
        // clicks on the route UI.

        model.routeParams.mouseDown = true;
        // This is the location of the mouse when the user clicks
        var ll = event.latlng;  // many events use this, shorter name

        if (model.routeParams.state === 'none') {
            return;
        }
        else if (model.routeParams.state === "bounds") {
            // This draws the bounding region for the path planning
            // It draws a rectancle on the map, and coordinates with the mousemove/mouseup events

            // Remove any old rectangles, if they exist
            if (model.routeParams.boundsRect !== undefined) {
                this.leafletParams.map.removeLayer(model.routeParams.boundsRect);
            }
            // Initial bounds are at the current mouse location
            model.routeParams.currentPoints = [[ll['lat'], ll['lng']], [ll['lat'], ll['lng']]];
            this.makeBoundsRect(model.routeParams.currentPoints);
            //auto compute cost map
            if (this.routeParams.boundsRect && this.routeParams.endPoint) {
                this.computeCostmap();
            }
        }
        else if (model.routeParams.state === "endPoint") {
            // This branch adds a destination to the map. Changes here should also
            // be made in the next branch

            // Remove any previous endpoints before adding the new endpoint
            if (model.routeParams.endPoint !== undefined) {
                this.leafletParams.map.removeLayer(model.routeParams.endPoint);
            }

            // Create the endpoint, add to the map, and add a popup
            this.makeEndPoint([ll.lat, ll.lng]);
            //auto compute cost map
            if (this.routeParams.boundsRect && this.routeParams.endPoint) {
                this.computeCostmap();
            }

            // This drawing function is complete, so reset the state, mouse state, and dragging
            model.routeParams.state = 'none';
            model.routeParams.mouseDown = false;
            this.leafletParams.map.dragging.enable();
            this.messageBox.close();
        }
        else if (model.routeParams.state === "addStart") {
            // This branch adds a current location or starting point to the map.
            // It is essentially identical to the previous branch, and could be
            // refactored for modularity.

            if (model.routeParams.startPoint !== undefined) {
                this.leafletParams.map.removeLayer(model.routeParams.startPoint);
            }

            const myIcon = icon(this.faTruck, {
                transform: {
                    size: 30
                },
                styles: {
                    'color': 'green'
                }
            });
            const fontAwesomeIcon = L.divIcon({
                html: myIcon.html[0],
                iconSize: [30, 30],
                iconAnchor: this.truckOffset,
                className: 'route-map-icon'
            });

            model.routeParams.startPoint = L.marker([ll.lat, ll.lng], { icon: fontAwesomeIcon})
            .addTo(this.leafletParams.map)
            .bindPopup('Location')
            .once('mouseover', () => {
                this.markerOnMouseover("startPoint");
            })
            .on('mouseout', () => {
                this.markerOffMouseover("startPoint");
            })
            .on('click', () => {
                this.markerClick("startPoint");
            });
            model.routeParams.startPoint.addTo(this.leafletParams.map);
            model.routeParams.state = 'none';
            model.routeParams.mouseDown = false;
            this.leafletParams.map.dragging.enable();
            this.messageBox.close();

            //auto plan if able?
            if (this.routeParams.routeNames.includes(this.routeParams.routeName)) {
                this.planRoute();
            }
        }
        else if (model.routeParams.state === 'addRoad') {
            // This branch is for drawing roads. The mousedown coordinates with the mousemove and mouseup events as well

            // Remove any old roads, if they exist
            if (model.routeParams.tmpRoad !== undefined) {
                this.leafletParams.map.removeLayer(model.routeParams.tmpRoad);
            }
            // Start the road with the same endpoint as the current mouse point
            model.routeParams.currentPoints = [[ll['lat'], ll['lng']], [ll['lat'], ll['lng']]];
            this.makeRoads([model.routeParams.currentPoints], true, false);
        }
        else if (model.routeParams.state === 'addBlock') {
            // This branch is for drawing polyline regions as nogo zones. Mousedown coordinates with mousemove, and dblclick events

            // Remove any old zones, if they exist
            if ((model.routeParams.tmpBlock !== undefined) && (model.routeParams.currentPoints.length === 0)) {
                this.leafletParams.map.removeLayer(model.routeParams.tmpBlock);
            }

            // Only the first mouse-down creates the polygon
            if (model.routeParams.currentPoints.length === 0) {
                model.routeParams.currentPoints = [[ll['lat'], ll['lng']]];
                model.routeParams.tmpBlock = new L.Polyline(model.routeParams.currentPoints, {
                    color: '#10FF00',
                    weight: 2,
                    opacity: 0.5,
                    fill: true
                });
                model.routeParams.roadBlockAdder.push("block");
                model.routeParams.tmpBlock.addTo(this.leafletParams.map)
                .once('mouseover', () => {
                    this.markerOnMouseover("addBlock");
                })
                .on('mouseout', () => {
                    this.markerOffMouseover("addBlock");
                })
                .on('click', () => {
                    this.markerClick("addBlock");
                });
            }
            // Every mouse down ADDS points to the polyline (these points are moved in the mousemove section)
            model.routeParams.currentPoints.push([ll['lat'], ll['lng']]);
            model.routeParams.tmpBlock.setLatLngs(model.routeParams.currentPoints);
        }
    }

    leafletOnMouseMove(model: any, event : any) {
        // This function enables interactive drawing, so users can see how their geometry is generated as they draw
        if ((model.routeParams.state == 'none') || (!model.routeParams.mouseDown)){
            return;
        }
        else if (model.routeParams.state == "bounds") {
            // Update rectangle for generating the bounds
            model.routeParams.currentPoints[1] = [event.latlng["lat"], event.latlng["lng"]];
            model.routeParams.boundsRect.setBounds(model.routeParams.currentPoints);
        }
        else if (model.routeParams.state === 'addRoad') {
            // Update line endpoint position
            model.routeParams.currentPoints[1] = [event.latlng["lat"], event.latlng["lng"]];
            model.routeParams.tmpRoad.setLatLngs(model.routeParams.currentPoints);
        }
        else if (model.routeParams.state === 'addBlock') {
            // Update last-line positions for drawing polylines
            model.routeParams.currentPoints[model.routeParams.currentPoints.length - 1] = [event.latlng["lat"], event.latlng["lng"]];
            model.routeParams.tmpBlock.setLatLngs(model.routeParams.currentPoints);
        }
    }

    leafletOnMouseUp(model: any, event : any) {
        // This function primarily resets the UI state and re-enables dragging/zooming
        // as appropriate.
        // NOTE: THis does NOT reset the state for "addBlock", which is for drawing polylines
        if (model.routeParams.state == 'none') {
            model.routeParams.mouseDown = false;
            return;
        }
        else if (model.routeParams.state == "bounds") {
            model.routeParams.mouseDown = false;
            this.leafletParams.map.dragging.enable();
            model.routeParams.state = 'none';
            // Need to also reset currentPoints for next time addRoad or addBlock is called
            model.routeParams.currentPoints = [];
            this.messageBox.close();
            return;
        }
        else if (model.routeParams.state === 'addRoad') {
            model.routeParams.mouseDown = false;
            this.leafletParams.map.dragging.enable();
            model.routeParams.state = 'none';
            // Need to also reset currentPoints for next time addRoad or addBlock is called
            model.routeParams.currentPoints = [];
            this.messageBox.close();
            this.messageBox.post("Press the 'Update Cost Map / Save' button for roads/blocks to be added to cost map.");
            return;
        }
        else if (model.routeParams.state === 'addBlock') {
            // DO NOT reset the state, double-click will do it instead
            this.messageBox.close();
            return;
        }
        else {
            model.routeParams.mouseDown = false;
            // For any uncaught states, always reset the state
            model.routeParams.state = 'none';
            return;
        }
    }

    leafletOnMouseDblClick(model: any, event : any) {
        // This function resets the UI for addBlock, which requires a double-click to reset
        if (model.routeParams.state === 'addBlock') {
            model.routeParams.currentPoints.pop(); //remove the extra added element
            // Close the polyline with the first point in the line
            model.routeParams.currentPoints[model.routeParams.currentPoints.length - 1] = model.routeParams.currentPoints[0];
            model.routeParams.tmpBlock.setLatLngs(model.routeParams.currentPoints);
            // reset the state
            model.routeParams.mouseDown = false;
            this.leafletParams.map.dragging.enable();
            this.leafletParams.map.doubleClickZoom.enable();
            model.routeParams.state = 'none';
            // Need to also reset currentPoints for next time addRoad or addBlock is called
            model.routeParams.currentPoints = [];
            this.messageBox.close();
            this.messageBox.post("Press the 'Update Cost Map / Save' button for roads/blocks to be added to cost map.");
        }
    }

    genMarker(i:any, size:any, color:any, offset:any) {
        const myIcon = icon(i, {
        transform: {
            size: size
        },
        styles: {
            'color': color
        }
        });
        const fontAwesomeIcon = L.divIcon({
            html: myIcon.html[0],
            iconSize: [12, 12],
            iconAnchor: offset,
            className: 'route-map-icon'
        });
        return fontAwesomeIcon;
    }

    markerOnMouseover(mType:any) {
        if (mType=="endPoint") {
            var m =  this.genMarker(this.faLocationDot, 50, "red", this.locationDotOffset);
            this.routeParams.endPoint.setIcon(m);
        }
        else if (mType=="startPoint") {
            var m =  this.genMarker(this.faTruck, 50, "green", this.truckOffset);
            this.routeParams.startPoint.setIcon(m);
        }
        else if (mType=="addRoad") {
            this.routeParams.tmpRoad.setStyle({
                color: '#0090FF',
                weight: 5,
                opacity: 0.5
            });
        }
        else if (mType=="addBlock") {
            this.routeParams.tmpBlock.setStyle({
                color: '#10FF00',
                weight: 5,
                opacity: 0.5,
                fill: true
            });
        }
    }

    markerOffMouseover(mType:any) {
        if (mType=="endPoint") {
            var m =  this.genMarker(this.faLocationDot, 30, "red",this.locationDotOffset);
            this.routeParams.endPoint.setIcon(m);
            this.routeParams.endPoint.once('mouseover', () => {
                this.markerOnMouseover("endPoint");
            });
        }
        else if (mType=="startPoint") {
            var m =  this.genMarker(this.faTruck, 30, "green",this.truckOffset);
            this.routeParams.startPoint.setIcon(m);
            this.routeParams.startPoint.once('mouseover', () => {
                this.markerOnMouseover("startPoint");
            });
        }
        else if (mType=="addRoad") {
            this.routeParams.tmpRoad.setStyle({
                color: '#0090FF',
                weight: 2,
                opacity: 0.5
            });
            this.routeParams.tmpRoad.once('mouseover', () => {
                this.markerOnMouseover("addRoad");
            });
        }
        else if (mType=="addBlock") {
            this.routeParams.tmpBlock.setStyle({
                color: '#10FF00',
                weight: 2,
                opacity: 0.5,
                fill: true
            });
            this.routeParams.tmpBlock.once('mouseover', () => {
                this.markerOnMouseover("addBlock");
            });
        }
    }

    markerClick(mType:any) {
        if (mType=="startPoint") {
            this.onSetLocationClick();
        }
        else if (mType=="endPoint") {
            //this should clear blocks and roads, but currently does not
            // this.onAddEndClick();
        }
        else if (mType=="addRoad") {
            this.onAddRoadClick();
        }
        else if (mType=="addBlock" && this.routeParams.state=="none") {
            this.onAddBlockClick();
        }
    }

    onSetBoundsClick() {
        this.leafletParams.map.dragging.disable();
        this.routeParams.state = "bounds";
        this.routeParams.currentPoints = [];
        this.messageBox.post("Click and drag mouse to specify bounds for route planning.");
    }

    onAddEndClick() {
        this.leafletParams.map.dragging.disable();
        this.routeParams.state = "endPoint";
        this.messageBox.post("Click to select destination for route planning.");
    }

    onAddRoadClick() {
        this.leafletParams.map.dragging.disable();
        this.routeParams.state = "addRoad";
        this.routeParams.currentPoints = [];
        this.messageBox.post("Click and drag mouse to specify location of road. Also set speed for road, or time to traverse road section.");
    }

    onAddBlockClick() {
        this.leafletParams.map.dragging.disable();
        this.leafletParams.map.doubleClickZoom.disable();
        this.routeParams.state = "addBlock";
        this.routeParams.currentPoints = [];
        this.messageBox.post("Click multiple times to select polygon region that is not traversible.");
    }

    onSetLocationClick() {
        this.leafletParams.map.dragging.disable();
        this.routeParams.state = "addStart";
        this.messageBox.post("Click to select starting point (or current location) for route planning.");
    }

    appendRouteURL(url:any,type:any) {
        // Helper functions for correctly formatting the input for the HTTP GET request
        function polyToString(poly : any) {
            var string = "[";
            for (var i = 0; i < poly._latlngs.length; i ++) {
                string = string.concat(`[${poly._latlngs[i].lat},${poly._latlngs[i].lng}],`);
            }
            string = string.substr(0, string.length - 1).concat(']');
            return string;
        }

        var geometry : any;
        // Roads
        if (this.routeParams.tmpRoad !== undefined && type == "road") {
            var value : number = this.routeParams.speedValue;
            var valueType : string = this.routeParams.speedType;
            geometry = "{"
            if (valueType === "s") {
                geometry = geometry + `"SPEED":${value},`;
            }
            else {
                geometry = geometry + `"TIME":${value},`;
            }
            geometry = geometry + `"LINE":${polyToString(this.routeParams.tmpRoad)}}`;
            url = url.concat("&GEOMETRY=" + encodeURIComponent(geometry));
        }
        // Blocks
        if (this.routeParams.tmpBlock !== undefined && type == "block") {
            geometry = `{"SPEED":0, "POLY":${polyToString(this.routeParams.tmpBlock)}}`
            url = url.concat("&GEOMETRY=" + encodeURIComponent(geometry));
        }

        return url
    }

    updateMap() {
        console.log("updating map");
        // Build the URL
        var url = `${this.baseUrl()}&SERVICE=UPDATE&NAME=${this.routeParams.routeName}`;

        // Adding roads and blocks in correct order - routeParams.roadBlockAdder is a list of order drawn on leaflet map
        for (var i = 0; i < this.routeParams.roadBlockAdder.length; i++) {
            let type = this.routeParams.roadBlockAdder[i];
            url = this.appendRouteURL(url,type)
        }
        
        // Update the speedmap on the server if new geometry
        if (this.routeParams.tmpRoad || this.routeParams.tmpBlock) {
            this.messageBox.post("Updating route plan...");
            this.busyboxService.start();
            this.http.get(url,this.getHttpOptions()).pipe(catchError(this.handleError("updatePathPlan", {}))).subscribe(response => {
                console.log("PATH PLANNING UPDATE RESPONSE", response);
                var status : any = response["status" as keyof typeof response];
                if (status == "map successfully updated") {
                    //refresh things
                    this.queryRoutes();
                    this.onClickMainIcon();
                    this.onClickMainIcon();

                    this.busyboxService.stop();
                    this.messageBox.post("Updating route plan... done.");

                    //redraw the costmap if it is displayed
                    if (this.routeParams.viewing.cost) {
                        this.leafletService.viewSpeedOrCostMap(this.routeParams.routeName,this.routeParams.availableRoutes[this.routeParams.routeName],"cost",this.routeParams.routeOutputs,true); //(name,type,channel,update)
                    }
                    //redraw the speedmap if it is displayed
                    if (this.routeParams.viewing.speed) {
                        this.leafletService.viewSpeedOrCostMap(this.routeParams.routeName,this.routeParams.availableRoutes[this.routeParams.routeName],"speed",this.routeParams.routeOutputs,true); //(name,type,channel,update)
                    }

                    //update roads
                    if (this.routeParams.tmpRoad !== undefined) {
                        if (this.routeParams.tmpRoad !== undefined) {
                        this.leafletParams.map.removeLayer(this.routeParams.tmpRoad);
                        }
                        this.makeRoads([this.routeParams.tmpRoad._latlngs], false, true);
                    }
                    //update blocks
                    if (this.routeParams.tmpBlock !== undefined) {
                        if (this.routeParams.tmpBlock !== undefined) {
                        this.leafletParams.map.removeLayer(this.routeParams.tmpBlock);
                        }
                        this.makeBlocks([this.routeParams.tmpBlock._latlngs], true);
                    }
                    //auto plan if able?
                    if (this.routeParams.startPoint) {
                        this.planRoute();
                    }
                    // reset road and block params
                    this.routeParams.tmpRoad = undefined;
                    this.routeParams.tmpBlock = undefined;
                    this.routeParams.roadBlockAdder = [];
                }
                else {
                    this.messageBox.post("Updating route plan... error.");
                }
                
            });
        }
        else {
            this.messageBox.post("No roads or blocks added");
        }
    }

    removeSavedMap(routeName:string) {
        // Build the URL
        var url = `${this.baseUrl()}&SERVICE=REMOVE&NAME=${routeName}`;
        // stop busybox if it is running already
        this.busyboxService.stop();
        // start busybox
        this.busyboxService.start();
        this.http.get(url,this.getHttpOptions()).pipe(catchError(this.handleError("computeRemovePlan", {}))).subscribe(response => {
            this.routeParams.routeName = "";
            this.routeParams.currentRoute = "Choose One";
            this.clearMap();
            this.queryRoutes();
            this.onClickMainIcon();
            this.onClickMainIcon();
            console.log("PATH PLANNING REMOVE RESPONSE", response);
            this.busyboxService.stop();
        });
        this.messageBox.post('Removed map "' + this.routeParams.routeName +'".');
    }

    computeCostmap() {
        // Basic checking to make sure user is submitting valid parameters
        if (this.routeParams.boundsRect === undefined) {
            this.messageBox.post("Define bounds before saving a map.")
            return;
        }
        if (this.routeParams.endPoint === undefined) {
            this.messageBox.post("Define destination point before saving a map.")
            return;
        }
        if (this.routeParams.routeName === '') {
            this.messageBox.post("Specify name of plan before saving map.");
            return;
        }
        var mapSource : string =  (<HTMLInputElement>document.getElementById("route-map-source")).value;
        this.routeParams.routeSource = mapSource;  // Save for debugging purposes
        if (mapSource === '') {
            this.messageBox.post("Select speed map source before saving map.");
            return;
        }
        console.log("Computing cost map");
        //collect params to compute cost map
        var maxPixels = 250000; // Make this a setting that users could change
        var bnds = this.routeParams.boundsRect._bounds;
        var sw = bnds._southWest;
        var ne = bnds._northEast;
        var time : string = this.leafletParams.leafletMapTime.substr(0, 13);
        var bounds : string = `[${sw.lat},${sw.lng},${ne.lat},${ne.lng}]`;
        var destination : string = `[${this.routeParams.endPoint._latlng.lat},${this.routeParams.endPoint._latlng.lng},${time}]`;
        var url : string = `${this.baseUrl()}&SERVICE=COMPUTE&NAME=${this.routeParams.routeName}&MAPSOURCE=${mapSource}&CRS=EPSG:4326&BOUNDS=${bounds}&DESTINATION=${destination}&OVERWRITE=TRUE&MAXPIXELS=${maxPixels}`;
        //start busybox
        this.busyboxService.start();
        this.messageBox.post("Preprocessing map for route plans...");
        //compute cost map

        this.http.get(url,this.getHttpOptions()).pipe(catchError(this.handleError("computePathPlan", {}))).subscribe(response => {
            console.log("PATH PLANNING COMPUTE RESPONSE", response);
            var status : any = response["status" as keyof typeof response];
            var error : any = response["Error" as keyof typeof response];
            if ((status !== undefined) && (status.includes('success'))) {
                //add new route to routeNames
                if (!this.routeParams.routeNames.includes(this.routeParams.routeName)) {
                    this.routeParams.routeNames.push(this.routeParams.routeName);
                }
                this.routeParams.currentRoute = this.routeParams.routeName;

                //refresh things
                this.queryRoutes();
                this.onClickMainIcon();
                this.onClickMainIcon();

                //display message notifying users
                this.messageBox.post("Preprocessing map for route plans... done.");
                //redraw the costmap if it is displayed
                if (this.routeParams.viewing.cost) {
                    this.leafletService.viewSpeedOrCostMap(this.routeParams.routeName,this.routeParams.availableRoutes[this.routeParams.routeName],"cost",this.routeParams.routeOutputs,true); //(name,type,channel,update)
                }
                //redraw the speedmap if it is displayed
                if (this.routeParams.viewing.speed) {
                    this.leafletService.viewSpeedOrCostMap(this.routeParams.routeName,this.routeParams.availableRoutes[this.routeParams.routeName],"speed",this.routeParams.routeOutputs,true); //(name,type,channel,update)
                }
                //plan the route if the start point is defined
                if (this.routeParams.startPoint) {
                    this.planRoute();
                }
            }
            //display error from pathplanningAPI
            else {
                this.messageBox.post(error);
            }
            this.busyboxService.stop();
        });
    }

    planRoute() {
        //basic checking to make sure params are valid
        if (this.routeParams.startPoint === undefined) {
            this.messageBox.post("Define start point before planning route.");
            return;
        }
        if (this.routeParams.routeName === '') {
            this.messageBox.post("Select existing plan name before planning route.");
            return;
        }
        if (!(this.routeParams.routeNames.includes(this.routeParams.routeName))) {
            this.messageBox.post("Compute cost map for " + this.routeParams.routeName + " before planning route.");
            return;
        }
        //set up params for route planning
        this.messageBox.post("Planning route...");
        var time : string = this.leafletParams.leafletMapTime.substr(0, 13);
        var location : string = `[${this.routeParams.startPoint._latlng.lat},${this.routeParams.startPoint._latlng.lng},${time}]`;
        var url : string = `${this.baseUrl()}&SERVICE=PLAN&NAME=${this.routeParams.routeName}&START=${location}`;

        this.busyboxService.start();
        this.http.get(url,this.getHttpOptions()).pipe(catchError(this.handleError("computePathPlan", {}))).subscribe(response => {
            console.log("PATH PLANNING 'PLAN' RESPONSE", response);
            var path : any = response["path" as keyof typeof response];
            var status : any = response["status" as keyof typeof response];
            // remove any old routes if they exist
            for (var i=0; i<this.routeParams.routes.length; i++) {
                for (var j=0; j<this.routeParams.routes[i].length; j++) {
                    this.leafletParams.map.removeLayer(this.routeParams.routes[i][j]);
                }
            }
            // Check to see if path planned was successful
            if (status === "path successfully planned") {
                // find min and max values for color changing polyline
                var min = 10000000;
                var max = 0;
                for (var i=1; i < path.length; i++) {
                    let distance = path[i-1][3]
                    let timeStep = path[i-1][2] - path[i][2];
                    let speed = distance/timeStep;
                    if (!min || speed < min) {
                        min = speed;
                    }
                    if (!max || speed > max) {
                        max = speed;
                    }
                }
                var points: any = [];
                var newRoute = [];
                //force path to start and end at the markers, might introduce tiny distance errors...
                path[0][0] = this.routeParams.startPoint._latlng.lat;
                path[0][1] = this.routeParams.startPoint._latlng.lng;
                path[path.length-1][0] = this.routeParams.endPoint._latlng.lat;
                path[path.length-1][1] = this.routeParams.endPoint._latlng.lng;
                for (var i=1; i < path.length; i++) {
                    points = [];
                    points.push([parseFloat(path[i-1][0]), parseFloat(path[i-1][1])]);
                    points.push([parseFloat(path[i][0]), parseFloat(path[i][1])]);
                    var color = this.colorScale(((path[i-1][3]/(path[i-1][2] - path[i][2]) - min) / (max - min)) * 100);
                    // If color is undefined (happens when max-min == 0 which is ocurs if path.length = 2)
                    if (max - min == 0) {
                        color = this.colorScale(50);
                    }
                    newRoute.push(new L.Polyline(points, {
                        color: color,
                        weight: 3,
                        opacity: 0.5
                    }));
                    newRoute[i-1].addTo(this.leafletParams.map);
                    this.routeParams.routes.push(newRoute);
                }

                //set the distance and time
                var totalDistance = 0;
                for (var i=0; i < path.length; i++) {
                    totalDistance+=path[i][3]
                }
                this.routeParams.routeInfo = {
                    distance: Math.round((totalDistance/1000 + Number.EPSILON) * 100) / 100,
                    time: Math.round((path[0][2]/60 + Number.EPSILON) * 100) / 100
                };

                console.log("COMPLETED ROUTE CREATION", path.length);
                this.messageBox.post("Planning route... done.");
            } 
            else {
                console.log("PATH FAILED");
                this.messageBox.post("Planning route... failed.");
            }
            this.busyboxService.stop();
        });
    }

    colorScale(p:any) {
        //convert p (percentage between 0-100) to heatmap. red is 0 and green is 100.
        var r, g, b = 0;
        if(p < 50) {
            r = 255;
            g = Math.round(5.1 * p);
        }
        else {
            g = 255;
            r = Math.round(510 - 5.10 * p);
        }
        var h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }

    changeSource(e:any) {
        this.routeParams.viewing.speed = false;
        this.routeParams.viewing.cost = false;
        //auto compute cost map
        if (this.routeParams.boundsRect && this.routeParams.endPoint) {
            this.computeCostmap();
        }
    }

    changeOutputs(e:any) {
        console.log("changed outputs",e)
        //update the leaflet map if we are displaying the speed map
        if (this.routeParams.viewing.speed) {
            this.leafletService.viewSpeedOrCostMap(this.routeParams.routeName,this.routeParams.availableRoutes[this.routeParams.routeName],"speed",this.routeParams.routeOutputs,true); //(name,type,channel,update)
        }

    }

    viewMap(type:string) {
        if (type=='speed') {
            this.routeParams.viewing.cost = false;
            if (this.routeParams.viewing.speed == false) {
                this.routeParams.viewing.speed = true;
            }
            else {
                this.routeParams.viewing.speed = false;
            }
        }
        if (type=='cost') {
            this.routeParams.viewing.speed = false;
            if (this.routeParams.viewing.cost == false) {
                this.routeParams.viewing.cost = true;
            }
            else {
                this.routeParams.viewing.cost = false;
            }
        }
        this.leafletService.viewSpeedOrCostMap(this.routeParams.routeName,this.routeParams.availableRoutes[this.routeParams.routeName],type,this.routeParams.routeOutputs,false); //(name,type,channel,update)
    }

    getHttpOptions() {
        var opts = {
            headers: new HttpHeaders({
              'Content-Type':'application/json',
              'Access-Control-Allow-Origin':'*'
            })
        };
        return opts
    }

    jumpToMap() {
        var bounds:any = [
            [this.routeParams.availableRoutes[this.routeParams.currentRoute].bounds[0], 
            this.routeParams.availableRoutes[this.routeParams.currentRoute].bounds[1]], 
            [this.routeParams.availableRoutes[this.routeParams.currentRoute].bounds[2],
            this.routeParams.availableRoutes[this.routeParams.currentRoute].bounds[3]]
        ];
        this.leafletParams.map.fitBounds(bounds);
    }

}