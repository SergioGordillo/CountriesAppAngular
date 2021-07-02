import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styles: [
  ]
})
export class CountriesInputComponent implements OnInit{
  
  @Output() onEnter: EventEmitter<string>= new EventEmitter();
  @Output() onDebounce: EventEmitter<string>= new EventEmitter();

  debouncer:Subject<string>=new Subject();

  term: string= '';

  ngOnInit(){
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value=>{
        this.onDebounce.emit(value);
    });
  }

  search(){
    this.onEnter.emit(this.term)
  }

  pressedKey(event:any){
    this.debouncer.next(this.term);
  }

}
