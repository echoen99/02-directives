import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html'
})
export class CmpBComponent implements OnInit {
  value = '';
  constructor(private logService: LogService, private dataService:DataService ) { }

  ngOnInit() {
    this.logService.LogMessage('On Init bbb');
    this.dataService.pushedData.subscribe(
      data => this.value = data
    );
  }

  private items:number[] = [];
  private popedItem:number;

  onClick() {
    this.dataService.addData(Math.random()*10);
    this.items=this.dataService.getData();
  }

  onPop() {
    this.popedItem=this.dataService.popData();
  }


}
