import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class BusyboxService {

    busyboxParams = {
        hidden: true,
        count: 0
    }

    start() {
        this.busyboxParams.hidden = false;
        this.busyboxParams.count = this.busyboxParams.count + 1;
    }
    
    stop() {
        this.busyboxParams.count = this.busyboxParams.count - 1;
        if  (this.busyboxParams.count <= 0) {
          this.busyboxParams.hidden = true;
          this.busyboxParams.count = 0;
        }
    }
    
    stopForce() {
        this.busyboxParams.hidden = true;
        this.busyboxParams.count = 0
    }

}