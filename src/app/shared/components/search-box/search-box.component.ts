import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  // @ViewChild('txtSearchInput')
  // public txtSearchInput!: ElementRef<HTMLInputElement>;

  @Output()
  public OnValue:EventEmitter<string> = new EventEmitter();
  @Input()
  public placeholder: string= '';
  emitSearch(value:string):void{
    this.OnValue.emit(value);
  }

}
