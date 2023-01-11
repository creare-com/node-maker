import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {

  messageColor : string = "black";
  show : boolean = false;
  message: string = "";

  // constructor(private cdr: ChangeDetectorRef) {
  constructor() {
   }

  ngOnInit(): void {
      }

  // post(message : string, style : string = "normal"){
  //   this.message = message;
  //   if (style === "normal"){
  //     this.messageColor = "black";
  //   } else if (style == "warn"){
  //     this.messageColor = "purple";
  //   } else if (style === "err"){
  //     this.messageColor = "#FF4444";
  //   }
  //   this.show = true;
  //   // this.cdr.detectChanges();
  // }

  // close(){
  //   this.show = false;
  //   this.message = "";
  //   console.log('closing');
  //   // this.cdr.detectChanges();
  // }

  post(message : string, style : string = "normal"){
    // We need to manipulate the DOM directly, because we don't know how to pass
    // and instance of a component to a child
    var container = <HTMLInputElement>document.getElementById("messageboxContainer");
    container.style.display = "inherit";

    var text = <HTMLInputElement>document.getElementById("mboxMessage");
    text.innerHTML = message;
    if (style === "normal"){
      text.style.color = "black";
    } else if (style == "warn"){
      text.style.color = "purple";
    } else if (style === "err"){
      text.style.color = "#FF4444";
    }
    this.show = true;
  }

  close(){
    var container = <HTMLInputElement>document.getElementById("messageboxContainer");
    container.style.display = "none";
    this.show = false;
    this.message = "";
    console.log('closing');
  }


}
