import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CmpAComponent } from './cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-b/cmp-b.component';
import { LogService } from './log.service'
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
