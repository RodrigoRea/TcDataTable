import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[config]'
})
export class TcDataTableConfigDirective implements OnInit{

  @Input() config: any;

  constructor(
    private el: ElementRef,
  ) { 
    
  }

  ngOnInit(){
    console.log('TcDataTableConfigDirective', this.config);
  }

}

