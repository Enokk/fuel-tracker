import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
