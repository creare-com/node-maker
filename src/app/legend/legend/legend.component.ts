import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LegendService } from './legend.service';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {

  @Output() updateLegend: EventEmitter<any> = new EventEmitter();

  constructor(public legendService:LegendService) {  }

  legendParams = this.legendService.legendParams;

  ngOnInit(): void {  }

  legendScaleChange() {
    // console.log("this.legendParams.vMin",this.legendParams.vMin);
    // console.log("this.legendParams.vMax",this.legendParams.vMax);
    var eleMin = <HTMLInputElement>document.getElementById("legend-vmin");
    var eleMax = <HTMLInputElement>document.getElementById("legend-vmax");
    eleMin.value = String(this.legendParams.vMin);
    eleMax.value = String(this.legendParams.vMax);
    this.updateLegend.emit(null);
  }

}
