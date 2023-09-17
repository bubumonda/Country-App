import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer:Subject<string> = new Subject();
  private debouncerSubscription?: Subscription;

  // @ViewChild('txtSearchInput')
  // public txtSearchInput!: ElementRef<HTMLInputElement>;

  @Output()
  public OnValue:EventEmitter<string> = new EventEmitter();

  @Output()
  public OnDebounce:EventEmitter<string> = new EventEmitter();

  @Input()
  public initialValue: string= '';

  @Input()
  public placeholder: string= '';

  emitSearch(value:string):void{
    this.OnValue.emit(value);
  }
  ngOnInit(): void {
    this.debouncerSubscription= this.debouncer
    .pipe(
      debounceTime(300)
      )
      .subscribe(value=>{
        this.OnDebounce.emit(value);
      })
    }
    ngOnDestroy(): void {
      this.debouncerSubscription?.unsubscribe();
    }

    onKeyPress( searchTerm: string){
      this.debouncer.next(searchTerm);
  }

}
