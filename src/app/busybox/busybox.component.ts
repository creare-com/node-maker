import { Component, OnInit } from '@angular/core';
import { BusyboxService } from './busybox.service';

@Component({
  selector: 'app-busybox',
  templateUrl: './busybox.component.html',
  styleUrls: ['./busybox.component.css']
})
export class BusyboxComponent implements OnInit {

  constructor(private busyboxService:BusyboxService) { }

  busyboxParams = this.busyboxService.busyboxParams;

  ngOnInit(): void { }

}
