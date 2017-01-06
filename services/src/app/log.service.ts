import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }
  LogError(message: string) {
    console.log("Error:{message}");
  }
  LogMessage(message: string) {
    console.log(message);
  }
}
