import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html'
})
export class CmpAComponent implements OnInit {

  constructor(private logService: LogService, private dataService:DataService ) { }

  ngOnInit() {
    this.logService.LogMessage('On Init aaa');
  }

  private items:number[] = [];

  onClick() {
    this.dataService.addData(Math.random()*10);
    this.items=this.dataService.getData();
  }

  onSend(value:string) {
    this.dataService.pushData(value);
  }

}
