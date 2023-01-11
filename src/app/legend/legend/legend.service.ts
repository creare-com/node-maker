import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LegendService {

    legendParams = {
        showLegend:false,
        title:"Legend",
        vMin: 0,
        vMax: 1,
        cmap: 'viridis',
        cmapWidth: "1.5em",
        cmapHeight: "8em",
        imageSrc: "assets/cmaps/viridis.png",
        speedOrCost: false
    };

    // Set the colormap
    setColormap(value: string) {
        this.legendParams.cmap = value;
        this.legendParams.imageSrc = "assets/cmaps/" + value + ".png";
        var imgSrc = <HTMLInputElement>document.getElementById("cmapImage");
        imgSrc.src = this.legendParams.imageSrc;
    }

    // Set the upper and lower limits of the colormap
    setClims(lower : any, upper : any) {
        this.legendParams.vMin = lower;
        this.legendParams.vMax = upper;
        var eleMin = <HTMLInputElement>document.getElementById("legend-vmin");
        var eleMax = <HTMLInputElement>document.getElementById("legend-vmax");
        eleMin.value = String(this.legendParams.vMin);
        eleMax.value = String(this.legendParams.vMax);
    }

    // Set the title for the legend (units go here)
    setTitle(value:string) {
        this.legendParams.title = value;
        var ele = <HTMLInputElement>document.getElementById("legend-title");
        ele.innerHTML = this.legendParams.title;
    }

    // Hide the Legend (it is hidden by default)
    hide() {
        this.legendParams.showLegend = false;
        var ele = <HTMLInputElement>document.getElementById("legend-container");
        ele.style.display = "none";
    }

    // Show the legend
    show() {
        this.legendParams.showLegend = true;
        var ele = <HTMLInputElement>document.getElementById("legend-container");
        ele.style.display = "block";
        if (this.legendParams.speedOrCost) {
            var ele = <HTMLInputElement>document.getElementById("legend-vmax");
            ele.disabled = true;
            var ele = <HTMLInputElement>document.getElementById("legend-vmin");
            ele.disabled = true;
        }
        else {
            var ele = <HTMLInputElement>document.getElementById("legend-vmax");
            ele.disabled = false;
            var ele = <HTMLInputElement>document.getElementById("legend-vmin");
            ele.disabled = false;
        }
    }

}