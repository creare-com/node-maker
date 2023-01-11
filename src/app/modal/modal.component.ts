import { Component } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
  })
export class CustomModal {

    genModal(text:string) {
        // Get the modal
        var modal = <HTMLInputElement>document.getElementById("myModal");
        var modalText = <HTMLInputElement>document.getElementById("textID");
        modalText.innerHTML = text;
        modal.style.display = "block";
        // Get the <span> element that closes the modal
        var span = <HTMLInputElement>document.getElementsByClassName("modalClose")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

}