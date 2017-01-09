import { Injectable } from '@angular/core';
import { ITableData } from './table-data';

@Injectable()
export class TableDataService {
  private data:ITableData[]= 
    [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },

      // ... list of items

      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      }
    ];

  getData(): ITableData[] {
    return this.data;
  }

}
