import { TcDataTableConfigDirective } from './tc-data-table-config.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcDataTableComponent } from './tc-data-table.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TcDataTableComponent,
    TcDataTableConfigDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TcDataTableComponent
  ],
  providers: [
    DatePipe
  ]
})
export class TcDataTableModule { }
