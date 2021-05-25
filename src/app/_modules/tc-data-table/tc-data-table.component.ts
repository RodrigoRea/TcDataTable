import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'tc-data-table',
  templateUrl: './tc-data-table.component.html',
  styleUrls: ['./tc-data-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TcDataTableComponent implements OnInit {

  @Input() textSearch: string = 'Procurar';
  @Input() itemsForPage: number = 0;

  auxdata: any;
  // p s g 
  private _data: any;
  @Input() set data(d: any){
    if( this._data === undefined || this._data === null ){
      this._data = d;
      this.auxdata = this._data;    
    }

    setTimeout(() => { this.setDataLabel(); });
    
  }
  get data():any{
    return this._data;
  }

  @ViewChild('table') table:ElementRef | undefined;

  @Output() todata: EventEmitter<any> = new EventEmitter<any>();

  header = new Array<any>();
  headerShow = new Array<any>();
  body = new Array<any>();

  total: number = 0;
  exibicaoPorPagina: number = 0;
  totalDePaginas: number = 0;
  paginaAtual: number = 1;

  arrayPag = new Array<number>();

  constructor(
    private datepipe: DatePipe,
  ) { }

 
  setDataLabel(){
    let ths: NodeListOf<HTMLElement> = this.table?.nativeElement.firstChild.firstChild.childNodes;
    for(let i = 0; i< ths.length; i++){
      let th: HTMLElement = ths[i];
      th.setAttribute('scope','col');
    }
    let trs: NodeListOf<HTMLElement> = this.table?.nativeElement.lastChild.children;
    for(let i = 0; i< trs.length; i++){
      for(let k = 0; k < trs[i].childNodes.length; k++){
        let td = <HTMLElement> trs[i].childNodes[k];
        // console.log( 'td[' + i + ']['+k+'] data-label='+ths[k].textContent+"", td );
        td.setAttribute('data-label', ths[k].textContent+"" );
      }
    }
  }

  ngAfterViewInit(){
    this.setDataLabel();
  }

  

  ngOnInit(): void {
    if( this.itemsForPage <= 0 ){
      this.itemsForPage = 10;
    }
    this.exibicaoPorPagina = this.itemsForPage;

    this.init(this.data);
  }

  init(auxdata: any):void {

    this.pageCalc();

    if( this.total > 0 ){
      for( const key in auxdata[0] ){
        (this.header).push(key);
      }
    }
    
    setTimeout(() => {
      this.setToPage(1);
    });
  }


  private isADate(d: any){
    if (Object.prototype.toString.call(d) === "[object Date]") {;
      return !(isNaN(d.getTime()));      
    }
    return false;
  }

  buscar(valor: string){
    this._buscar(valor, this.auxdata);
  }

  private _buscar(valor: string, emObject: any, camposDebusca?: any): any{
    
    if (valor != ""){
      if( emObject.length < 1 ){
        return emObject;
      }
      if( camposDebusca === undefined || camposDebusca === null ){
        camposDebusca = [];
        for (const key in emObject[0]) {
          camposDebusca.push( key );
        }
      }
      if( camposDebusca.length < 1 ){
        return emObject;
      }
      valor = valor.toLowerCase();
      var result=[];                
      for (const key in emObject) {
        var oObject = emObject[key];
        if (oObject){
          for( const objectvalue of camposDebusca ){
            const dt = new Date(oObject[objectvalue])
            if( this.isADate(dt) && typeof ((dt).getMonth) === 'function' ){
              const data1 = this.datepipe.transform(dt, 'dd/MM/yyyy hh:mm');
              const data2 = this.datepipe.transform(dt, 'medium');
              const strToTest = (data1+" "+data2+" "+oObject[objectvalue]).toLowerCase();
              if( (strToTest.indexOf(valor)>=0) && (result).indexOf(oObject) == -1 ){
                result.push(oObject); break;
              }
            } else {
              const strToTest = (oObject[objectvalue]+"").toLowerCase();            
              if( (strToTest.indexOf(valor)>=0) && (result).indexOf(oObject) == -1 ){
                result.push(oObject); break;
              }
            }
          } 
        }
      }

      this._data = result;
      this.setToPage(1);
      return result;
    }    
    this._data = emObject;
    this.setToPage(1);
    return emObject;
  }

  pageCalc(){
    this.arrayPag = new Array<number>();
    this.total = (this._data).length;
    this.totalDePaginas = Math.ceil( (this.total / this.exibicaoPorPagina) );
    for( let i=0; i < this.totalDePaginas;i++){
      this.arrayPag.push(i);
    }
    if( this.total == 0 ){
      this.todata.emit([]);
      return;
    }
  }

  setToPage(p: number){
    this.pageCalc();
    
    let emObject = [];
    this.paginaAtual = p;
    if( this.paginaAtual <= 0 ){
      this.paginaAtual = 1;
    }
    if( this.paginaAtual >= this.totalDePaginas ){
      this.paginaAtual = this.totalDePaginas;
    }
    if( this.paginaAtual > 0 ){
      let ini = (this.paginaAtual * this.exibicaoPorPagina) - this.exibicaoPorPagina;
      let fim = ini + this.exibicaoPorPagina;      
      emObject = (this.data).slice( ini , fim);
      this.todata.emit(emObject);
    }    
  }

  setToPagePrev(){
    this.paginaAtual--;
    this.setToPage(this.paginaAtual);
  }

  setToPageNext(){
    this.paginaAtual++;
    this.setToPage(this.paginaAtual);
  }

  

}

