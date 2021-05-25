import { TcDataTableModule } from './_modules/tc-data-table/tc-data-table.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TcDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
