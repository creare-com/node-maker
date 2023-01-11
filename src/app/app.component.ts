import { Component } from '@angular/core';
import { SetupService } from './services/setup.service';
import { LegendService } from './legend/legend/legend.service';
import { faRoute, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  faRoute = faRoute;
  faProjectDiagram = faProjectDiagram;

  constructor(public setupService:SetupService, public legendService:LegendService) { }
  
  setupParams = this.setupService.setupParams;
  legendParams = this.legendService.legendParams;
}
