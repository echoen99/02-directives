import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service'

@Injectable()
export class DataService {
  pushedData = new EventEmitter<string>();

  private data:number[] = [];

  constructor(private logService:LogService) {}

  addData(input: number) {
    this.data.push(input);
    this.logService.LogMessage(`number ${input} pushed`)
  }

  popData():number {
    return this.data.pop()
  }

  getData() {
    return this.data;
  }

  pushData(value: string) {
    this.pushedData.emit(value);
  }

}
