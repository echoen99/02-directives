import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {
  stringInterpulation = "This is a string interpulation!";
  numberInterpulation = 2;

  onTest() {
    return true;
  }

  onClicked(value:string) {
    alert(value);
  }
}
