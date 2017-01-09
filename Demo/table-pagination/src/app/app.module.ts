import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TableDataService } from './smart-table/table-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
